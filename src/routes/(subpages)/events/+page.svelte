<script>
    import { A, Heading, Card } from 'flowbite-svelte';

    const events = import.meta.glob('$lib/events/*.svx', { eager: true });

    // event_metadata with key, title, location, start, end
    // key is the filename without extension
    // others are from the frontmatter of the svx file
    const event_metadata = Object.entries(events).map(([key, value]) => {
        const { title, location, start, end } = value.metadata;
        return {
            key: key.split('/').pop().split('.')[0],
            title,
            location,
            start,
            end,
        };
    });

    event_metadata.sort((a, b) => {
        const dateA = new Date(a.start);
        const dateB = new Date(b.start);
        return dateA - dateB;
    });
    const event_metadata_reverse = [...event_metadata].reverse();
</script>

<Heading tag="h3" class="mb-2 text-gray-900 text-3xl!">
    Events
</Heading>
<p class="leading-8 mb-6 text-gray-600">
    Meetups to share our knowledge and experience.
</p>

<Heading tag="h3" class="text-lg! font-bold tracking-tight text-gray-900 sm:text-2xl! mb-5">
    Upcoming Events
</Heading>

{#snippet EventCard(data)}
    <a href={"/events/" + data.key} _target="_blank">
        <Card size="none" class="mb-4 bg-white border-gray-200">
            <div class="flex flex-col text-gray-900">
                <h3 class="text-2xl font-bold mb-2">{data.title}</h3>
                <p>{data.location}</p>
                <p>
                    {new Date(data.start).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                    {#if data.end}
                        - {new Date(data.end).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    {/if}
                </p>
            </div>
        </Card>
    </a>
{/snippet}


{#each event_metadata as event}
    {#if new Date(event.start) > new Date()}
        {@render EventCard(event)}
    {/if}
{/each}

<Heading tag="h3" class="text-lg! font-bold tracking-tight text-gray-900 sm:text-2xl! mb-5 mt-10">
    Past Events
</Heading>

{#each event_metadata_reverse as event}
    {#if new Date(event.start) < new Date()}
        {@render EventCard(event)}
    {/if}
{/each}