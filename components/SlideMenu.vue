<template>
    <div class="vifnslb-container" :style="customStyle">
        <div class="vifnslb-bar">aaaa</div>
        <div class="vifnslb-bar">bbb</div>
        <div class="vifnslb-bar">ccc</div>
        <div class="vifnslb-bar">dd</div>
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
            console.log(this.customStyle);
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