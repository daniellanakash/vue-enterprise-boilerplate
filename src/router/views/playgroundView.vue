<script>
import appConfig from '@src/app.config'
import newLayout from '@layouts/newMain.vue'
import Table from '@components/playgroundComp.vue'

export default {
  page: {
    title: 'Playground',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { newLayout, Table },
}
</script>

<template>
  <newLayout :class="$style.link">
    <div :class="$style.body">
      <p>Danielle's new page</p>
    </div>
    <Table />
  </newLayout>
</template>

<style lang="scss" module>
@import '@design';

.link a {
  font-weight: 600;
  color: $color-link-text-new;
  text-decoration: none;
  cursor: default;
}

.body {
  height: 200px;
  padding: 1rem;
  font-size: 40px;
  color: $color-text-new;
  text-align: center;
  background-color: $color-body-new;
}
</style>
