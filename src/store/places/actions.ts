import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '../../apis/searchApi';
import { PlacesResponse } from '../../interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLoaction( { commit } ) {
        navigator.geolocation.getCurrentPosition( 
            ({ coords }) => commit( 'setUserLocation', { lng: coords.longitude, lat: coords.latitude } ),
            ( error ) => {
                console.log( error )
                throw new Error( 'Error al obtener la ubicación' );
            }
        );
    },

    async searchPlaces( { commit, state }, query: string ) {
        const { data } = await searchApi.get<PlacesResponse>( `/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });
        console.log( data.features );
    }

}


export default actions;