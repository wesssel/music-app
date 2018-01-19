import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../css/app.css'

import Artists from './artists/index.vue'

Vue.use(ElementUI)

Vue.create = obj => new Vue(obj)

Vue.create({
  el: '#app',
  render: h => h(Artists),
})
