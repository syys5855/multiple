<template>
    <div class="news">
        <div class="slider-closed" @click="openSlider({openSlider:true})">
            <span class="glyphicon glyphicon-menu-hamburger font-xlg"></span>
        </div>
        <banner style="height:240px;" :banners="news.banners"></banner>
        <ul class="list-group">
            <li class="list-group-item only-bottom-border" v-for='(article,index) in news.articles' :key="index">
                <router-link :to="{name:'news-detail',params:{id:123}}" tag="span">
                    <article-sample :article='article'></article-sample>
                </router-link>
            </li>
        </ul>
        <div v-if="news.openSlider">
            <slider-bar></slider-bar>
            <masker @click="openSlider({openSlider:false})"></masker>
        </div>
    </div>
</template>

<script>
import Banner from '@components/banner.vue';
import ArticleSample from '@components/article-sample.vue';
import Masker from '@components/masker.vue';
import { mapState, mapMutations } from 'vuex';

// 异步加载 
let SliderBar = resolve => require(['@components/slider-bar.vue'], resolve);

export default {
    components: { Banner, ArticleSample, SliderBar, Masker },
    computed: {
        ...mapState([
            'news',
        ])
    },
    methods: {
        ...mapMutations([
            'openSlider'
        ])
    }
}
</script>

<style scoped>
.news {
    position: relative;
}

.slider-closed {
    position: absolute;
    left: 10px;
    top: 5px;
    z-index: 2;
    color: #fff;
}
</style>
