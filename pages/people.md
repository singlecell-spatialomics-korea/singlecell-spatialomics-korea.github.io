---
layout: people
title: People
subtitle: Researchers participating in SCSOK.
permalink: /people/
---

{% assign sortedpeople = site.data.people | sort: "name" %}
{% for person in sortedpeople %}
* {{ person.prefix }} {{ person.name }}
    * [{{ person.group }}, {{ person.institute }}]({{ person.url }}){:target="_blank"}
{% endfor %}