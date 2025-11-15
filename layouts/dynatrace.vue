<template>
  <div class="dt-wrapper">
    <header class="dt-title" v-if="$frontmatter.title">
      <h1>{{ $frontmatter.title }}</h1>
      <p v-if="$frontmatter.subtitle" class="dt-subtitle">{{ $frontmatter.subtitle }}</p>
    </header>

    <main class="dt-content">
      <div class="dt-content-inner">
        <slot />
      </div>
    </main>
  </div>
</template>

<style>
.dt-wrapper {
  padding: 3rem 3.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: white;
}

/* Title pinned top-left */
.dt-title {
  margin-bottom: 2rem;
}

.dt-title h1 {
  margin: 0;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: left;
}

.dt-subtitle {
  margin-top: 0.25rem;
  font-size: 1.2rem;
  opacity: 0.7;
}

/* Body vertically centered */
.dt-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* centers body vertically */
}

.dt-content-inner {
  max-width: 100%;
  text-align: left;
}
</style>
