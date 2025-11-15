<template>
  <div class="dt-twocol-wrapper">

    <header v-if="$frontmatter.title" class="text-center">
      <h1 class="dt-slide-title">{{ $frontmatter.title }}</h1>
      <p v-if="$frontmatter.subtitle" class="dt-slide-subtitle">{{ $frontmatter.subtitle }}</p>
    </header>

    <div class="dt-twocol-cols">

      <div class="dt-twocol-col">
        <div class="dt-ribbon"></div>
        <div class="dt-twocol-panel">
          <h2 v-if="$frontmatter.leftTitle" class="dt-col-title">
            {{ $frontmatter.leftTitle }}
          </h2>
          <div class="dt-col-body">
            <slot name="left" />
          </div>
        </div>
      </div>

      <div class="dt-twocol-col">
        <div class="dt-ribbon"></div>
        <div class="dt-twocol-panel">
          <h2 v-if="$frontmatter.rightTitle" class="dt-col-title">
            {{ $frontmatter.rightTitle }}
          </h2>
          <div class="dt-col-body">
            <slot name="right" />
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
