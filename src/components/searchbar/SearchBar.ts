import { defineComponent, ref, computed } from 'vue';
import SearchResults from '../../components/search-results/SearchResults.vue';

export default defineComponent({
    name: 'SearchBar',
    components: { SearchResults },
    setup () {
        
        const debounceTime = ref();
        const debouncedValue = ref('');

        return {
            debouncedValue,

            searchTerm: computed({
                get(){
                    return debouncedValue.value;
                },
                set( val: string ){
                    if( debounceTime.value ) 
                        clearTimeout( debounceTime.value );
                    debounceTime.value = setTimeout(() => {
                        debouncedValue.value = val;
                    }, 700)
                }
            })
        }
    }
});
