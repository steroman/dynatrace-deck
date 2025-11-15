<template>
  <div class="dt-quote-wrapper">
    <div class="dt-quote-ribbon"></div>

    <div class="dt-quote-content">
      <div class="dt-quote-mark">“</div>

      <div class="dt-quote-text">
        <slot />
      </div>

      <div v-if="author" class="dt-quote-author">
        — {{ author }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  author: {
    type: String,
    default: '',
  },
})
</script>
