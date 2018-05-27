<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong Api Music
          .nav-right.nav-menu
            router-link.nav-item(:to="{ name: 'search' }") Buscar
            router-link.nav-item(to="about") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title API MUSIC
        h2.subtitle Canciones
        ma-player
</template>

<script>
  import MaPlayer from '@/components/Player'

  export default {
    components: { MaPlayer }
  }
</script>
