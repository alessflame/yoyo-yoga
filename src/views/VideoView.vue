<script setup>
import CommentArea from "../components/CommentArea.vue";
import Video from "../components/Video.vue";
import { useVideosStore } from "../stores/video.js";

const props = defineProps({
    youtubeId: String,
});

const store = useVideosStore();
store.addVideos();
</script>

<template>
    <main class="flex flex-col items-center w-[100vw]">
        <Video
            full
            v-bind="
                store.videos.find((item) => item.youtubeId === props.youtubeId)
            "
        />
        <CommentArea :youtubeId="props.youtubeId" />
    </main>
</template>
