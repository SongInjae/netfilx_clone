<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import MovieModal from '~/components/MovieModal.vue'
import { useMovieStore } from '~/store/movie.ts'
import LoadingSpinner from '~/components/LoadingSpinner.vue'

const showModal = ref(false)
const fetchLoading = ref(false)
const page = ref(1)

const movieStore = useMovieStore()
const router = useRouter()
const route = useRoute()

async function fetchAPI(newFind: boolean) {
  fetchLoading.value = true
  await movieStore.fetchMovies({
    title: String(route.query.q),
    page: page.value,
    newFind,
  })
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
    fetchAPI(true)
    page.value = 1
  }
})

function handleScroll() {
  const isScrollEnded =
    window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight

  if (isScrollEnded && !fetchLoading.value) {
    page.value += 1
    fetchAPI(false)
  }
}

window.addEventListener('scroll', handleScroll)

fetchAPI(true)
</script>

<template>
  <div class="content">
    <ul class="content__grid">
      <li
        v-for="movie in movieStore.movies"
        :key="movie.imdbID"
      >
        <img
          v-if="movie.Poster === 'N/A'"
          class="content__grid--img"
          src="../assets/icon_movie.png"
          @click="goToMovieContent(movie.imdbID)"
        />
        <img
          v-else:
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
  <LoadingSpinner v-show="movieStore.loading && fetchLoading" />
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
      height: 320px;
      background-color: lightgray;
    }
  }
}
</style>
