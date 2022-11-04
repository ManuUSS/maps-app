<script lang="ts" src="./SearchResults.ts"/>

<template>
    <ul class="list-group mt-3">
            <li class="list-group-item list-group-item-action">
                <h5>Nombre del lugar</h5>
                <p>Descripcion</p>
                <div class="d-flex justify-content-end align-items-end">
                    <button class="btn btn-outline-primary btn-sm">
                        Direcciones
                        <i class="fa-solid fa-turn-up ps-2"></i>
                    </button>
                </div>
            </li>
        </ul>
</template>

<style scoped>
    li {
        cursor: pointer;
    }

    h5 {
        font-size: 15px;
    }

    p {
        font-size: 11px;
    }
</style>