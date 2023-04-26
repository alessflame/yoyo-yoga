<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import VideosContainer from "./components/VideosContainer.vue";
import Video from "./components/Video.vue";
import Footer from "./components/Footer.vue";
import { useVideosStore } from "./stores/video.js";

const store = useVideosStore();
store.addVideos();

</script>

<template>
    <header>
        <NavBar />
    </header>

    <div class="flex justify-center w-[100%] py-8 box-border dark:bg-slate-600 transition-all">

        <RouterView />

    </div>

    <Footer />
</template>
