<template>
  <div
    class="w-full mx-auto mt-0 grid gap-3"
    :style="{
      gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))'
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
