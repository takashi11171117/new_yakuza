import Vue from 'vue'

Vue.mixin({
  data: () => {
    return {
    }
  },
  methods: {
    $console: (...args) => {
      // eslint-disable-next-line no-console
      console.dir(args)
    },
    $isset: (data) => {
      return !(data === '' || data === null || data === undefined)
    }
  }
})
