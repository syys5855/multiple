<template>
    <div class="row article-sample">
        <div class="col-xs-10 no-padding-hor">
            {{article.title}}
        </div>
        <div class="col-xs-2 no-padding-hor">
            <div class="article-sample-img-con">
                <img src="../static/imgs/article-sample.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'article'
    ]
}
</script>

<style lang="scss" scoped>
.article-sample {
    overflow: hidden;
    &-img-con {
        &>img {
            width: 100%;
        }
    }
}
</style>
