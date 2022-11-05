import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '../../apis/searchApi';
import { Feature, PlacesResponse } from '../../interfaces/places';


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

    async searchPlaces( { commit, state }, query: string ): Promise<Feature[]> {
        
        if( query.length === 0 ) {
            commit( 'setPlaces', [] );
            return [];
        }
        

        if( !state.userLocation ) 
            throw new Error('No se ha podido obtener la ubicación del usuario');
        
        commit( 'setIsLoadingPlaces' );

        const { data } = await searchApi.get<PlacesResponse>( `/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });

        commit( 'setPlaces', data.features );
        return data.features;
    }

}


export default actions;