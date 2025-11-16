<template>
  <div class="w-full flex flex-col gap-2">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="relative flex items-center gap-2 p-3 rounded-md bg-dt-panel border border-dt-surface-2 overflow-hidden"
    >
      <!-- LEFT GRADIENT BORDER (part of the card edge) -->
      <div
        class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b
               from-dt-grad-1 via-dt-grad-2 via-dt-grad-3 to-dt-grad-4"
      ></div>

      <!-- TEXT -->
      <div class="pl-3 text-sm font-normal leading-snug tracking-tight">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  items: Array
})
</script>

<style>
.dt-check-item {
  position: relative;
  padding-left: 0.75rem; /* space for gradient bar */
  line-height: 1.15;
}

/* Left vertical gradient bar */
.dt-check-gradient-bar {
  position: absolute;
  left: 0;
  top: 0.25rem;
  bottom: 0.25rem;
  width: 4px;
  border-radius: 2px;
}
</style>
