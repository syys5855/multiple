<template>
    <div class="news-detail">
        <div class="news-detail-head">
            <div class="news-detail-head-img-con">
                <img :src="topImage" lazy="loaded" />
                <h1 class="question-title">{{detail.title}}</h1>
                <span class="font-sm">{{topImageSource}}</span>
            </div>
        </div>
        <div class="news-detail-main" v-html="detail.body">
        </div>
        <bottom-menu :article='detail' @share="openShare({openShare:true})"></bottom-menu>
        <div v-if="isOpenShare">
            <share></share>
            <masker @click="openShare({openShare:false})"></masker>
        </div>
        <link rel="stylesheet" :href="css" v-for="(css,index) in detail.css" :key="index">
    </div>
</template>

<script>
import Banner from '@components/banner.vue';
import BottomMenu from '@components/bottom-menu.vue';
import Masker from '@components/masker.vue';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import _ from 'lodash';

let Share = resolve => require(['@components/share.vue'], resolve);

export default {
    components: {
        Banner, BottomMenu, Share, Masker
    },
    computed: {
        ...mapState({
            detail: state => state.news.articleDetail,
            isOpenShare: state => state.news.openShare
        }),
        topImage() {
            let changeFun = this.$store.getters.imgUrl;
            let image = _.get(this.$store, 'state.news.articleDetail.image', '');
            return image ? changeFun(image) : image;
        },
        topImageSource() {
            return '图片:' + _.get(this.$store, 'state.news.articleDetail.image_source', '');
        }
    },
    methods: {
        ...mapActions(
            [
                'getNewsDetail',

            ]
        ),
        ...mapMutations([
            'openShare',
            'resetNewsDetail'
        ])

    },
    created() {
        let newsId = this.$route.params.id;
        this.getNewsDetail({ newsId });
        console.log('component--->', this.detail);
    },
    destroyed() {
         this.resetNewsDetail();
    },
    watch: {
        "$route"() {
            let newsId = this.$route.params.id;
            this.getNewsDetail({ newsId });
        }
    }
    
}
</script>

<style lang="scss" scoped>
.news-detail-main {
    margin-left: -15px;
    margin-right: -15px;
    padding-bottom: 50px;
    margin-top: -200px;
    -webkit-overflow-scrolling : touch;
}

.news-detail-head {
    &-img-con {
        height: 200px;
        position: relative;
        overflow: hidden;
        margin-left: -15px;
        margin-right: -15px;
        &>img {
            width: 100%;
            position: absolute;
            bottom: -75px;
            left: 0;
        }

        &>span {
            position: absolute;
            bottom: 10px;
            right: 10px;
            color: #ccc;
        }
        &>h1 {
            position: absolute;
            left: 0px;
            top: 50%;
            width: 100%;
            color: #fff;
            text-align: center;
        }
    }
}
</style>
