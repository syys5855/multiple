<template>
    <div>
        <div class="list-wrap" v-load-more>
            <div class="news">
                <div class="slider-closed" @click="openSlider({openSlider:true})">
                    <span class="glyphicon glyphicon-menu-hamburger font-xlg"></span>
                </div>
                <div class="news-wrap">
                    <banner style="height:240px;" :banners="news.banners" @click="goToDetail"></banner>
                    <ul class="list-group news-list-group">
                        <li class="list-group-item only-bottom-border" v-for='(article,index) in news.articles' :key="index">
                            <router-link :to="{name:'news-detail',params:{id:article.id}}" tag="span">
                                <article-sample :article='article'></article-sample>
                            </router-link>
                        </li>
                    </ul>
                    <div class="load-more-con">
                        <button class="btn btn-block" @click="getNewsBefore({now:news.articleDate})">加载更多</button>
                    </div>
                </div>
                <div v-if="news.openSlider">
                    <slider-bar></slider-bar>
                    <masker @click="openSlider({openSlider:false})"></masker>
                </div>
            </div>
        </div>
        <welcome v-show="!news.hideWelcome"></welcome>
    </div>
</template>

<script>
import Banner from '@components/banner.vue';
import ArticleSample from '@components/article-sample.vue';
import Masker from '@components/masker.vue';
import Welcome from "@components/welcome.vue";
import LoadMore from '@directives/load-more';
import { mapState, mapMutations, mapActions } from 'vuex';

// 异步加载 
let SliderBar = resolve => require(['@components/slider-bar.vue'], resolve);

function createList(len) {
    let list = [];
    while (--len >= 0) {
        list.push(len);
    }
    return list;
}

export default {
    data() {
        return {
            items: createList(20)
        }
    },
    components: { Banner, ArticleSample, SliderBar, Masker, Welcome },
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
.list-wrap {
    position: relative;
    height: 100vh;
    overflow: hidden;
    margin-left: -15px;
    margin-right: -15px;
}

.news {
    position: relative;
    /* margin-left: -15px;
    margin-right: -15px; */
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
    bottom: -34px;
    width: 100%;
}
</style>
