import mock from './mock.json'

import Channel from '../channel/index.vue'

export default {
  name: 'artists',

  components: { Channel },

  data() {
    return {
      artists: mock,
    }
  },
}
