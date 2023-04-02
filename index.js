const fs = require("node:fs");
const uuid = require("uuid");
const path = require("node:path");

hexo.extend.tag.register(
  "swiper",
  (args, content) => {
    const { jsUrl, cssUrl } = hexo.config.swiper || {};

    const sId = uuid.v4();
    const elId = `swiperInst-${sId}`;
    const data = hexo.render.renderSync({
      text: content,
    });

    return `
      <div class="swiper" id="${elId}" style="width: 100%">
        <div class="swiper-wrapper">
          ${data}
        </div>
        <div class="swiper-button-wrapper swiper-button-wrapper-prev">
          <div class="swiper-button-prev"></div>
        </div>
        <div class="swiper-button-wrapper swiper-button-wrapper-next">
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <script>
        window.addEventListener("load", () => {
          window.$SwiperLoader.load(${jsUrl}, ${cssUrl}).then(() => {
            const swiperInst = new Swiper("#${elId}", {
              autoHeight: true,
              observer: true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            });
            // fix swiper can't resize hight when change slide height in some condition
            // such as using detail tag
            const resizeObserver = new ResizeObserver((entries) => {
              swiperInst.update();
            });
            document.querySelectorAll("#${elId} .swiper-slide").forEach(el => {
              resizeObserver.observe(el)
            });
          });
        });
      </script>
    `;
  },
  {
    ends: true,
  }
);

hexo.extend.tag.register(
  "swiperItem",
  (args, content) => {
    const data = hexo.render.renderSync({
      text: content,
      engine: "markdown",
    });
    return `
      <div class="swiper-slide">
        ${data}
      </div>
    `;
  },
  {
    ends: true,
  }
);

hexo.extend.injector.register("head_end", () => {
  const data = fs.readFileSync(path.resolve(__dirname, "swiper-loader.js"), {
    encoding: "utf-8",
  });
  return `<script>
    ${data}
  </script>`;
});

hexo.extend.injector.register("body_end", () => {
  const { theme = "next" } = hexo.config.swiper || {};
  if (theme === "next") {
    return `<style>
      :root {
        --swiper-theme-color: var(--theme-color);
      }
    </style>`;
  }
  return "";
});
