<script setup>
import { useVideosStore } from "../stores/video.js";
import { reactive, computed } from "vue";

const props = defineProps({
    youtubeId: {
        type: String,
        required: true,
    },
});

const store = useVideosStore();

const newComment = reactive({
    name: "",
    content: "",
});

const submitForm = () => {
    if (!newComment.name || !newComment.content) return;
    store.addComment({ youtubeId: props.youtubeId, ...newComment });
};

const filterComments = computed(() => {
    return store.comments.filter((item) => item.youtubeId === props.youtubeId);
});
</script>

<template>
    <section
        class="w-[90%] xl:w-[80%] rounded-md bg-white dark:bg-gray-900 py-8 lg:py-16 max-w-[100%] md:w-[95%]"
    >
        <div class="max-w-[100%] mx-auto px-4">
            <div class="flex justify-between items-center mb-6">
                <h2
                    class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white"
                >
                    Commenti (20)
                </h2>
            </div>
            <form class="mb-6 min-w-[90%]">
                <div
                    class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                >
                    <label for="comment" class="sr-only">Nome</label>
                    <input
                        id="comment"
                        v-model.trim="newComment.name"
                        rows="6"
                        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="il tuo nome"
                        required
                    />
                </div>
                <div
                    class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                >
                    <label for="comment" class="sr-only">Il tuo commento</label>
                    <textarea
                        id="comment"
                        rows="6"
                        v-model="newComment.content"
                        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Scrivi qualcosa"
                        required
                    ></textarea>
                </div>
                <button
                    @click.prevent="submitForm"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-rose-500 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                    Pubblica
                </button>
            </form>

            <div
                class="w-[100%] py-3 px-2 bg-slate-100 dark:bg-slate-800 dark:text-white rounded-md"
                v-if="filterComments.length === 0"
            >
                <b>Sii il primo a commentare!</b>
            </div>

            <div v-else>
                <article
                    v-for="comment in filterComments"
                    class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p
                                class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
                            >
                                <img
                                    class="mr-2 w-6 h-6 rounded-full"
                                    src="@/assets/avatar.png"
                                    alt="Helene Engels"
                                />{{ comment.name }}
                            </p>
                        </div>
                    </footer>
                    <p class="text-gray-500 dark:text-gray-400">
                        {{ comment.content }}
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>
