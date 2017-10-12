<template>
    <div class="news-detail">
        <div class="news-detail-head">
            <banner style="height:160px" :banners="banners"></banner>
        </div>
        <div class="news-detail-main">
            <h1>news detail main</h1>
        </div>
    </div>
</template>

<script>
import Banner from '@components/banner.vue';
import { mapState } from 'vuex';
export default {
    components: {
        Banner
    },
    data() {
        return {
            banners: [{img:require('../static/imgs/detail-1.jpg'),text:'你这个傻逼啊哈哈哈哈'}]
        }
    },
    computed: {
        ...mapState({
            news: state => state.news
        })
    }
}
</script>

<style>

</style>
