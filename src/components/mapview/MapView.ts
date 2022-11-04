import { defineComponent, ref, onMounted, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';
import { usePlacesStore, useMapStore } from '@/composables';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async ( ) => {

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value!, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value!, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            new Mapboxgl.Popup({ 
                offset: [ 0, -45 ],
                closeButton: false, 
            })
            .setLngLat(userLocation.value!)
            .setHTML(`<h5>¡Estoy aquí!</h5>
                <p>Actualmente en San Ramón</p>`)
            .addTo(map);

            new Mapboxgl.Marker({
                color: '#ef233c',
                draggable: true
            }).setLngLat(userLocation.value!)
            .addTo(map);

            setMap( map );
        }



        onMounted(() => {
            if ( isUserLocationReady.value ) 
                return initMap();
        });

        watch( isUserLocationReady, ( ) => {
            if( isUserLocationReady.value )
                initMap(); 
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
});