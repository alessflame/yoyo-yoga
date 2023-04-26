<script setup>
import SearchBar from "./SearchBar.vue";
import Video from "./Video.vue";
import { useVideosStore } from "../stores/video.js";

const store = useVideosStore();

const props = defineProps({
    videos: Array,
});

</script>

<template>
    <div class="container flex justify-center items-center flex-col py-4">
        <div class="flex justify-center">
            <SearchBar />
        </div>
        <div
            v-if="videos.length > 0"
            class="flex flex-wrap justify-center p-5 my-16"
        >
            <Video v-for="video in store.filterVideos" v-bind="video" />
        </div>

        <div v-else class="flex flex-wrap justify-center p-5 my-16">
            <!-- <SkeletonVideo v-for="items in Array(6)" v-bind="video" /> -->
            <b class="text-center">Nessun Video</b>
        </div>
    </div>
</template>
