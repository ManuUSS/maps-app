import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '@/store/index';

export const usePlacesStore = () => {
    const store = useStore();
    const state = computed(() => store.state.places);
    const getters = computed(() => store.getters['places']);
    const mutations = computed(() => store.commit);
    const actions = computed(() => store.dispatch);

    onMounted(() => {
        if( !store.getters['places/isUserLocationReady'] ){
            store.dispatch('places/getInitialLoaction');
        }
    })
    
    return { state, getters, mutations, actions };
}