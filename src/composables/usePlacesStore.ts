import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export const usePlacesStore = () => {
    const store = useStore();
    const state = computed(() => store.state.places);
    //const getters = computed(() => store.getters['places']);
    //const mutations = computed(() => store.commit);
    //const actions = computed(() => store.dispatch);

    onMounted(() => {
        if( !store.getters['places/isUserLocationReady'] ){
            store.dispatch('places/getInitialLoaction');
        }
    })
    
    return { 
        //State
        isLoading: computed(() => state.value.isLoading),
        userLocation: computed(() => state.value.userLocation),
        places: computed(() => state.value.places), 
        isLoadingPlaces: computed(() => state.value.isLoadingPlaces), 

        //Getters
        isUserLocationReady: computed<boolean>(() => store.getters['places/isUserLocationReady']),
        //Mutations

        //Actions
        searchPlacesByTerm: ( query = ''  ) => store.dispatch( 'places/searchPlaces', query )

        //Other
        
     };
}