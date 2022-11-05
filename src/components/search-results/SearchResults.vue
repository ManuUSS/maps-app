<script lang="ts" src="./SearchResults.ts"/>

<template>
    <div v-if="isLoadingPlaces" 
        class="alert alert-primary text-center"
    >
        <h5>Cargando</h5>
        <span>Espere por favor...</span>
    </div>
    <ul v-else-if="places.length > 0" 
        class="list-group mt-3"
    >
            <li v-for="place in places" 
                :key="place.id" 
                class="list-group-item list-group-item-action"
                :class="{ 'active': place.id === activePlace }"
                @click="onPlaceClick( place )"
            >
                <h6>{{ place.text }}</h6>
                <p>{{ place.place_name }}</p>
                <div class="d-flex justify-content-end align-items-end">
                    <button 
                        class="btn btn-outline-primary btn-sm"
                        :class="( place.id === activePlace ) ? 'btn-selectedPlace' : 'btn-outline-primary'"
                        @click.self="getDirections( place )"
                    >
                        Direcciones
                        <i class="fa-solid fa-location-arrow"></i>
                    </button>
                </div>
            </li>
        </ul>
</template>

<style scoped>
    li {
        cursor: pointer;
    }

    h6 {
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 2px;
    }

    p {
        font-size: 10px;
        margin: 0;
    }

    .btn-selectedPlace {
        color: white;
        border-color: white;
    }
</style>