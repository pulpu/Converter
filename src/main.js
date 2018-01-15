import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import Home from './components/Home.vue'

Vue.use(VueResource);
Vue.component('app-home', Home)


export const eventBus = new Vue();
export const eventBus2 = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
