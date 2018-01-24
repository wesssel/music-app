import mock from './mock.json'
import Artists from '../artists/index.vue'
import AddArtist from '../add-artist/index.vue'

export default {
  name: 'home',

  components: { Artists, AddArtist },

  data() {
    return {
      artists: mock,
    }
  },
}
