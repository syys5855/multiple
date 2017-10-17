<template>
    <div class="sliderbar">
        <div class="margin-hor-15">
            <div class="sliderbar-group" style="height:50px;">

            </div>
            <div class="sliderbar-group clearfix margin-ver-15">
                <div class="col-xs-4 text-center">
                    <div>
                        <span class="glyphicon glyphicon-star font-lg"></span>
                    </div>
                    <div class="font-sm">收藏</div>
                </div>
                <div class="col-xs-4 text-center">
                    <div>
                        <span class="glyphicon glyphicon-bell font-lg"></span>
                    </div>
                    <div class="font-sm">消息</div>
                </div>
                <div class="col-xs-4 text-center">
                    <div>
                        <span class="glyphicon glyphicon-cog font-lg"></span>
                    </div>
                    <div class="font-sm">设置</div>
                </div>
            </div>
            <load-more style="height:500px;overflow:hidden;" :on-load-more="test">
                <ul class="list-nostyle" slot="main">
                    <li v-for="theme in themes" :key='theme.id'>
                        <slider-bar-item :bar-item-text='theme.name' :title='theme.description'></slider-bar-item>
                    </li>
                </ul>
            </load-more>
        </div>
    </div>
</template>

<script>
import SliderBarItem from '@components/slider-bar-item.vue';
import LoadMore from '@components/load-more.vue';
import { mapActions, mapState } from 'vuex';
export default {
    components: { SliderBarItem, LoadMore },
    computed: {
        ...mapState({
            themes: state => state.news.themes
        })
    },
    methods: {
        ...mapActions([
            'getThemes'
        ]),
        test() {
            return new Promise((res, rej) => {
                setTimeout(function() {
                    console.log(123);
                    res();
                }, 10000);
            })
        }
    },
    created() {
        this.getThemes();
    }
}
</script>

<style lang="scss" scoped>
.sliderbar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 60vw;
    height: 100vh;
    overflow: auto;
    background: #232a30;
    color: #94999d;
}
</style>
