<template>
  <header id="header">
    <MenuButton id="menu-button" size="30" stroke-width="2" />
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuButton from '@/components/MenuButton.vue'

@Component({
  components: {
    MenuButton
  }
})
export default class Modal extends Vue {
}
</script>

<style lang="sass" scoped>
#header
    position: relative
    z-index: 9999
    display: flex
    padding: 20px
#menu-button
    margin-left: auto
</style>
