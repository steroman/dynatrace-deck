<template>
  <div class="flex justify-center mt-2">
    <div class="flex items-center gap-3">
      <div
        v-for="i in count"
        :key="i"
        class="h-2 w-12 rounded-full transition-all duration-200"
        :class="i === active
          ? 'bg-gradient-to-r from-dt-grad-1 via-dt-grad-2 to-dt-grad-3'
          : 'bg-dt-surface-2'
        "
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  count: Number,
  active: Number
})
</script>
