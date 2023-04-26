<script setup>
import { useVideosStore } from "../stores/video.js";
import { ref, onUpdated, onMounted } from "vue";

const store = useVideosStore();

const props = defineProps({
    youtubeId: String,
    author: String,
    title: String,
    full: Boolean,
});

const isLike = ref(false);

//methods
const setIsLike = () => (isLike.value = true);

// lifecycle
onMounted(() => {
    if (store.favorites.find((elem) => elem.youtubeId === props.youtubeId)) {
        return (isLike.value = true);
    }
    return (isLike.value = false);
});
</script>

<template>
    <div
        :class="`${
            full
                ? 'w-[80%]'
                : 'min-w-[20em] max-w-[20em] border border-gray-200 dark:border-gray-700 shadow'
        } bg-white rounded-lg  dark:bg-gray-800  m-3 transition-all`"
    >
        <router-link :to="`/video/${youtubeId}`">
            <div class="relative px-3 rounded-md">
                <div
                    v-show="full !== true"
                    class="w-[100%] h-[100%] z-10 absolute"
                ></div>
<!-- 
                <iframe
                    type="text/html "
                    :width="!full ? '100%' : '100%'"
                    :height="!full ? '' : '370'"
                    :src="`http://www.youtube.com/embed/${youtubeId}`"
                    frameborder="0"
                    :controls="!full ? 0 : 2"
                    allowfullscreen
                ></iframe> -->
    <vue-plyr>
  <div data-plyr-provider="youtube" :data-plyr-embed-id="youtubeId"></div>
</vue-plyr>
            </div>
            <div class="p-2">
                <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-[50px]"
                >
                    {{ title }}
                </h5>
            </div>
        </router-link>
        <p class="mb-3 px-2 font-normal text-gray-700 dark:text-gray-400 ">
            {{ author }}
        </p>
        <span
            @click="
                () => {
                    store.addToFavorites({
                        youtubeId: youtubeId,
                        author: author,
                        title: title,
                    });
                    setIsLike();
                }
            "
            :class="`inline-flex items-center px-3 py-2 transition-all text-sm font-medium text-center text-white bottom-0
            ${
                isLike
                    ? 'bg-pink-800 dark:bg-blue-700'
                    : 'bg-pink-300 dark:bg-blue-300'
            } rounded-lg hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-rose-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800`"
        >
            <i class="fa-regular fa-heart text-[34px]"></i>
        </span>
    </div>
</template>
