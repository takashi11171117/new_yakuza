<template>
    <div class="vifnslb-container" :style="customStyle">  
      <slot>
        こんにちは 世界
      </slot>
    </div>
</template>
<script>
export default {
  name: 'SlideMenu',
  props: {
      scrollY: Number
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
}
</script>

<style scoped lang="sass">
.vifnslb-container
  position: relative;
  overflow: hidden;
  height: max-content;
  min-width: 200%;
  
.vifnslb-bar
  width: 50%;
</style>