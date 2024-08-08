# hexo-tag-swiper

A plugin that you can using [swiperjs](https://swiperjs.com) in Hexo post.

## Installation

```bash
npm install --save hexo-tag-swiper
```

## Usage

Use with any markdown content.

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

use with image.

```bash
{% swiper %}
  {% swiperImageItem [url] [ratio] %}
  {% swiperImageItem [url] [ratio] %}
{% endswiper %}
```

You can see the [demo page](https://prohibitorum.top/4f1e26b032dc) and watch the effect.

## Configuration

You can configure the `js`, `css` in your main `_config.yml`:

Example configuration:

```yml
swiper:
  js: "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.js"  // default is "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.js"
  css: "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.css"  // default is "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.css"
```