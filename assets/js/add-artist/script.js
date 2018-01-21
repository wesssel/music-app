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
      newArtist: {
        title: '',
        origin: '',
        imageUrl: '',
      },
    }
  },

  methods: {
    submit() {
      this.artists.push(this.newArtist)
      this.dialogVisible = false
      this.newArtist = {
        title: '',
        origin: '',
        imageUrl: '',
      }
    },
  },
}
