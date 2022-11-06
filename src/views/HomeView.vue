<template>
  <div class="home">
    <MyLocationBtn/>
    <SearchBar/>
    <MapView/>
    <TimeDuration/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '../composables/usePlacesStore';
import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';
import TimeDuration from '@/components/time-duration/TimeDuration.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationBtn, SearchBar, TimeDuration },
  setup() {
    
    usePlacesStore();
  },
});
</script>
