<template>
  <div class="dt-slide-wrapper flex flex-col">

    <!-- TITLE (TOP-LEFT) -->
    <header v-if="$frontmatter.title || $frontmatter.subtitle" class="w-full max-w-6xl mb-10">
      <h1 v-if="$frontmatter.title" class="text-4xl font-medium tracking-tight mb-1">
        {{ $frontmatter.title }}
      </h1>
      <p v-if="$frontmatter.subtitle" class="text-lg text-dt-text-muted">
        {{ $frontmatter.subtitle }}
      </p>
    </header>

    <!-- MAIN GRID — TOP 4/6 -->
    <div class="w-full max-w-6xl flex flex-1 gap-8 mb-10">

      <!-- CONNECT (LEFT 1/3) -->
      <section class="flex-1 flex flex-col">
        <div class="dt-ribbon rounded-t-[4px]"></div>
        <div class="bg-[#1d262e] rounded-b-[4px] p-6 flex flex-col flex-1">

          <!-- Matching header height -->
          <div class="mb-4">
            <h3 class="text-lg font-semibold tracking-tight justify-center flex">
              Connect on LinkedIn
            </h3>
          </div>

          <div class="flex flex-col items-center justify-center flex-1">
            <img
              v-if="contactQR"
              :src="contactQR"
              alt="LinkedIn QR"
              class="w-32 h-32 object-contain rounded-md border border-dt-surface-2"
            />
          </div>

        </div>
      </section>

      <!-- RESOURCES (RIGHT 2/3) -->
      <section class="flex-[2] flex flex-col">
        <div class="dt-ribbon rounded-t-[4px]"></div>

        <div class="bg-[#1d262e] rounded-b-[4px] p-6 flex flex-col flex-1">

          <!-- Same header height -->
          <div class="mb-4">
            <h3 class="text-lg font-semibold tracking-tight">
              Resources
            </h3>
          </div>

          <div class="flex flex-col gap-2 text-sm leading-relaxed">
            <div
              v-for="(item, i) in resources"
              :key="i"
              class="whitespace-normal"
            >
              <a
                :href="item.url"
                target="_blank"
                class="text-dt-blue hover:underline"
              >
                {{ item.label }}
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>

    <!-- FOOTER BAR — FULL WIDTH, SMALL, RIGHT-ALIGNED -->
    <div class="w-full bg-[#1d262e] rounded-t-[4px] px-6 py-2">
      <div class="max-w-6xl mx-auto flex justify-end text-right">

        <div class="space-y-1">

          <!-- New, compact footer text -->
          <p class="text-[11px] text-dt-text-muted leading-tight">
            Built using <code>docs-as-code</code> with
            <a href="https://sli.dev" target="_blank" class="text-dt-blue hover:underline">
              Slidev
            </a>
          </p>

          <p>
            <a
              v-if="repoUrl"
              :href="repoUrl"
              target="_blank"
              class="text-[11px] text-dt-blue hover:underline"
            >
              View the repository (GitHub) →
            </a>
          </p>

        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  contactQR: String,
  repoUrl: String,
  resources: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
code {
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85em;
  font-family: "DT Flow", monospace;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
}   
</style>
