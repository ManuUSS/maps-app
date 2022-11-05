import { useStore } from 'vuex'
import { StateInterface } from '@/store';
import { computed } from 'vue';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '../interfaces/places';
import { LngLat } from '@/store/map/actions';

export const useMapStore = () => {

    const store = useStore<StateInterface>();

    return {
        map: computed<Mapboxgl.Map|undefined>( () => store.state.map.map ),
        distance: computed<number|undefined>( () => store.state.map.distance ),
        duration: computed<number|undefined>( () => store.state.map.duration ),

        //Getters
        isMapReady: computed<boolean>( () => store.getters['map/isMapReady'] ),

        //Mutations
        setMap: ( map: Mapboxgl.Map ) => store.commit( 'map/setMap', map ), 
        setPlaceMarkers: ( places: Feature[] ) => store.commit( 'map/setPlaceMarkers', places ),

        //Actions
        getRouteBetweenPoints: ( start: LngLat, end: LngLat ) => store.dispatch( 'map/getRouteBetweenPoints', { start, end } )
    }
}
