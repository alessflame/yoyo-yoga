<script setup>
import {useVideosStore} from "../stores/video.js";
import {useDark,useToggle} from "@vueuse/core"

const store = useVideosStore();

const isDark=useDark();
const toggleDark= useToggle(isDark);

</script>

<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <router-link to="/">
    <div class="flex items-center">
      <img src="@/assets/yoyo.png" class="h-10 mr-3" alt="YOYO Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yoga</span>
    </div>
    </router-link>
     <div class="relative">
      <router-link to="/favorites"><i class="fa-regular fa-heart text-[34px] mx-2 transition-all hover:text-[32px] hover:text-pink-500  dark:text-blue-300  dark:hover:text-blue-800"></i></router-link>
      <span @click="toggleDark()">
      <i class="fa-regular fa-moon text-[34px] mx-2 dark:text-slate-50 dark:hover:bg-blue-800'"></i>
      </span>
      <p class="absolute top-3 mr-2 dark:text-blue-300 ">{{ store.favorites.length }}</p></div> 
    </div>
</nav>

</template>