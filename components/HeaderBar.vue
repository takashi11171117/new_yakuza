<template>
  <div id="header-bar">
    <img src="../assets/logo.svg" alt="ニューヤクザ">
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class HeaderBar extends Vue {
}
</script>

<style lang="sass" scoped>
#header-bar
    position: fixed
    z-index: 8000
    display: flex
    padding: 10px
    width: 100%
    height: 62px
    align-item: center
    padding-left: 15px
img
    fill: white
    height: 42px
#menu-button
    margin-left: auto
</style>
