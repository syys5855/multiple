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
        <bottom-menu :article='detail'></bottom-menu>
        <link rel="stylesheet" :href="css" v-for="(css,index) in detail.css" :key="index">
    </div>
</template>

<script>
import Banner from '@components/banner.vue';
import BottomMenu from '@components/bottom-menu.vue';
import { mapState, mapActions, mapGetters } from 'vuex';
import _ from 'lodash';
export default {
    components: {
        Banner, BottomMenu
    },
    computed: {
        ...mapState({
            detail: state => state.news.articleDetail
        }),
        topImage() {
            console.log(this.$store);
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
            ['getNewsDetail']
        )
    },
    created() {
        let newsId = this.$route.params.id;
        this.getNewsDetail({ newsId });
        console.log('component--->', this.detail);
    }
}
</script>

<style lang="scss" scoped>
.news-detail-main {
    margin-left: -15px;
    margin-right: -15px;
    padding-bottom: 50px;
    margin-top: -200px;
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
            color:#ccc;
        }
        &>h1{
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
