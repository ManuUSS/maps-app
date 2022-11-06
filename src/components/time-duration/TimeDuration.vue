<script lang="ts" src="./TimeDuration.ts"/>
<template>
    <div  v-if="distance" class="trip-container column">
        <div class="col">
            Distancia: <strong>{{ distance }} kms</strong>
        </div>
        <div class="col">
            Duración: <strong>{{ duration }} minutos</strong>
        </div>
    </div>
</template>
<style scoped>
    .trip-container {
        background-color: white;
        border-radius: 5px; 
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        font-size: 16px;
        padding:  5px 10px;
        position: fixed;
        right: 30px;
        top: 80px;
        width: 200px;
    }

    strong {
        color: #118cf8;
    }
</style>