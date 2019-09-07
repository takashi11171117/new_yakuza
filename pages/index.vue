<template>
    <div class="menu box" @wheel="zoom" >
        <div class="aaaa">
            <SlideMenu :scrollY="scrollY">
                <SlideMenuList />
            </SlideMenu>
        </div>
    </div>
</template>

<script>
import {TweenMax, Expo, Elastic} from 'gsap'
import SlideMenu from '../components/SlideMenu';
import SlideMenuList from '../components/SlideMenuList';

export default {
    data() {
        return {
            scrollY: 0
        }
    }, 
    components: {
      SlideMenu,
      SlideMenuList
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
