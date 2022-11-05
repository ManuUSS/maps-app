import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import { directionsApi } from '../../apis/directionsApi';
import { DirectionsResponse } from '@/interfaces/directions';
export type LngLat = [ number, number ];

const actions: ActionTree<MapState, StateInterface> = {
    async getRouteBetweenPoints( { commit }, { start, end } : { start: LngLat, end: LngLat } ) {
        const { data } = await directionsApi.get<DirectionsResponse>(`${ start.join(',') };${ end.join(',') }`);
        console.log( data );
        commit( 'setRoutePolyline', data.routes[0].geometry.coordinates );
    }
}


export default actions;