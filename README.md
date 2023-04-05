# hexo-tag-swiper

using [swiperjs](https://swiperjs.com) in Hexo posts/pages

## Installation

```bash
npm install --save hexo-tag-swiper
```

## Usage

```bash
{% swiper %}
  {% swiperItem %}
    content1
  {% endswiperItem %}
  {% swiperItem %}
    content2
  {% endswiperItem %}
  {% swiperItem %}
    content2
  {% endswiperItem %}
{% endswiper %}
```

or

```bash
{% swiper %}
  {% swiperImageItem [url] [ratio = 1.77778] %}
  {% swiperImageItem [url] [ratio = 1.77778] %}
{% endswiper %}
```

see the [demo page](https://prohibitorum.top/4f1e26b032dc.html)

## Configuration

You can configure the `jsUrl`, `cssUrl` in your main `_config.yml`:

Example configuration:

```yml
swiper:
  jsUrl: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"  // default is "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
  cssUrl: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"  // default is "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
```

## Style

there are some custom style for swiper.

Built-in global css

```css
:root {
  --swiper-navigation-size: 1.25em;
}

.swiper {
  margin-bottom: 20px;
}

.swiper-slide {
  box-sizing: border-box;
  padding: 0 calc(var(--swiper-navigation-size) / 44 * 27 + 2 * var(
          --swiper-navigation-sides-offset,
          10px
        ) + 6px);
}

.swiper-button-wrapper {
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  width: calc(
    var(--swiper-navigation-size) / 44 * 27 + 2 * var(
        --swiper-navigation-sides-offset,
        10px
      ) + 6px
  );
  background-color: var(--content-bg-color);
}

.swiper-button-wrapper.swiper-button-wrapper-prev {
  left: 0;
}

.swiper-button-wrapper.swiper-button-wrapper-next {
  right: 0;
}
```

Built-in `next` theme css

```css
:root {
  --swiper-theme-color: var(--theme-color);
}

.swiper .swiper-slide .swiper-slide-img {
  display: block;
  width: 100%;
  object-fit: contain;
  background: var(--body-bg-color);
  margin: 0;
}
```

if your theme is not `next`, you can write extra style to adapt it in `scripts` folder, such as:

```js
// scripts/swiper.theme.js
hexo.extend.injector.register("body_end", () => {
  const { theme = "your theme" } = hexo.config || {};
  if (theme === "your theme") {
    return `<style>
      // some extra style
    </style>`;
  }
  return "";
});
```

there are many css variable in swiper, for examples: `--swiper-theme-color`, `--swiper-navigation-size` ... you can find them in the source code of swiper.
