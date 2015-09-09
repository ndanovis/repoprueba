---
permalink: /noticias.html
title: Noticias
---

# Últimas noticias


{% for post in site.posts %}

<article class="post">
    <span class="post-meta">
        <i class="fa fa-calendar"></i> <time datetime="{{ post.date | date: '%-d' }}/{{ post.date | date: '%-m' }}/{{ post.date | date: '%Y' }}">
            {{ post.date | date: '%-d' }}/{{ post.date | date: '%-m' }}/{{ post.date | date: '%Y' }}
        </time>
        &nbsp;<i class="fa fa-tag"></i>
    </span>

    <h3><a href="{{ site.url }}{{ post.permalink }}">{{ post.title }}</a></h3>
</article>

{% endfor %}
