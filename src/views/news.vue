<template>
    <section>
        <load-more-com :on-load-more='onLoadMore' :load-more-disable='news.openSlider'>
            <div slot="main" class="news">
                <div class="news-wrap">
                    <banner style="height:240px;" :banners="news.banners" @click="goToDetail"></banner>
                    <ul class="list-group news-list-group">
                        <li class="list-group-item only-bottom-border" v-for='(article,index) in news.articles' :key="index">
                            <router-link :to="{name:'news-detail',params:{id:article.id}}" tag="span">
                                <article-sample :article='article'></article-sample>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- 侧边栏 -->
                <section>
                    <!-- <div class="slider-closed" v-tap="{methods:openSlider,openSlider:true}"> -->
                    <div class="slider-closed" @click="openSlider({openSlider:true})">
                        <span class="glyphicon glyphicon-menu-hamburger font-xlg"></span>
                    </div>
                    <div v-if="news.openSlider">
                        <slider-bar></slider-bar>
                        <masker @click="openSlider({openSlider:false})"></masker>
                    </div>
                </section>
            </div>
        </load-more-com>
        <welcome v-if="!news.hideWelcome"></welcome>
    </section>
</template>

<script>
import Banner from '@components/banner.vue';
import ArticleSample from '@components/article-sample.vue';
import Masker from '@components/masker.vue';
import Welcome from "@components/welcome.vue";
import LoadMoreCom from '@components/load-more.vue';
import LoadMore from '@directives/load-more';
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
// 异步加载 
let SliderBar = resolve => require(['@components/slider-bar.vue'], resolve);
export default {
    components: { Banner, ArticleSample, Masker, SliderBar, Welcome, LoadMoreCom },
    directives: {
        LoadMore
    },
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
            'getNewsLatest',
            'getNewsBefore'
        ]),
        goToDetail({ banner }) {
            this.$router.push({ name: 'news-detail', params: { id: banner.id } });
        },
        onLoadMore() {
            this.getNewsBefore({ now: this.news.articleDate });
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
}

.slider-closed {
    position: absolute;
    left: 10px;
    top: 5px;
    z-index: 2;
    color: #fff;
}

.news-list-group {
    margin-left: 15px;
    margin-right: 15px;
}

.load-more-con {
    position: absolute;
    left: 0;
    height: 34px;
    line-height: 34px;
    bottom: -34px;
    width: 100%;
}
</style>
