<template>
  <div class="dt-slide-wrapper flex flex-col">

    <!-- FIXED HEADER -->
    <div class="w-full max-w-6xl mx-auto flex flex-col items-center mb-12">

      <header v-if="$frontmatter.title" class="text-center">
        <h2 class="text-4xl font-medium mb-4">
          {{ $frontmatter.title }}
        </h2>
      </header>

      <div class="mt-2">
        <slot name="step-nav" />
      </div>

    </div>

    <!-- BODY -->
    <div class="flex-1 w-full max-w-6xl mx-auto flex justify-center">
      <slot />
    </div>

  </div>
</template>
