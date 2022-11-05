import { defineComponent, ref, watch } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';
import { Feature } from '@/interfaces/places';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const activePlace = ref('')

        const { map, setPlaceMarkers } = useMapStore();
        const { isLoadingPlaces, places } = usePlacesStore();

        watch( places, ( newPlaces ) => {
            setPlaceMarkers( newPlaces );
        });

        return {
            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClick: ( place: Feature ) => {
                activePlace.value = place.id;
                const [ lng, lat ] = place.center;
                map.value?.flyTo({
                    center: [ lng, lat ],
                    zoom: 15
                });
            }
        }
    }
});
