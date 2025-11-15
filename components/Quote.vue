<template>
  <div class="quote-container">
    <div class="quote-mark">“</div>
    <div class="quote-text"><slot /></div>
    <div v-if="author" class="quote-author">— {{ author }}</div>
  </div>
</template>

<script setup>
defineProps({
  author: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.quote-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: left;
  position: relative;
}

.quote-mark {
  font-size: 6rem;
  line-height: 0.5;
  opacity: 0.15;
  position: absolute;
  top: -1.2rem;
  left: -0.2rem;
  font-weight: 700;
}

.quote-text {
  font-size: 1.9rem;
  line-height: 1.35;
  font-weight: 500;
  color: #fff
}

.quote-author {
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #555;
  font-weight: 500;
}
</style>
