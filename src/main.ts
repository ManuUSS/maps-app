import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

if( !navigator.geolocation ){
    alert( 'Geolocation no es soportado por el navegador' )
    throw new Error( 'Geolocation no es soportado por el navegador' );
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
