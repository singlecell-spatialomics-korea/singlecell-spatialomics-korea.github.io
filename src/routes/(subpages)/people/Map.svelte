<script>
    let props = $props();

    import { Spinner } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    function load_kakao_map() {
        if (!window.kakao) {
            window.location.reload();
            return;
        }

        let map = new kakao.maps.Map(document.getElementById('map'), {
            center : new kakao.maps.LatLng(36.2683, 127.6358),
            level : 13
        });
        
        let clusterer = new kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 10
        });
        
        let markers = [];
        let infowindows = [];
        for (let i = 0; i < props.data.length; i++) {
            let marker = new kakao.maps.Marker({ position : new kakao.maps.LatLng(props.data[i].location.lat, props.data[i].location.lng)});
            let infowindow = new kakao.maps.InfoWindow({content : '<div class="px-2 py-1 text-xs text-left h-8"><span class="inline-block align-middle">' + props.data[i].group + '</span></div>'});

            markers.push(marker);
            infowindows.push(infowindow);

            kakao.maps.event.addListener(markers[i], 'mouseover', function() {
                infowindows[i].open(map, markers[i]);
            });
            kakao.maps.event.addListener(markers[i], 'mouseout', function() {
                infowindows[i].close();
            });
        }
        clusterer.addMarkers(markers);
    }

    onMount(() => {
        load_kakao_map();
    });
</script>

<svelte:head>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=24d8e7f6e67f07889aad0a57dd367e86&amp;libraries=clusterer"></script>
    <script charset="UTF-8" src="https://t1.daumcdn.net/mapjsapi/js/main/4.4.19/kakao.js"></script>
    <script charset="UTF-8" src="https://t1.daumcdn.net/mapjsapi/js/libs/clusterer/1.0.9/clusterer.js"></script>
</svelte:head>

<div id="map" class={props.class}>
    <div class="w-full h-full relative">
        <Spinner class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
</div>