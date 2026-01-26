<script>
    import { Heading } from 'flowbite-svelte';

    let { data } = $props();
    let { content, metadata } = data;
</script>

<Heading tag="h3" class="mb-2 text-white">{metadata.title}</Heading>
<p class="leading-8 mb-6 text-gray-300">
    {metadata.group} @ {metadata.institute}
</p>

<div class="mdsvex">
    {#if content}
        {@render content()}
    {/if}
</div>