export default {
  name: 'add-artist',

  props: {
    artists: {
      type: Array,
    },
  },

  data() {
    return {
      dialogVisible: false,
      error: {
        title: false,
      },
      newArtist: {
        title: '',
        origin: '',
        imageUrl: '',
        channels: [],
      },
    }
  },

  methods: {
    submit() {
      if (!this.newArtist.title) {
        this.error.title = true

        return
      }

      this.artists.push(this.newArtist)
      this.dialogVisible = false
      this.newArtist = {
        title: '',
        origin: '',
        imageUrl: '',
        channels: [],
      }
    },

    addChannel(type) {
      this.newArtist.channels.push({ type, channelId: '' })
    },

    channelPlaceholder(type) {
      return `Channel id of ${type.charAt(0).toUpperCase() + type.slice(1)}`
    },

    channelIcon(type) {
      return ` fa-${type}`
    },
  },
}
