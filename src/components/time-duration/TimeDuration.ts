import { useMapStore } from '@/composables';
import { defineComponent } from 'vue';
export default defineComponent ({
    name: 'TimeDuration',
    setup() {
        
        const { distance, duration } = useMapStore();

        return {
            distance,
            duration
        }
    }
})