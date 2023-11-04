---
layout: page
title: Events
subtitle: Meetups to share our knowledge and experience.
permalink: /events/
---

### Upcoming Events

<div class="w-100">
    {% for post in site.posts %}
    {% if post.categories contains 'events' and post.start > site.time %}
    <a href="{{ post.url }}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
            <p class="mb-3 pb-0 font-normal text-gray-700 dark:text-gray-400">{{ post.location }}</p>
            <p class="mb-3 pb-0 font-normal text-gray-700 dark:text-gray-400">
            <time datetime="{{ post.start }}" class="icon">
                {{ post.start | date: "%B %d, %Y" }} - {{ post.end | date: "%B %d, %Y" }} 
            </time>
            </p>
        </div>
    </a>
    {% endif %}
    {% endfor %}
</div>

### Past Events

<div class="w-100">
    {% for post in site.posts %}
    {% if post.categories contains 'events' and post.start <= site.time %}
    <a href="{{ post.url }}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
            <p class="mb-3 pb-0 font-normal text-gray-700 dark:text-gray-400">{{ post.location }}</p>
            <p class="mb-3 pb-0 font-normal text-gray-700 dark:text-gray-400">
            <time datetime="{{ post.start }}" class="icon">
                {{ post.start | date: "%B %d, %Y" }} - {{ post.end | date: "%B %d, %Y" }} 
            </time>
            </p>
        </div>
    </a>
    {% endif %}
    {% endfor %}
</div>