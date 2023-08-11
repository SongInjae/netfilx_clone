<template>
  <div class="the-icon">
    <span class="material-symbols-outlined">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.the-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
