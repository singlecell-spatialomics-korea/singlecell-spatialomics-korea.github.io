<script>
    import { Heading } from 'flowbite-svelte';

    let { data } = $props();
    let { content, metadata } = data;
</script>

<Heading tag="h3" class="mb-5">{metadata.title}</Heading>
<div class="mdsvex">
    {#if content}
        {@render content()}
    {/if}
</div>