<script setup>
import FavoriteCard from "../components/FavoriteCard.vue";
import { useVideosStore } from "../stores/video.js";

const store = useVideosStore();
</script>

<template>
    <main>
        <div class="w-[100%] min-h-[100vh] p-4 sm:p-8">
            <div class="flex items-center justify-between mb-4">
                <h5
                    class="text-xl font-bold leading-none text-gray-900 dark:text-white"
                >
                    I tuoi preferiti
                </h5>
                <button
                    @click="store.emptyFavorites()"
                    class="text-sm font-medium text-blue-600 hover:text-pink-400 dark:text-blue-500 ml-2"
                >
                    Svuota
                </button>
            </div>
            <div class="flow-root">
                <ul
                    role="list"
                    class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                    <li v-if="store.favorites.length === 0">
                        <b>Nessun video preferito</b>
                    </li>
                    <FavoriteCard
                        v-for="item in store.favorites"
                        v-bind="item"
                    />
                </ul>
            </div>
        </div>
    </main>
</template>
