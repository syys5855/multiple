<template>
    <div class="row article-sample" v-tap="{methods:emitTap}">
        <div class="col-xs-10 no-padding-hor" style="padding-right:1em;">
            {{article.title}}
        </div>
        <div class="col-xs-2 no-padding-hor">
            <div class="article-sample-img-con">
                <img :src="newsImgSrc" lazy="loaded" v-if="newsImgSrc"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["article"],
  data() {
    return {
      imgPrefix: "https://images.weserv.nl/?url="
    };
  },
  computed: {
    newsImgSrc() {
      return _.get(this.article, "images[0]", "").replace(/https/, "http");
    }
  },
  methods: {
    emitTap() {
      this.$emit("tap");
    }
  }
};
</script>

<style lang="scss" scoped>
.article-sample {
  overflow: hidden;
  &-img-con {
    width: 59px;
    height: 59px;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
