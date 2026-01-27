<script>
    import { Heading } from 'flowbite-svelte';

    let { data } = $props();
    let { content, metadata } = data;
</script>

<Heading tag="h3" class="mb-4 text-gray-900 text-3xl!">
    {metadata.title}
</Heading>

<!-- Location and Date -->
<div class="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8">
    <div class="flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <span>{metadata.location}</span>
    </div>
    <div class="flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <span>{metadata.date}</span>
    </div>
</div>

<!-- Timeline -->
<div class="relative">
    <!-- Vertical Line -->
    <div class="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-200"></div>

    <!-- Opening Section -->
    {#if metadata.opening && metadata.opening.length > 0}
        <div class="relative pl-12 pb-8">
            <!-- Icon -->
            <div class="absolute left-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <!-- Content -->
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Opening</h4>
            <div class="space-y-2">
                {#each metadata.opening as file}
                    <a href={file.url} target="_blank" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div class="flex items-center gap-3">
                            {#if file.type === 'presentation'}
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                                </svg>
                            {:else}
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            {/if}
                            <div class="flex flex-col">
                                <span class="text-gray-700 group-hover:text-gray-900">{file.name}</span>
                                {#if file.presenter}
                                    <span class="text-gray-400 text-sm">{file.presenter}</span>
                                {/if}
                            </div>
                        </div>
                        {#if file.size}
                            <span class="text-gray-400 text-sm">{file.size}</span>
                        {/if}
                    </a>
                {/each}
            </div>
        </div>
    {/if}

    <!-- Agenda Section -->
    {#if metadata.agenda && metadata.agenda.length > 0}
        <div class="relative pl-12 pb-8">
            <!-- Icon -->
            <div class="absolute left-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
            </div>
            <!-- Content -->
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Agenda</h4>
            <div class="space-y-2">
                {#each metadata.agenda as file}
                    <a href={file.url} target="_blank" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                            <div class="flex flex-col">
                                <span class="text-gray-700 group-hover:text-gray-900">{file.name}</span>
                                {#if file.presenter}
                                    <span class="text-gray-400 text-sm">{file.presenter}</span>
                                {/if}
                            </div>
                        </div>
                        {#if file.size}
                            <span class="text-gray-400 text-sm">{file.size}</span>
                        {/if}
                    </a>
                {/each}
            </div>
        </div>
    {/if}

    <!-- Materials Section -->
    {#if (metadata.starting_materials && metadata.starting_materials.length > 0) || (metadata.final_deliverables && metadata.final_deliverables.length > 0)}
        <div class="relative pl-12 pb-8">
            <!-- Icon -->
            <div class="absolute left-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
            </div>
            <!-- Content -->
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Materials</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Starting Materials Card -->
                {#if metadata.starting_materials && metadata.starting_materials.length > 0}
                    <div class="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-5">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span class="font-semibold text-gray-900">Starting Materials</span>
                        </div>
                        <div class="space-y-3">
                            {#each metadata.starting_materials as file}
                                <a href={file.url} target="_blank" class="flex items-center justify-between text-gray-600 hover:text-gray-900 transition-colors">
                                    <div class="flex items-center gap-3">
                                        <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                        </svg>
                                        <div class="flex flex-col">
                                            <span>{file.name}</span>
                                            {#if file.presenter}
                                                <span class="text-gray-400 text-xs">{file.presenter}</span>
                                            {/if}
                                        </div>
                                    </div>
                                    {#if file.size}
                                        <span class="text-gray-400 text-sm shrink-0">{file.size}</span>
                                    {/if}
                                </a>
                            {/each}
                        </div>
                    </div>
                {/if}

                <!-- Final Deliverables Card -->
                {#if metadata.final_deliverables && metadata.final_deliverables.length > 0}
                    <div class="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-5">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span class="font-semibold text-gray-900">Final Deliverables</span>
                        </div>
                        <div class="space-y-3">
                            {#each metadata.final_deliverables as file}
                                <a href={file.url} target="_blank" class="flex items-center justify-between text-gray-600 hover:text-gray-900 transition-colors">
                                    <div class="flex items-center gap-3">
                                        {#if file.type === 'download'}
                                            <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                            </svg>
                                        {:else if file.type === 'code'}
                                            <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                            </svg>
                                        {:else if file.type === 'presentation'}
                                            <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                                            </svg>
                                        {:else}
                                            <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                            </svg>
                                        {/if}
                                        <div class="flex flex-col">
                                            <span>{file.name}</span>
                                            {#if file.presenter}
                                                <span class="text-gray-400 text-xs">{file.presenter}</span>
                                            {/if}
                                        </div>
                                    </div>
                                    {#if file.size}
                                        <span class="text-gray-400 text-sm shrink-0">{file.size}</span>
                                    {/if}
                                </a>
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</div>

<!-- Additional Content from SVX -->
{#if content}
    <div class="mdsvex mt-8 pl-12">
        {@render content()}
    </div>
{/if}
