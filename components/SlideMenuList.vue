<script>
export default {
  name: 'SlideMenuList',
  props: {
      direction : Number,
      scrollY: Number
  },
  data () {
    return {
        customStyle: {
            marginTop: 0,
        },
        scrollFlg: 0,
        heightBar: 0,
        mt: 0,
    }
  },
  mounted () {
   this.matchHeight()
  },
  methods: {
    matchHeight () {
      const height = this.$refs.container.clientHeight;
      this.heightBar = this.$refs.bar.clientHeight;
      this.mt = -height/2;
      this.customStyle = {
        marginTop: this.mt + 'px',
      }
    }
  },
  render (createElement) {
    const bar = createElement('div', { class: 'bar', ref: 'bar' }, this.$slots.default)
    return createElement('div', { class: ['container'], style: this.customStyle, ref: ['container'] }, [bar, bar, bar, bar, bar])
  },
  watch: {
        scrollY: function(val) {
            const scrollAmount = Math.abs(parseInt(val));
            const perAmount = scrollAmount%this.heightBar;
            const threshold = 40;
            const minLimit = threshold;
            const maxLimit = this.heightBar - threshold;
            if (perAmount < minLimit || perAmount > maxLimit) {
                if (this.scrollFlg === 0) {
                    if (this.direction === 0) {
                        this.mt += this.heightBar;
                        this.customStyle = {
                            marginTop: this.mt + 'px',
                        }
                    } else {
                        this.mt -= this.heightBar;
                        this.customStyle = {
                            marginTop: this.mt + 'px',
                        }
                    }
                }
                this.scrollFlg = 1;
            } else if (perAmount >= minLimit || perAmount <= maxLimit) {
                this.scrollFlg = 0;
            }
        }
  }
}
</script>
<style lang="sass" scoped>
.container
    position: absolute;
    top: 50%;
</style>