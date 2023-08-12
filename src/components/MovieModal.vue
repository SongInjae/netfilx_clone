<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useMovieStore } from '~/store/movie.ts'
import TheLoader from '~/components/TheLoader.vue'
import TheIcon from '~/components/TheIcon.vue'

const fetchAPI = ref(false)
const movieStore = useMovieStore()
const route = useRoute()
const router = useRouter()
const info = ref<{
  Poster: string
  Title: string
  Plot: string
  Runtime: string
  Director: string
  Actors: string
  Writer: string
  Genre: string
  Type: string
}>({})
const emit = defineEmits(['closeModal'])

async function fetchInfo() {
  fetchAPI.value = true
  await movieStore.fetchMovieInfo({ id: String(route.query.jbv) })
  info.value = movieStore.movieInfo
  fetchAPI.value = false
}
function offModal() {
  emit('closeModal')
  router.back()
}

fetchInfo()
</script>

<template>
  <div class="modal">
    <div
      class="modal__background"
      @click="offModal"
    ></div>
    <TheLoader v-if="movieStore.loading && fetchAPI" />
    <div
      v-else
      class="modal__contents"
    >
      <img
        class="modal__contents--poster"
        :src="info.Poster"
      />
      <div class="modal__contents--title">{{ info.Title }} 상세 정보</div>
      <div class="modal__contents--content">
        <div>
          <span class="title">Plot: </span
          ><span>{{ info.Plot === 'N/A' ? 'No information' : info.Plot }}</span>
        </div>
        <div>
          <span class="title">Runtime: </span
          ><span>{{
            info.Runtime === 'N/A' ? 'No information' : info.Runtime
          }}</span>
        </div>
        <div>
          <span class="title">Creators: </span
          ><span>{{
            info.Director === 'N/A' ? 'No information' : info.Director
          }}</span>
        </div>
        <div>
          <span class="title">Cast: </span
          ><span>{{
            info.Actors === 'N/A' ? 'No information' : info.Actors
          }}</span>
        </div>
        <div>
          <span class="title">Writers: </span><span>{{ info.Writer }}</span>
        </div>
        <div>
          <span class="title">Genre: </span><span>{{ info.Genre }}</span>
        </div>
        <div>
          <span class="title">Type: </span
          ><span style="border: 1px solid; padding: 2px 4px">{{
            info.Type
          }}</span>
        </div>
      </div>
      <TheIcon
        class="modal__contents--closeBtn"
        @click="offModal"
      >
        close
      </TheIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.7);
  }
  :deep(.the-loader) {
    position: absolute;
    top: 50%;
  }
  &__contents {
    width: 100%;
    max-width: 850px;
    height: 95vh;
    //max-height: 95vh;
    margin-top: 5vh;
    background-color: #fff;
    position: relative;
    border-radius: 6px;
    overflow: scroll;
    background-color: black;
    color: white;
    &--poster {
      width: 100%;
      height: 40vh;
    }
    &--title {
      width: 90%;
      margin: 30px auto;
      margin-top: 30px;
      font-size: 24px;
    }
    &--content {
      width: 90%;
      margin: 30px auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .title {
        color: gray;
      }
    }
    &--closeBtn {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: rgba(#000, 0.5);
      color: white;
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>
