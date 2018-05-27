<template lang="pug">
  #app
    ma-header

    router-view

    ma-footer
</template>

<script>
import MaHeader from '@/components/layout/Header'
import MaFooter from '@/components/layout/Footer.vue'

export default {
  name: 'app',
  components: { MaHeader, MaFooter }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
