<template>
    <div class="news">
        <div class="slider-closed" @click="openSlider({openSlider:true})">
            <span class="glyphicon glyphicon-menu-hamburger font-xlg"></span>
        </div>
        <banner style="height:240px;" :banners="news.banners" @click="goToDetail"></banner>
        <ul class="list-group news-list-group">
            <li class="list-group-item only-bottom-border" v-for='(article,index) in news.articles' :key="index">
                <router-link :to="{name:'news-detail',params:{id:article.id}}" tag="span">
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
import { mapState, mapMutations, mapActions } from 'vuex';

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
        ]),
        ...mapActions([
            'getNewsLatest'
        ]),
        goToDetail({ banner }) {
            this.$router.push({ name: 'news-detail', params: { id: banner.id } });
        }
    },
    created() {
        this.getNewsLatest();
    }
}
</script>

<style scoped>
.news {
    position: relative;
    margin-left:-15px;
    margin-right: -15px;
}

.slider-closed {
    position: absolute;
    left: 10px;
    top: 5px;
    z-index: 2;
    color: #fff;
}
.news-list-group{
    margin-left:15px;
    margin-right:15px;
}
</style>
