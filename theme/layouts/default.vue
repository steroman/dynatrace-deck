<template>
  <div class="dt-slide-wrapper">
    <header v-if="$frontmatter.title">
      <h1 class="dt-slide-title">{{ $frontmatter.title }}</h1>
      <p v-if="$frontmatter.subtitle" class="dt-slide-subtitle">
        {{ $frontmatter.subtitle }}
      </p>
    </header>

    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
