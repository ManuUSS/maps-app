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
    },

    setRoutePolyline( state, coords: number[][] ) {
        const start = coords[0];
        const end = coords[ coords.length - 1 ];

        const bounds = new Mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [start[0], start[1]],
        );

        for ( const coord of coords ) {
            const newCoord: [ number, number ] = [ coord[0], coord[1] ];
            bounds.extend( newCoord );
        }

        state.map?.fitBounds( bounds, {
            padding: 288
        });

        const sourceDate: Mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords
                        }
                    }
                ]     
            }
        };

        if( state.map?.getSource( 'RouteString' ) ){
            state.map?.removeLayer('RouteString');
            state.map?.removeSource('RouteString');
        } 

        state.map?.addSource('RouteString', sourceDate );

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#edddd4',
                'line-width': 3,
            }
        })
    }
}


export default mutation;