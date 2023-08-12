<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div class="app">
    <div class="app__container">
      <AppHeader />
      <div class="app__container--main">
        <RouterView />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.app {
  background-color: black;
  &__container {
    max-width: 1280px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    &--main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
