import Vue from 'vue';
import ScrollMagic from "scrollmagic";

Vue.mixin({
  computed: {
    $smController() { return new ScrollMagic.Controller() },
    $sm() { return ScrollMagic }
  }
})