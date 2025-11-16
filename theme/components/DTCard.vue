<template>
  <div class="w-full">
    <!-- RIBBON -->
    <div
      class="dt-ribbon"
      :class="{ 'dt-card-dense-ribbon': dense }"
    ></div>

    <!-- PANEL -->
    <div
      class="dt-twocol-panel flex flex-col text-center items-center"
      :class="[sizeClass(size), dense && 'dt-card-dense-panel']"
    >
      <!-- ICON -->
      <div
        v-if="icon"
        :class="[iconSizeClass(iconSize), dense && 'dt-card-dense-icon', 'mb-2']"
      >
        {{ icon }}
      </div>

      <!-- TITLE -->
      <div v-if="title" class="text-lg font-semibold mb-2">
        {{ title }}
      </div>

      <!-- BODY -->
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  size: { type: String, default: 'md' },
  iconSize: { type: String, default: 'md' },        // sm | md | lg | xl
  dense: { type: Boolean, default: false }          // auto-shrink
})

/* Resize card padding / height */
const sizeClass = (size) => {
  switch (size) {
    case 'sm':
      return 'py-4 min-h-[7rem]'
    case 'lg':
      return 'py-10 min-h-[13rem]'
    case 'md':
    default:
      return 'py-6 min-h-[10rem]'
  }
}

/* Map icon sizes to static classes (safe for UnoCSS) */
const iconSizeClass = (size) => {
  switch (size) {
    case 'sm':
      return 'text-xl'
    case 'lg':
      return 'text-4xl'
    case 'xl':
      return 'text-5xl'
    case 'md':
    default:
      return 'text-2xl'
  }
}
</script>
