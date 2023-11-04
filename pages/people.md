---
layout: page
title: People
permalink: /people/
---

## People

Researchers participating in SCSOK.

{% assign sortedpeople = site.data.people | sort %}
{% for person in sortedpeople %}
* {{ person.prefix }} {{ person.name }}
    * [{{ person.group }}, {{ person.institute }}]({{ person.url }}){:target="_blank"}
{% endfor %}
