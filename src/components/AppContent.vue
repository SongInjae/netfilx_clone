<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import MovieModal from '~/components/MovieModal.vue'
import { useMovieStore } from '~/store/movie.ts'
import TheLoader from '~/components/TheLoader.vue'

const showModal = ref(false)
const fetchLoading = ref(false)

const movieStore = useMovieStore()
const router = useRouter()
const route = useRoute()

async function fetchAPI() {
  fetchLoading.value = true
  await movieStore.fetchMovies({ title: String(route.query.q), page: 1 })
  fetchLoading.value = false
}
if (route.query.jbv) showModal.value = true

async function goToMovieContent(id: string) {
  const currentRoute = router.currentRoute.value
  const query = { ...currentRoute.query, jbv: id }
  await router.push({ path: currentRoute.path, query: query })
  showModal.value = true
}
router.afterEach((to, from) => {
  if (to.query.q !== from.query.q) {
    fetchAPI()
  }
})
fetchAPI()
</script>

<template>
  <TheLoader v-if="movieStore.loading && fetchLoading" />
  <div
    v-else
    class="content"
  >
    <ul class="content__grid">
      <li
        v-for="movie in movieStore.filteredMovies"
        :key="movie.imdbID"
      >
        <img
          :src="movie.Poster"
          :alt="movie.Title"
          class="content__grid--img"
          @click="goToMovieContent(movie.imdbID)"
        />
      </li>
    </ul>
    <MovieModal
      v-if="showModal"
      @close-modal="showModal = false"
    />
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  &__grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    overflow: hidden;
    gap: 5px;
    &--img {
      width: 240px;
    }
  }
}
</style>
