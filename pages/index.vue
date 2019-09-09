<template>
    <div class="menu box" @wheel="zoom" >
        <div class="aaaa">
            <SlideMenu :scrollY="scrollY" :direction="direction" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {TweenMax, Expo, Elastic} from 'gsap'
import SlideMenu from '../components/SlideMenu'
import _ from 'lodash'

export default Vue.extend({
    data() {
        return {
            scrollY: 0,
            direction: 0
        }
    }, 
    components: {
      SlideMenu,
    },
    mounted () {
    },
    methods: {
        zoom (e) {
                if (e.deltaY > 0) {
                    this.direction = 1;
                } else {
                    this.direction = 0;
                }

                let delta = 0;

                if (e.deltaY > 60) {
                    delta = 60;
                } else if (e.deltaY < -60) {
                    delta = -60;
                } else {
                    delta = e.deltaY;
                }

                this.scrollY += delta * .9;
        }
    }
})
</script>

<style lang="sass" scoped>
    .menu-item
        font-size: 100px

    .box
        width: 100vw
        height: 100vh
        position: fixed
        top: 0
</style>
