import Vue from 'vue'

if(!process.browser) {

global.HTMLElement = () => {};

global.customElements = { define: () => {} };

require('@skatejs/ssr/register')
}

Vue.config.ignoredElements = [/^ion-/];
