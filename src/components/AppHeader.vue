<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TheIcon from '~/components/TheIcon.vue'

const title = ref('')
const router = useRouter()

function searchMovies() {
  router.push({ path: '/search', query: { q: title.value } })
}
function onReset() {
  title.value = ''
}
</script>

<template>
  <nav class="header">
    <div class="header__icon">
      <a
        href="/"
        class="header__icon--img"
      ></a>
    </div>
    <div class="header__content">
      <div class="header__content--inputContent">
        <TheIcon> Search </TheIcon>
        <input
          v-model="title"
          @keydown.enter="searchMovies"
        />
        <TheIcon
          @click="onReset"
          class="cursor"
        >
          Close
        </TheIcon>
      </div>
      <TheIcon class="header__content--notify"> notifications </TheIcon>
      <img
        src="../assets/Netflix_profile.png"
        alt="프로필 이미지"
        class="header__content--profile"
      />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.header {
  height: 68px;
  display: flex;
  align-items: center;
  &__icon {
    &--img {
      width: 130px;
      height: 30px;
      display: block;
      background: url('../assets/Netflix_Logo.png') no-repeat center;
      background-size: cover;
    }
  }
  &__content {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 20px;
    &--inputContent {
      width: 275px;
      height: 36px;
      box-sizing: border-box;
      color: white;
      border: 1px solid;
      background-color: black;
      display: flex;
      align-items: center;
      padding: 0 10px;
      input {
        background-color: transparent;
        border: none;
        flex-grow: 1;
        color: white;
        outline: none;
      }
    }
    &--notify {
      color: white;
    }
    &--profile {
      width: 32px;
      height: 32px;
    }
  }
  .cursor {
    cursor: pointer;
  }
}
</style>
