<template>
    <div class="menu box" @wheel="zoom" >
        <div class="aaaa">
            <SlideMenu :scrollY="scrollY">
                <SlideMenuList :direction="direction">
                    <p style="font-size: 90px;">あああああああ</p>
                    <p style="font-size: 90px;">いいいいいいい</p>
                    <p style="font-size: 90px;">ううううううう</p>
                    <p style="font-size: 90px;">えええ</p>
                </SlideMenuList>
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
            scrollY: 0,
            direction: 0
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
            if (e.deltaY > 0) {
                this.direction = 1;
            } else {
                this.direction = 0;
            }
            this.scrollY += e.deltaY;
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
