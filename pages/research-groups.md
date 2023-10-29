---
layout: page
title: Research Groups
permalink: /research-groups/
---

## Research Groups

Research groups participating in SCSOK.

{% for group in site.data.groups %}
* {{ group.name }}
    * Headed by `{{ group.head }}`
    * Located at `{{ group.institute }}`
    * [{{ group.url }}]({{ group.url }}){:target="_blank"}
    * {{ group.description }}
{% endfor %}