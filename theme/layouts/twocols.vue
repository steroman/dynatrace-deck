<template>
  <div class="dt-twocol-wrapper">

    <!-- Slide header -->
    <header v-if="$frontmatter.title" class="text-center mb-6">
      <h1 class="dt-slide-title">
        {{ $frontmatter.title }}
      </h1>
      <p v-if="$frontmatter.subtitle" class="dt-slide-subtitle">
        {{ $frontmatter.subtitle }}
      </p>
    </header>

    <!-- Two columns, no panels, no ribbons -->
    <div class="dt-twocol-cols">

      <div class="dt-twocol-col">
<h2
  v-if="$frontmatter.leftTitle"
  class="dt-col-title mb-4 text-center"
>
          {{ $frontmatter.leftTitle }}
        </h2>
        <div class="dt-col-body">
          <slot name="left" />
        </div>
      </div>

      <div class="dt-twocol-col">
<h2
  v-if="$frontmatter.rightTitle"
  class="dt-col-title mb-4 text-center"
>
          {{ $frontmatter.rightTitle }}
        </h2>
        <div class="dt-col-body">
          <slot name="right" />
        </div>
      </div>

    </div>

  </div>
</template>
