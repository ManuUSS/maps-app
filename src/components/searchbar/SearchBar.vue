<script lang="ts" src="./SearchBar.ts"/>
<template>
    <div class="searchbar-container">
        <input 
            class="form-control"
            type="text"
            placeholder="Buscar lugares"
        />
        <SearchResults/>
    </div>
</template>

<style scoped>
    .searchbar-container {
        background-color: white;
        border-radius: 5px;
        box-shadow: 10px rgba(0, 0, 0, .2);
        left: 30px;
        overflow: hidden;
        padding: 2px;
        position: fixed;
        top: 30px;
        width: 200px;
        z-index: 1;
    }

</style>