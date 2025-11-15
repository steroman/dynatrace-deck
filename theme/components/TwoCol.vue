<template>
  <div class="dt-twocol-cols">
    <div class="dt-twocol-col">
      <div class="dt-ribbon"></div>
      <div class="dt-twocol-panel">
        <slot name="left" />
      </div>
    </div>

    <div class="dt-twocol-col">
      <div class="dt-ribbon"></div>
      <div class="dt-twocol-panel">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
