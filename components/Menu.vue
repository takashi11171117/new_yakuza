<template>
  <div id="menu">
    <MenuButton id="menu-button" size="20" stroke-width="2" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuButton from '@/components/MenuButton.vue'

@Component({
  components: {
    MenuButton
  }
})
export default class Menu extends Vue {
}
</script>

<style lang="sass" scoped>
#menu
    position: fixed
    z-index: 9999
    display: flex
    padding: 20px
    width: 100%
#menu-button
    margin-left: auto
</style>
