<template lang="pug">
  main
    transition(name="move")
      ma-notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados
    transition(name="move")
      ma-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar Canciones",
            v-model="searchQuery",
            @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
              ma-track(
                v-blur="t.preview_url",
                :class="{ 'is-active': t.id === selectedTrack }",
                :track="t",
                @select="setSelectedTrack"
              )
</template>

<script>
import trackService from '@/services/track'

import MaTrack from '@/components/Track.vue'
import MaLoader from '@/components/shared/Loader'
import MaNotification from '@/components/shared/Notification'
export default {
  name: 'app',

  components: { MaTrack, MaLoader, MaNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) return
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(response => {
          this.showNotification = response.tracks.total === 0
          this.tracks = response.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px
  }
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
