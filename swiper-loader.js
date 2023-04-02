(function (window) {
  let swiper = window.Swiper;
  let loaderPromise = Promise.resolve();
  const defaultJsUrl =
    "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js";
  const defaultCssUrl =
    "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css";

  const isLoaded = async () => {
    await loaderPromise;
    return !!swiper;
  };

  window.$SwiperLoader = {
    async load(
      jsUrl = defaultJsUrl,
      cssUrl = defaultCssUrl,
    ) {
      if (await isLoaded()) {
        return;
      }
      const styleTag = document.createElement("link");
      const scriptTag = document.createElement("script");
      // TODO fix reject error
      return (loaderPromise = Promise.all([
        new Promise((resolve, reject) => {
          let callback;
          styleTag.addEventListener(
            "load",
            (callback = () => {
              styleTag.removeEventListener("load", callback);
              resolve();
            })
          );
          styleTag.setAttribute("rel", "stylesheet");
          styleTag.setAttribute("href", cssUrl);
          document.head.appendChild(styleTag);
        }),
        new Promise((resolve, reject) => {
          let callback;
          scriptTag.addEventListener(
            "load",
            (callback = () => {
              scriptTag.removeEventListener("load", callback);
              resolve();
            })
          );
          scriptTag.setAttribute("src", jsUrl);
          document.body.appendChild(scriptTag);
        }),
        Promise.resolve().then(() => {
          // custom style for swiper
          const styleTag = document.createElement("style");
          styleTag.innerHTML = `
            :root { 
              --swiper-navigation-size: 1.25em 
            }

            .swiper {
              margin-bottom: 20px;
            }

            .swiper-slide {
              box-sizing: border-box;
              padding: 0 calc(var(--swiper-navigation-size)/ 44 * 27 + 2 * var(--swiper-navigation-sides-offset, 10px) + 6px);
            }

            .swiper-button-wrapper {
              position: absolute;
              z-index: 10;
              top: 0;
              bottom: 0;
              width: calc(var(--swiper-navigation-size)/ 44 * 27 + 2 * var(--swiper-navigation-sides-offset, 10px) + 6px);
              background-color: var(--content-bg-color);
            }

            .swiper-button-wrapper.swiper-button-wrapper-prev {
              left: 0;
            }

            .swiper-button-wrapper.swiper-button-wrapper-next {
              right: 0;
            }
          `;
          document.head.append(styleTag);
        }),
      ]));
    },
  };
})(window);
