<template>
    <ul class="list-horizontal">
        <li>
            <i class="fa fa-chevron-left" @click="$router.go(-1)"></i>
        </li>
        <li>
            <i class="fa fa-chevron-down" @click="getNextArticle"></i>
        </li>
        <li>
            <i class="fa fa-thumbs-up"></i>
        </li>
        <li>
            <i class="fa fa-share-alt" @click="$emit('share')"></i>
        </li>
        <li>
            <i class="fa fa-comment" aria-hidden="true"></i>
        </li>
    </ul>
         

</template>

<script>
import _ from "lodash";
import { mapActions } from "vuex";

export default {
  props: ["article"],
  methods: {
    ...mapActions(["getNewsDetail"]),
    getNextArticle() {
      let nextFun = _.get(this.$store, "getters.nextArticle");
      let nextArticle = nextFun(this.article.id);
      // nextArticle&&this.getNewsDetail({newsId:nextArticle.id});
      nextArticle &&
        this.$router.push({
          name: "news-detail",
          params: { id: nextArticle.id }
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  }
};
</script>

<style lang="scss" scoped>
.list-horizontal {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  border-top: 1px solid #ccc;
  list-style: none;
  margin: 0;
  padding: 0;
  background: #fff;
  color: #999;

  & > li {
    cursor: pointer;
  }
}
</style>
