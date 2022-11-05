import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWpzIiwiYSI6ImNsYTM2a3J2ZzAybzMzcHA3aHdkZ2t1MTMifQ.ubxV0kCbGOaV4NtEuVkmLA';

if( !navigator.geolocation ){
    alert( 'Geolocation no es soportado por el navegador' )
    throw new Error( 'Geolocation no es soportado por el navegador' );
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
