<script setup lang="ts">
const props = defineProps({
  /* Required image path */
  image: { type: String, required: true },

  /* Tailwind/UnoCSS classes for sizing */
  imageWidth: { type: String, default: 'max-w-4xl' },
  imageHeight: { type: String, default: 'max-h-[65vh]' },

  /* Alignment: center | left | right */
  align: { type: String, default: 'center' },

  /* Optional credit text */
  credit: { type: String, default: '' },

  /* Optional link URL */
  creditUrl: { type: String, default: '' },
})
</script>

<template>
  <div class="dt-slide-wrapper flex flex-col relative">

    <!-- Title slot or frontmatter -->
    <slot name="title">
      <h1
        v-if="$slidev?.frontmatter?.title"
        class="dt-slide-title text-center mb-12"
      >
        {{ $slidev.frontmatter.title }}
      </h1>
    </slot>

    <!-- Gradient ribbon -->
    <div
      class="w-full h-[4px] bg-gradient-to-r from-dt-grad-1 via-dt-grad-2 via-dt-grad-3 to-dt-grad-4 mb-8"
    />

    <!-- Image wrapper -->
    <div
      class="flex w-full mb-10 z-10"
      :class="{
        'justify-center': align === 'center',
        'justify-start': align === 'left',
        'justify-end': align === 'right',
      }"
    >
      <div
        class="border border-dt-surface-2 bg-dt-panel shadow-lg overflow-hidden flex items-center justify-center"
        :class="imageWidth"
      >
        <img
          :src="image"
          alt=""
          class="object-contain w-full mx-auto"
          :class="imageHeight"
        />
      </div>
    </div>

    <!-- Content below image (captions / explanation) -->
    <slot />

    <!-- Optional credit -->
<div
  v-if="credit"
  class="absolute bottom-10 right-20 text-xs text-dt-text-muted opacity-80 max-w-[40%] text-right leading-snug break-words"
>
  <template v-if="creditUrl">
    <a
      :href="creditUrl"
      target="_blank"
      rel="noopener"
      class="text-dt-blue underline hover:text-dt-blue/80 break-words"
    >
      {{ credit }}
    </a>
  </template>

  <template v-else>
    {{ credit }}
  </template>
</div>

  </div>
</template>
