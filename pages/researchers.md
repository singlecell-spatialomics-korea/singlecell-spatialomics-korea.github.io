---
layout: page
title: Researchers
permalink: /researchers/
---

## Researchers

List of Researchers connected via SCSOK.

{% for p in site.data.researchers %}
- {{ p.name }}
    - {{ p.position }}, {{ p.group }} at {{ p.institute }}
{% endfor %}