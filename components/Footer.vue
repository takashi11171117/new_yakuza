<template>
  <footer>
    <div class="left">
      About Us
    </div>
    <div class="right">
      @copyright New Yakuza
    </div>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Footer extends Vue {
}
</script>

<style lang="sass" scoped>
footer
    position: fixed
    bottom: 0
    font-size: 1.5rem
    padding: 20px
    width: 100%
.left
    float: left
.right
    float: right
</style>
