import Vue from "vue";

Vue.mixin({
  data: () => {
    return {
    }
  },
  methods: {
    $console: (...args) => {
      console.dir(args);
    },
    $isset: (data) => {
      return !(data === "" || data === null || data === undefined);
    }
  },
});