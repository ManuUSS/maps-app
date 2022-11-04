import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWpzIiwiYSI6ImNsYTJydTR4dDBqdDQzcG8zbmR2ZG9xb3YifQ.0C-B4Z4qxtODQ0OdcPZlaQ';

if( !navigator.geolocation ){
    alert( 'Geolocation no es soportado por el navegador' )
    throw new Error( 'Geolocation no es soportado por el navegador' );
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
