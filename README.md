# hexo-tag-swiper

using [swiperjs](https://swiperjs.com) in Hexo posts/pages

## Installation

```bash
npm install --save hexo-tag-swiper
```

## Usage

The full tag format is as follows:

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

example:

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

## Configuration

You can configure the `jsUrl`, `cssUrl` and `theme` in your main `_config.yml`:

Example configuration:

```yml
swiper:
  jsUrl: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"  // default is "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
  cssUrl: ""https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css""  // default is "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
  theme: "next"  // default is ""
```

## Style

there are some style change for swiper.

Built-in global css

```css
:root {
  --swiper-navigation-size: 1.25em;
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

Built-in next theme css

```css
<style>
  :root {
  --swiper-theme-color: var(--theme-color);
  }
</style>
```

if your theme is not next, you can write extra style to adapt it in `scripts`, such as:

```js
// scripts/swiper.theme.js
hexo.extend.injector.register("body_end", () => {
  const { theme = "your theme" } = hexo.config.swiper || {};
  if (theme === "your theme") {
    return `<style>
      // some extra style
    </style>`;
  }
  return "";
});
```

and then change `_config.yml`

```yml
swiper:
  theme: "your theme"
```

there are many css variable in swiper, for examples: `--swiper-theme-color`, `--swiper-navigation-size` ... 

## License

Copyright (c) 2015, Z4Tech. Licensed under the [MIT license](LICENSE).
