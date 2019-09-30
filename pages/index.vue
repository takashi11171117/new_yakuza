<template>
  <div class="box">
    <Header />
    <div class="">
      <Modal class="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Modal from '@/components/Modal.vue'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Modal,
    Header
  }
})
export default class Index extends Vue {
}
</script>

<style lang="sass" scoped>
    .box
        width: 100vw
        height: 100vh
        position: fixed
        top: 0
</style>
