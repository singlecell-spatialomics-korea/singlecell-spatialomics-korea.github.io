---
layout: page
title: Publications
subtitle: Publications by participating research groups.
permalink: /publications/
---

<ul>
    {% for group in site.data.publications %}
    <li><a href="https://doi.org/{{ group.doi }}" target="_blank">{% for author in group.authors %}{{ author }}, {% endfor %}"{{ group.title }}", <i>{{ group.journal }}</i> <b>{{ group.volume }}{% if group.issue %}({{ group.issue }}){% endif %}</b>, {{ group.pages }}, doi:{{ group.doi }}</a></li>
    {% endfor %}
</ul>