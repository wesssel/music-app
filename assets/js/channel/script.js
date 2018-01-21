export default {
  name: 'channel',

  props: {
    channelId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },

  computed: {
    icon() {
      return `fa-${this.type}`
    },

    url() {
      const { type, channelId } = this

      switch (type) {
        case 'spotify': {
          return `https://open.spotify.com/artist/${channelId}`
        }
        case 'youtube': {
          return `https://www.youtube.com/channel/${channelId}`
        }
        case 'soundcloud': {
          return `https://www.soundcloud.com/${channelId}`
        }
        default: {
          return false
        }
      }
    },
  },
}
