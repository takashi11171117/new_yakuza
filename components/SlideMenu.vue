<template>
    <div :style="customStyle">  
      <SlideMenuList :direction="direction" :scrollY="scrollY">
        <p style="font-size: 90px;">あああああああ</p>
        <p style="font-size: 90px;">いいいいいいい</p>
        <p style="font-size: 90px;">ううううううう</p>
        <p style="font-size: 90px;">えええ</p>
      </SlideMenuList>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import SlideMenuList from '../components/SlideMenuList'

export default Vue.extend({
  name: 'SlideMenu',
  props: {
      scrollY: Number,
      direction: Number
  },
  components: {
    SlideMenuList
  },
  data() {
    return {
        customStyle: {
            transform: `translateY(${this.scrollY}px)`
        }
    }
  },
  watch: {
        scrollY: function(val) {
            this.customStyle = {
                transform: `translateY(${val}px)`
            }
        }
  }
})
</script>

<style scoped lang="sass">
</style>