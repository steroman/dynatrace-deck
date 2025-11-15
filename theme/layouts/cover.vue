<template>
  <div class="dt-cover-wrapper">
    <!-- MAIN CONTENT -->
    <div class="dt-cover-content">
      <!-- Title from frontmatter or Slidev config -->
      <h1 class="dt-cover-title">
        {{ $frontmatter.title || $slidev.config.title }}
      </h1>

      <!-- Subtitle from frontmatter -->
      <p v-if="$frontmatter.subtitle" class="dt-cover-subtitle">
        {{ $frontmatter.subtitle }}
      </p>

      <!-- Optional extra content in the body of the slide -->
      <slot />
    </div>

    <!-- FOOTER -->
<div class="dt-cover-footer flex flex-col items-center space-y-4">

  <!-- optional left footer content -->
  <div class="w-full text-center">
    <slot name="footer-left" />
  </div>

  <!-- centered logo -->
  <div class="flex justify-center w-full">
    <slot name="logo" />
  </div>

</div>

  </div>
</template>
