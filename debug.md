---
layout: archive
---
post
<ul>
  {% for post in site.posts %}
    <li>&raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>










patterns
<ul>
  {% for post in site.patterns %}
    <li>&raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>









{% for collection in site.collections %}
  <h2>Items from {{ collection.label }}</h2>
  <ul>
    {% for item in site[collection.label] %}
      <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
