import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLoaction( { commit } ) {
        navigator.geolocation.getCurrentPosition( 
            ({ coords }) => commit( 'setUserLocation', { lng: coords.longitude, lat: coords.latitude } ),
            ( error ) => {
                console.log( error )
                throw new Error( 'Error al obtener la ubicación' );
            }
        );
    }
}


export default actions;