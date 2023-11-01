---
layout: page
title: People
permalink: /people/
---

## People

Researchers participating in SCSOK.

{% for person in site.data.people %}
* {{ person.name }}
    * [{{ person.group }}, {{ person.institute }}]({{ person.url }}){:target="_blank"}
    * {{ person.description }}
{% endfor %}
