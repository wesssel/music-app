import Channel from '../channel/index.vue'

export default {
  name: 'artists',

  components: { Channel },

  props: {
    artists: {
      type: Array,
    },
  },
}
