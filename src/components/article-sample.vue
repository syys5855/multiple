<template>
    <div class="row article-sample">
        <div class="col-xs-10 no-padding-hor" style="padding-right:1em;">
            {{article.title}}
        </div>
        <div class="col-xs-2 no-padding-hor">
            <div class="article-sample-img-con">
                <img :src="newsImgSrc" lazy="loaded"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'article'
    ],
    data() {
        return {
            imgPrefix: 'https://images.weserv.nl/?url='
        }
    },
    computed: {
        newsImgSrc() {
            return  this.article.images[0].replace(/https/,'http')
        }
    }
}
</script>

<style lang="scss" scoped>
.article-sample {
    overflow: hidden;
    &-img-con {
        &>img {
            width: 59px;
            height: 59px;
        }
    }
}
</style>
