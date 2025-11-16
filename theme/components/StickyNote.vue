<template>
  <div class="sticky-note relative" :style="noteStyle">
    <slot />
    <span class="corner"></span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  rotate?: number
  color?: string
}>()

const pastelColors = [
  '#FFF8B8',
  '#FFECCB',
  '#F7F4FF',
  '#E8F8FF',
  '#EDFFE9'
]

const randomRotation = (Math.random() * 4 - 2).toFixed(2)

const backgroundColor = computed(() => {
  return props.color || pastelColors[Math.floor(Math.random() * pastelColors.length)]
})

const noteStyle = computed(() => ({
  backgroundColor: backgroundColor.value,
  transform: `rotate(${props.rotate ?? randomRotation}deg)`
}))
</script>

<style scoped>
.sticky-note {
  padding: 0.75rem;
  color: #333;
  box-shadow:
    0 -3px 6px rgba(0, 0, 0, 0.15),
    0 3px 5px rgba(0, 0, 0, 0.12);
  font-size: 0.8rem;
  line-height: 1.25;
  border-radius: 0;
  position: relative;
  height: 100%;
}

/* top-right folded corner, stronger shadow */
.corner {
  position: absolute;
  top: 0;
  right: 0;

  /* size of the folded corner */
  width: 16px;
  height: 16px;

  /* this is the backside of the paper — darker */
  background: rgba(0, 0, 0, 0.25);

  /* show only the LOWER-LEFT triangle (the visible fold) */
  clip-path: polygon(
    0 100%,  /* bottom-left  */
    0 0,     /* top-left     */
    100% 0   /* top-right    */
  );

  /* subtle shadow */
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);

  /* makes the fold look like it's flipped forward */
  transform: translate(50%, -50%) rotate(45deg);
}
</style>
