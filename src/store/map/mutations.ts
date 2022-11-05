import { MutationTree } from 'vuex';
import { MapState } from './state';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '../../interfaces/places';

const mutation: MutationTree<MapState> = {
    setMap( state, map: Mapboxgl.Map ) {
        state.map = map;
    },

    setPlaceMarkers( state, places:Feature[] ) {
        state.markers.forEach( marker => marker.remove() );
        state.markers = [];

        for( const place of places ) {
            const [ lng, lat ] = place.center;	
            const popUp = new Mapboxgl.Popup({ 
                offset: [ 0, -45 ],
                closeButton: false, 
            })
            .setLngLat([ lng, lat ])
            .setHTML(`<h5>${ place.place_name }</h5>
                <p>${ place.text }</p>`); 
 
            const marker = new Mapboxgl.Marker({
                color: '#ef233c',
                draggable: true
            }).setLngLat([ lng, lat ])
            .setPopup(popUp)
            .addTo( state.map! );

            state.markers.push( marker );
        }
    }
}


export default mutation;