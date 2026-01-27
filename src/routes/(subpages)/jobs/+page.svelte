<script>
    import { A, Heading, Card } from 'flowbite-svelte';

    const jobs = import.meta.glob('$lib/jobs/*.svx', { eager: true });

    // event_metadata with key, title, location, start, end
    // key is the filename without extension
    // others are from the frontmatter of the svx file
    const job_metadata = Object.entries(jobs).map(([key, value]) => {
        const { title, group, institute, active } = value.metadata;
        return {
            key: key.split('/').pop().split('.')[0],
            title,
            group,
            institute,
            active,
        };
    });
</script>

<Heading tag="h3" class="mb-2 text-gray-900 text-3xl!">
    Jobs
</Heading>
<p class="leading-8 mb-6 text-gray-600">
    Current job openings at SCSOK research groups.
</p>

{#snippet JobCard(data)}
    <a href={"/jobs/" + data.key}>
        <Card size="none" class="mb-4 bg-white border-gray-200">
            <div class="flex flex-col text-gray-900">
                <h3 class="text-2xl font-bold mb-2">{data.title}</h3>
                <p>{data.group} @ {data.institute}</p>
            </div>
        </Card>
    </a>
{/snippet}


{#each job_metadata as job}
    {#if job.active}
        {@render JobCard(job)}
    {/if}
{/each}