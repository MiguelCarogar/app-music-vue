<template lang="pug">
  .contain
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image(v-if="track && track.album")
            img(:src="track.album.images[0].url")
          p
            a.button.is-primary.is-large
              span.icon(@click="selectTrack")
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}
              .nav.level
                .level-left
                  a.level-item
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import trackMixin from '@/mixins/track'
  export default {
    mixins: [ trackMixin ],

    computed: {
      ...mapState(['track']),
      ...mapGetters(['trackTitle'])
    },

    methods: {
      ...mapActions(['getTrackById'])
    },

    created () {
      const id = this.$route.params.id

      if (!this.track || !this.track.id || this.track.id !== id) {
        this.getTrackById({ id })
          .then(() => {
            console.log('Track loaded ...')
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>
