# hexo-tag-swiper

A plugin that you can using [swiperjs](https://swiperjs.com) in Hexo post.

## Installation

```bash
npm install --save hexo-tag-swiper
```

## Usage

Use with any markdown content.

Syntax: 

```text
{% swiper %}
  {% swiperItem %}
    your content 1
  {% endswiperItem %}
  {% swiperItem %}
    your content 2
  {% endswiperItem %}
{% endswiper %}
```

Example:

```text
{% swiper %}
  {% swiperItem %}
    William Stoner is born on a small farm in 1891. One day his father suggests he should attend the University of Missouri to study agriculture. Stoner agrees but, while studying a compulsory literature course, he quickly falls in love with literary studies. Without telling his parents, Stoner quits the agriculture program and studies only the humanities. He completes his MA in English and begins teaching. In graduate school, he is friendly with fellow students Gordon Finch and Dave Masters. World War I begins, and Gordon and Dave enlist. Despite pressure from Gordon, Stoner decides to remain in school during the war. Masters is killed in France, while Finch sees action and becomes an officer. At a faculty party, Stoner meets and becomes infatuated with a young woman named Edith, who is staying with an aunt for a few weeks.
  {% endswiperItem %}
  {% swiperItem %}
    Stoner woos Edith, and she agrees to marry him. Stoner’s marriage to Edith is bad from the start. It gradually becomes clear that Edith has profound emotional problems. Significantly, she is bitter about having cancelled a trip to Europe with her aunt to marry Stoner. After three years of marriage, Edith suddenly informs Stoner that she wants a baby. She suddenly becomes passionate sexually, but this period is brief. When their daughter Grace is born, Edith remains bedridden for nearly a year, and Stoner largely cares for their child alone. He grows close with his young daughter, who spends most of her time with him in his study. Stoner gradually realizes that Edith is waging a campaign to separate him from his daughter emotionally.
  {% endswiperItem %}
{% endswiper %}
```

Use with image.

Syntax: 

```text
{% swiper %}
  {% swiperImageItem [url] [ratio] %}
  {% swiperImageItem [url] [ratio] %}
{% endswiper %}
```

Example: 

```text
{% swiper %}
  {% swiperImageItem https://fastly.jsdelivr.net/gh/Dedicatus546/image@main/2023/04/02/202304022159088.avif 1.77778 %}
  {% swiperImageItem https://fastly.jsdelivr.net/gh/Dedicatus546/image@main/2023/04/02/202304022159851.avif 1 %}
{% endswiper %}
```

You can see the [demo page](https://prohibitorum.top/4f1e26b032dc) and watch the effect.

## Configuration

You can configure the `js`, `css` in your main _config.yml:

Example configuration:

```yml
swiper:
  js: "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.js"  // default is "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.js"
  css: "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.css"  // default is "https://cdn.jsdelivr.net/npm/swiper@11.1.9/swiper-bundle.min.css"
```