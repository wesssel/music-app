import mock from './mock.json'
import Artists from '../artists/index.vue'

export default {
  name: 'home',

  components: { Artists },

  data() {
    return {
      artists: mock,
    }
  },
}
