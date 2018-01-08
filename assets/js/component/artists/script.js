import axios from 'axios'

const newArtist = {
  title: '',
  origin: '',
  image: {
    url: '',
    title: '',
  },
}

const clone = obj => JSON.parse(JSON.stringify(obj))

export default {
  name: 'artists',

  data() {
    return {
      modalOpen: false,
      newArtist: clone(newArtist),
      artists: [],
    }
  },

  mounted() {
    axios
      .get('/api/artist')
      .then((response) => {
        this.artists = response.data
      })
  },

  methods: {
    openModal() {
      this.modalOpen = true
    },

    closeModal() {
      this.modalOpen = false
    },

    remove(id) {
      axios
        .delete(`/api/artist/${id}`)
        .then(() => {
          const index = this.artists.findIndex(a => a.id = id)

          this.artists.splice(index, 1)
        })
    },

    submit() {
      axios
        .post('/api/artist', { artist: this.newArtist })
        .then((response) => {
          this.artists.push(response.data)
          this.newArtist = clone(newArtist)
          this.closeModal()
        })
    },
  },
}
