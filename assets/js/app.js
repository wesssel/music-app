import Vue from 'vue'
import 'vueify/lib/insert-css'

import Artists from './component/artists/index.vue'

Vue.create = obj => new Vue(obj)

Vue.create({
  el: '#app',
  render: h => h(Artists),
})
