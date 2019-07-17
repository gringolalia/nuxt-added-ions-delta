<template lang="pug">
ion-app#app
  ion-menu(name='menu' type='overlay' side="start")
    .ion-page
      ion-header
        ion-toolbar
          ion-title.with.dignity
            i.fas.fa-cogs.fa-2x.ion-margin-end
            | Engenho Novo LLC

      ion-content
        ion-list(lines="none")
          ion-list-header
            | Navegar é Preciso

          ion-menu-toggle(auto-hide)

            router-link(to='/windex')
              ion-item(button)
                ion-icon(slot='start' name='infinite')
                ion-label.ion-margin-start
                  | In Media Res

            ion-item(button href='/bindex')
              ion-icon(slot='start' name='airplane')

              ion-label.ion-margin-start
                | In Principio Erat


            ion-item(button nuxt-link to='/cindex')
              ion-icon(slot='start' name='bicycle')

              ion-label.ion-margin-start
                | Cations


            ion-item(button href='/findex')
              ion-icon(slot='start' name='construct')

              ion-label.ion-margin-start
                | Anions


            ion-item(button href='/gindex')
              ion-icon(slot='start' name='key')

              ion-label.ion-margin-start
                | Onions

            ion-item(button href='/hindex')
              ion-icon(slot='start' name='mic')

              ion-label.ion-margin-start
                | Lions

            ion-item(button href='/tindex')
              ion-icon(slot='start' name='outlet')

              ion-label.ion-margin-start
                | Scions

            ion-item(button href='/sindex')
              ion-icon(slot='start' name='aperture')

              ion-label.ion-margin-start
                | Paraguayans


            ion-item(button href='/zendex')
              ion-icon(slot='start' name='sunny')

              ion-label.ion-margin-start
                | Hawaiians


            ion-item(button href='windex')
              ion-icon(slot='start' name='restaurant')

              ion-label.ion-margin-start
                | Zion
  .ion-page(main)
    ion-header
      ion-toolbar
        ion-buttons(slot='start')
          ion-menu-toggle
            ion-button
              ion-icon(slot='icon-only' name='menu')

        ion-title.with.dignity
          i.fas.fa-chess.fa-2x.ion-margin-end
          | A Turing-Tested Engenho Novo

        ion-buttons(slot="secondary")

          ion-button(routerLink="/bindex")
            ion-icon(slot='icon-only' name='airplane')

          ion-button
            ion-icon(slot='icon-only' name='infinite')

          ion-button
            ion-icon(slot='icon-only' name='cut')

          ion-button
            i.fas.fa-sun.fa-2x

          ion-button
            ion-icon(slot='icon-only' name='more')

    ion-content
      nuxt
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component()
  export default {
    transition: {
      name: 'test',
      mode: 'out-in'
    }
  }
  export default class MenuExample extends Vue {

    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }

    openEnd() {
      this.menu.open('end');
    }

    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
  }
</script>

<style>

@import '@/assets/css/app.scss';
@import url('https://fonts.googleapis.com/css?family=News+Cycle|Material+Icons');
@import url('https://unpkg.com/@ionic/core@latest/css/ionic.bundle.css');

:root {
  --ion-font-family: "News Cycle", sans-serif;
}

html {
  font-family: 'News Cycle', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

ion-toolbar {
  --background: #607d8b;
  --color: white;
}
</style>
