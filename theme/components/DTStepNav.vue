<template>
  <div class="flex justify-center gap-6">
    <div
      v-for="(n, i) in count"
      :key="i"
      class="w-10 h-10 flex items-center justify-center rounded-full font-semibold
             border border-dt-surface-2 bg-dt-panel text-dt-text-muted"
      :class="i + 1 === active ? 'bg-dt-blue text-white border-dt-blue' : ''"
    >
      {{ i + 1 }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  count: Number,   // e.g., 5
  active: Number   // e.g., 1
})
</script>
