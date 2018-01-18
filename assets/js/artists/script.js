import mock from './mock.json'

export default {
  name: 'artists',

  data() {
    return {
      artists: mock,
    }
  },

  methods: {
    offset(index) {
      return index !== 0 ? 1 : 0
    },
  },
}
