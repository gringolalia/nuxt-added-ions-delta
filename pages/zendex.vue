<template lang="pug">
section.container
  div
    img(src="@/assets/img/alchemy-sulphuric-bluegrey-hey.svg" height="120px")
    h1.title
      | The Zen of Pens

    h2.subtitle
      | No Undertaking Extra Tough

    i.fas.fa-mosque.fa-5x

    h3.ion-margin-bottom Engenho Novo Quebra Ovo
    router-link(to="/")
      ion-button(color="primary") Depress Me

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

@import '@/assets/css/app.scss';

.container {
  min-height: calc(100vh - 45px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'News Cycle', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 42px;
  letter-spacing: 1px;
}

.subtitle {
  font-family: "News Cycle", sans-serif;
  font-weight: 300;
  font-size: 32px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
