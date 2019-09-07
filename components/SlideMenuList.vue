<template>
    <div>
        <div @wheel="scroll" v-for="(item, index) in list" :key="index">
            <intersect @enter="scrollBefore"><p></p></intersect>
            <p>{{contents[item]}}</p>
            <intersect @enter="scrollAfter"><p></p></intersect>
        </div>
    </div>
</template>
<script>
import Intersect from 'vue-intersect'

export default {
  name: 'SlideMenuList',
  data () {
      return {
          contents: ['aaaa', 'bbbb', 'ccccc', 'ddddd'],
          list: [0],
          scrollDirection: 0,
      }
  },
  components: {
    Intersect
  },
  methods: {
      scrollBefore () {
          if (this.scrollDirection === 0) {
            let first = this.list[0];
            this.list.unshift((first + 3) % 4);
          }
      },
      scrollAfter () {
          if (this.scrollDirection === 1) {
            let last = this.list.slice(-1)[0];
            this.list.push((last + 1) % 4);
          }
      },
      scroll (e) {
          if (e.deltaY > 0) {
            this.scrollDirection = 1;
          } else {
            this.scrollDirection = 0;
          }
      }
  }
}
</script>