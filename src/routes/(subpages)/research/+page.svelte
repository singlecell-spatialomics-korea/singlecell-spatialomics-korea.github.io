<script>
    import { Heading, Card } from 'flowbite-svelte';

    const hackathons = [
        {
            title: '1st Single Cell & Spatial Omics Hackathon',
            location: 'Oceans and Fisheries HRD Institute, Gijang, Busan',
            start: '2023-06',
            end: '2024-12',
            participants: 2
        },
        {
            title: '2nd Single Cell & Spatial Omics Hackathon',
            location: 'Chung-Ang University (DaVinci Campus), Anseong, Gyeonggi-do',
            start: '2024-01',
            end: '2024-12',
            participants: 5
        }
    ];
</script>

<Heading tag="h3" class="mb-8 text-gray-900 text-3xl!">
    Research
</Heading>

{#each hackathons as hackathon}
    <Card size="none" class="mb-4 bg-white border-gray-200">
        <div class="flex flex-col text-gray-900">
            <h3 class="text-2xl font-bold mb-2">{hackathon.title}</h3>
            <p class="text-gray-600 mb-1">{hackathon.location}</p>
            <div class="flex items-center gap-4 text-sm text-gray-500">
                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{hackathon.start} - {hackathon.end}</span>
                </div>
                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span>{hackathon.participants} participants</span>
                </div>
            </div>
        </div>
    </Card>
{/each}
