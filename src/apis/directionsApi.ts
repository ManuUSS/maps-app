import axios from 'axios';

export const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: 'false',
        access_token:  'pk.eyJ1IjoibWFudWpzIiwiYSI6ImNsYTM2a3J2ZzAybzMzcHA3aHdkZ2t1MTMifQ.ubxV0kCbGOaV4NtEuVkmLA'
    }
});