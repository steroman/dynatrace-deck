<template>
  <div class="dt-card-grid">
    <slot />
  </div>
</template>

<style scoped>
.dt-card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 1.5rem;
}
</style>
