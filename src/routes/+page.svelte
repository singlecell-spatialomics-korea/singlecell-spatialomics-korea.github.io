<script>
    import Landing from './Landing.svx';
    import people from '$lib/data/people.yaml';
</script>

<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mb-8">
    <img src="scsok-bg.webp" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
    <div class="mx-auto container px-6 lg:px-8">
        <div class="mx-0 max-w-2xl">
        <h2 class="text-4xl! font-bold tracking-tight text-white sm:text-6xl!">Single Cell &amp;<br>Spatial Omics Korea</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">An open community for single-cell and spatial omics researchers in Korea.</p>
        </div>
        <div class="mx-0 mt-10 max-w-2xl lg:max-w-none">
        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2">
            <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">Researchers</dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">{people.length}</dd>
            </div>
            <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">Publications</dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">TBA</dd>
            </div>
        </dl>
        </div>
    </div>
</div>

<div class="container mx-auto px-4 sm:px-6 mdsvex">
    <Landing />
</div>
