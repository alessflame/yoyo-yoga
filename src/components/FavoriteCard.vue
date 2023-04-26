<script setup>
import {useVideosStore} from "../stores/video.js";

const store = useVideosStore();

const props=defineProps({
    
        youtubeId: String,
        author: String,
        title: String,
        full:Boolean
    
})

</script>


<template>
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
                <!-- <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> -->
                <router-link :to="`/video/${youtubeId}`">
                    <img src="@/assets/youtube.png" alt="video" class="w-[55px]"/>
                </router-link>

            </div>
            <router-link :to="`/video/${youtubeId}`" class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                   {{ title }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ author }}
                </p>
            </router-link>
            <div @click="store.deleteFromFavorites(youtubeId)" class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <i class="fa-solid fa-xmark hover:text-[18px] transition-all hover:text-pink-500 z-20"></i>
            </div>
        </div>
    </li>
</template>
