<script setup lang="ts">
/**
 * We only define props for what the layout needs.
 * The title/subtitle come from $frontmatter inside the <template>.
 */
const props = defineProps({
  image: { type: String, required: true },
  imageWidth: { type: String, default: 'max-w-xl' },
  imageHeight: { type: String, default: 'max-h-[55vh]' },
  credit: { type: String, default: '' },
  creditUrl: { type: String, default: '' },
})
</script>

<template>
  <div class="dt-slide-wrapper flex flex-col">

    <!-- FIXED HEADER (copied from default layout) -->
    <div class="w-full max-w-6xl mx-auto flex flex-col items-center mb-12">

      <header v-if="$frontmatter.title" class="text-center">
        <h2 class="text-4xl font-medium mb-4">
          {{ $frontmatter.title }}
        </h2>
        <p v-if="$frontmatter.subtitle" class="text-xl text-dt-text-muted">
          {{ $frontmatter.subtitle }}
        </p>
      </header>

      <!-- Wizard slot (if needed) -->
      <div class="mt-2">
        <slot name="step-nav" />
      </div>

    </div>

    <!-- BODY -->
    <div class="w-full max-w-6xl mx-auto flex gap-12">

      <!-- LEFT COLUMN -->
      <div class="flex flex-col flex-1">

        <!-- Gradient ribbon -->
        <div
          class="w-full h-[4px] bg-gradient-to-r
                 from-dt-grad-1 via-dt-grad-2 via-dt-grad-3 to-dt-grad-4 mb-6"
        />

        <!-- Image panel -->
        <div
          class="border border-dt-surface-2 bg-dt-panel shadow-lg
                 overflow-hidden flex items-center justify-center"
          :class="props.imageWidth"
        >
          <img
            :src="props.image"
            alt=""
            class="object-contain w-full mx-auto"
            :class="props.imageHeight"
          />
        </div>

        <!-- Credit -->
        <div
          v-if="props.credit"
          class="mt-3 text-sm text-dt-text-muted opacity-80 max-w-[80%]
                 leading-snug break-words"
        >
          <template v-if="props.creditUrl">
            <a
              :href="props.creditUrl"
              target="_blank"
              rel="noopener"
              class="text-dt-blue underline hover:text-dt-blue/80 break-words"
            >
              {{ props.credit }}
            </a>
          </template>
          <template v-else>
            {{ props.credit }}
          </template>
        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div class="flex-1 flex flex-col justify-start">
        <slot />
      </div>

    </div>
  </div>
</template>
