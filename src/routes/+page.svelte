<script>
    import Landing from './Landing.svx';
    import people from '$lib/data/people.yaml';
</script>

<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mb-8">
    <img src="scsok-bg.webp" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
    <div class="mx-auto container px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left Section -->
            <div class="mx-0">
                <h2 class="text-4xl! font-bold tracking-tight text-white sm:text-6xl!">Single Cell &amp;<br>Spatial Omics <span class="text-emerald-400">Korea</span></h2>
                <p class="mt-6 text-lg leading-8 text-gray-300">
                    We are an open community for single-cell and spatial omics researchers in Korea.
                </p>
                <div class="mt-10 flex flex-wrap gap-4">
                    <a href="#how-to-join" class="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400 transition-colors">
                        Join Our Community
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </a>
                    <a href="/research" class="inline-flex items-center rounded-full border border-gray-500 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors">
                        View Research
                    </a>
                </div>
            </div>

            <!-- Right Section - Stats Cards -->
            <div class="flex flex-col gap-4">
                <div class="rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-5 flex items-center gap-5">
                    <div class="flex-shrink-0 w-14 h-14 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <span class="text-emerald-400 font-bold text-xl">10+</span>
                    </div>
                    <div>
                        <div class="text-white font-semibold">Active Researchers</div>
                        <div class="text-gray-400 text-sm">From leading institutions</div>
                    </div>
                </div>
                <div class="rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-5 flex items-center gap-5">
                    <div class="flex-shrink-0 w-14 h-14 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <span class="text-emerald-400 font-bold text-xl">TBA</span>
                    </div>
                    <div>
                        <div class="text-white font-semibold">Publications</div>
                        <div class="text-gray-400 text-sm">Research papers &amp; articles</div>
                    </div>
                </div>
                <div class="rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-5 flex items-center gap-5">
                    <div class="flex-shrink-0 w-14 h-14 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <span class="text-emerald-400 font-bold text-xl">5+</span>
                    </div>
                    <div>
                        <div class="text-white font-semibold">Events Per Year</div>
                        <div class="text-gray-400 text-sm">Conference, workshops &amp; more</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container mx-auto px-4 sm:px-6 mdsvex">
    <Landing />
</div>
