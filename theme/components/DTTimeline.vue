<template>
  <div class="relative w-full flex justify-between items-center py-40">

    <!-- timeline line -->
    <div class="absolute left-0 right-0 top-1/2 h-1 bg-dt-surface-2 rounded-full -translate-y-1/2">
      <div
        class="absolute inset-0 bg-gradient-to-r from-dt-grad-1 via-dt-grad-2 via-dt-grad-3 to-dt-grad-4 opacity-60 rounded-full">
      </div>
    </div>

    <!-- timeline events -->
    <div
      v-for="(item, i) in items"
      :key="i"
      class="relative flex flex-col items-center w-48"
    >
      <!-- dotted line -->
      <div
        class="absolute w-px border-r border-dt-text-muted border-dotted"
        :class="i % 2 === 0
          ? 'h-16 bottom-1/2 translate-y-2'
          : 'h-16 top-1/2 -translate-y-2'"
      ></div>

      <!-- card -->
      <div
        class="dt-timeline-card absolute"
        :class="i % 2 === 0
          ? 'bottom-[calc(50%+4rem)]'
          : 'top-[calc(50%+4rem)]'"
      >
        {{ item }}
      </div>

      <!-- circle (event point) -->
      <div class="w-4 h-4 rounded-full bg-dt-panel border border-dt-surface-2 z-10"></div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  items: Array
})
</script>

<style scoped>
.dt-timeline-card {
  width: 11rem;
  height: 4.5rem; /* ← fixed height for all cards */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 0.75rem 1rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0.75rem;
  backdrop-filter: blur(4px);
  color: #fff;
  font-size: 0.9rem;
  line-height: 1.25rem;
}
</style>
