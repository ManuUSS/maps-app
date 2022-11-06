import axios from 'axios';

export const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 4,
        language: 'es',
        access_token:  'pk.eyJ1IjoibWFudWpzIiwiYSI6ImNsYTM2a3J2ZzAybzMzcHA3aHdkZ2t1MTMifQ.ubxV0kCbGOaV4NtEuVkmLA'
    }
});