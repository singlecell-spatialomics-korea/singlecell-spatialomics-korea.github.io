<script>
    import people from '$lib/data/people.yaml';
    import { A, Heading } from 'flowbite-svelte';
    import Map from './Map.svelte';

    let sorted_people = people.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
</script>

<Heading tag="h3" class="mb-2 text-gray-900 text-3xl!">
    People
</Heading>
<p class="leading-8 mb-6 text-gray-600">
    The people participating in the SCSOK community. If you are interested in joining us, please reach out to us through our <A href="https://zulip.scsok.io" target="_blank">Zulip</A> channel.
</p>

<div class="grid grid-cols-1 gap-10 lg:grid-cols-5">
    <div class="lg:col-span-3">
        <ul class="space-y-1 list-disc ml-8 text-gray-700">
        {#each sorted_people as person}
            <li>{ person.prefix } { person.name }
                <ul class="ps-5 mt-2 space-y-1 list-disc ml-5">
                    <li><A href={ person.url } target="_blank">
                            { person.group }, { person.institute }
                        </A>
                    </li>
                </ul>
            </li>
        {/each}
        </ul>
    </div>
    <Map data={sorted_people} class="w-full lg:col-span-2" />
</div>