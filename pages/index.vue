<template>
    <div class="menu box" @wheel="zoom" >
        <div class="aaaa">
            <SlideMenu :scrollY="scrollY">
                <div class="menu-item">Schedule</div>
                <div class="menu-item">Contact</div>
                <div class="menu-item">Movie</div>
                <div class="menu-item">Sound</div>
            </SlideMenu>
        </div>
    </div>
</template>

<script>
import {TweenMax, Expo, Elastic} from 'gsap'
import SlideMenu from '../components/SlideMenu';

export default {
    data() {
        return {
            scrollY: 0
        }
    }, 
    components: {
      SlideMenu
    },
    mounted () {
    },
    methods: {
        zoom (e) {
            this.scrollY += e.deltaY
        }
    }
}
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
