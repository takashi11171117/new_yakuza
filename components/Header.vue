<template>
  <header id="header">
    <MenuButton />
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
</style>
