<script>
import playgroundComp from '@components/navbarNew.vue'

export default {
  components: { playgroundComp },
}
</script>

<template>
  <div :class="$style.container">
    <playgroundComp />
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@design';

.container {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  margin: 0 auto;
}
</style>
