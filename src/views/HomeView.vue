<script setup>
import VideosContainer from "../components/VideosContainer.vue";
import { useVideosStore } from "../stores/video.js";

const store = useVideosStore();
store.addVideos();
</script>

<template>
    <main>
        <VideosContainer :videos="store.filterVideos" />
    </main>
</template>
