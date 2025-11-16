<template>
  <div
    class="w-full grid gap-10 mt-6"
    :class="[gridClass(items.length), denseClass(items.length)]"
  >
    <DTCard
      v-for="(item, i) in items"
      :key="i"
      :icon="item.icon"
      :title="item.title"
      :size="item.size || 'md'"
      :iconSize="item.iconSize || 'md'"
    >
      <template v-if="item.body">
        <ul class="list-none space-y-1 text-base text-dt-text-muted mt-2">
          <li v-for="(b, idx) in item.body" :key="idx">{{ b }}</li>
        </ul>
      </template>
    </DTCard>
  </div>
</template>

<script setup>
import DTCard from './DTCard.vue'

defineProps({ items: Array })

const gridClass = (n) => {
  if (n <= 1) return 'grid-cols-1'
  if (n === 2) return 'grid-cols-2'
  if (n === 3) return 'grid-cols-3'
  if (n === 4) return 'grid-cols-4'
  return 'grid-cols-3' // 5–6 → 3×2
}

const denseClass = (n) => {
  return n >= 5 ? 'dt-cards-dense' : ''
}
</script>

<style>
.dt-cards-dense :global(.dt-twocol-panel) {
  padding: 0.75rem !important;      /* override p-6 entirely */
  min-height: 6rem !important;      /* shrink height */
}

.dt-cards-dense :global(.dt-twocol-panel) > * {
  margin-bottom: 0.25rem !important;
}

.dt-cards-dense :global(.dt-ribbon) {
  height: 8px !important;
}

.dt-cards-dense :global(.text-2xl),
.dt-cards-dense :global(.text-3xl),
.dt-cards-dense :global(.text-4xl) {
  font-size: 1.25rem !important;   /* shrink icons too */
}
</style>
