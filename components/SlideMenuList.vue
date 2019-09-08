<script>
export default {
  name: 'SlideMenuList',
  props: {
      direction : Number
  },
  data () {
    return {
        customStyle: {
            marginTop: 0,
        }
    }
  },
  components: {
  },
  mounted () {
   this.matchHeight()
  },
  methods: {
    matchHeight () {
      let height = this.$refs.container.clientHeight;
      console.log(-height/2);
      this.customStyle = {
            marginTop: -height/2 + 'px',
      }
    }
  },
  render (createElement) {
    const bar = createElement('div', { class: 'bar' }, this.$slots.default)
    return createElement('div', { class: ['container'], style: this.customStyle, ref: ['container'] }, [bar, bar, bar, bar, bar])
  }
}
</script>
<style lang="sass" scoped>
.container
    position: absolute;
    top: 50%;
</style>