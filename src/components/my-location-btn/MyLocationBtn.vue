<template>
    <button 
        v-if="isButtonReady"
        class="btn btn-primary" 
        @click="onMyLocationClicked"
    >
        Ir a mi ubicación
        <i class="fa-solid fa-arrows-to-circle"></i>
    </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';

export default defineComponent({
    name: 'MyLocationBtn',
    setup() {
        const { userLocation, isUserLocationReady }  = usePlacesStore();
        const { map, isMapReady }  = useMapStore();

        return {

            isButtonReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value ),

            onMyLocationClicked: () => {
                if (isUserLocationReady.value && map.value) {
                    map.value.flyTo({
                        center: userLocation.value,
                        zoom: 15
                    });
                }
            }
        }
    }

})
</script>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
    Z-index: 1;
}
</style>