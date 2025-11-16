<template>
  <div class="w-full">
    <div class="dt-ribbon"></div>
    <div class="dt-twocol-panel p-6 text-left">
      <h4 class="font-semibold text-lg mb-4 text-dt-text">
        {{ title }}
      </h4>

      <ul class="list-none space-y-2 text-dt-text-muted">
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: Array,
})
</script>
