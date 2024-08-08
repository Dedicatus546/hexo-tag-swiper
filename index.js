const { merge } = require("lodash");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const nunjucks = require("nunjucks");

const css = hexo.extend.helper.get("css").bind(hexo);
const js = hexo.extend.helper.get("js").bind(hexo);

/**
 * @type {{js?: string; css?: string}}
 */
const swiperUserConfig = hexo.config.swiper;
const swiperGlobalConfig = merge(
  {
    js: "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.js",
    css: "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.css",
  },
  swiperUserConfig
);
/**
 * create random str that we can use it to distinguish swiper instance.
 * @returns {string}
 */
const createRandomId = () => {
  return Math.random().toString(36).slice(-8);
};

hexo.extend.tag.register(
  "swiper",
  (args, content) => {
    const random = createRandomId();
    const id = `swiperInst-${random}`;
    const data = hexo.render.renderSync({
      text: content,
    });

    const str = nunjucks.renderString(
      readFileSync(path.resolve(__dirname, "src", "swiper.njk"), "utf8"),
      {
        swiperId: id,
        direction: "horizontal",
        swiperItemData: data,
      }
    );

    return str;
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
    return `<div class="swiper-slide">${data}</div>`;
  },
  {
    ends: true,
  }
);

hexo.extend.tag.register("swiperImageItem", (args, content) => {
  const [src, ratio = "1.77778"] = args;
  return `<div class="swiper-slide">
      <img
        class="swiper-slide-img"
        src=${src} 
        style="aspect-ratio: ${ratio}" 
      />
    </div>`;
});

// insert swiper js
hexo.extend.injector.register("body_end", () => {
  const { js: jsUrl } = swiperGlobalConfig;
  return js(jsUrl);
});

// insert swiper css
hexo.extend.injector.register("body_end", () => {
  const { css: cssUrl } = swiperGlobalConfig;
  return css(cssUrl);
});

hexo.extend.injector.register("body_end", () => {
  const { theme } = hexo.config;
  if (theme === "next") {
    return `<style>
      :root {
        --swiper-theme-color: var(--theme-color);
        --swiper-pagination-bottom: 0;
      }
      .swiper {
        padding-bottom: 32px;
        margin-bottom: 20px;
      }
      .swiper .swiper-slide .swiper-slide-img {
        display: block;
        width: 100%;
        object-fit: contain;
        background: var(--body-bg-color);
        margin: 0;
      }
    </style>`;
  }
  return "";
});
