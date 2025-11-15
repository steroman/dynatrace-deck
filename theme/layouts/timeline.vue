<template>
  <div class="dt-slide-wrapper flex items-center justify-center">
    <div class="w-full max-w-6xl flex flex-col items-center">
      <header v-if="$frontmatter.title" class="mb-12 text-center">
        <h2 class="text-4xl font-medium mb-2">{{ $frontmatter.title }}</h2>
      </header>

      <div class="w-full flex justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
// no script needed
</script>
