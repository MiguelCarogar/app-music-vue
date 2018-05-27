<template lang="pug">
  .contain
    .columns
      .column.is-5.is-offset-4
        ma-track(:track="track")
</template>

<script>
  import trackService from '@/services/track'
  import MaTrack from '@/components/Track.vue'
  export default {
    components: { MaTrack },

    data () {
      return {
        track: {}
      }
    },

    created () {
      const id = this.$route.params.id
      trackService.getById(id)
        .then(response => {
          this.track = response
        })
    }
  }
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>
