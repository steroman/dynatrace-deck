<template>
  <div
    class="relative w-full max-w-2xl mx-auto rounded-xl border border-dt-surface-2 bg-dt-surface-1 px-4 py-2 min-h-[80px]"
  >
    <!-- Decorative opening quote -->
    <div
      class="absolute text-dt-text-muted opacity-30 select-none text-xl top-1 left-3"
    >
      &ldquo;
    </div>

    <!-- Quote text -->
    <blockquote
      class="relative text-sm leading-snug mt-5 pl-1"
    >
      <slot />
    </blockquote>

    <!-- Author -->
    <div
      class="font-medium text-[11px] text-dt-text-muted text-right mt-1"
    >
      — {{ author }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  author: String
})
</script>
