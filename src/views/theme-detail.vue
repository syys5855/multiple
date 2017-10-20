<template>
  <div class="no-margin-hor">
      <top-menu :background="detail.background">
        <div class="text-center font-lg">{{detail.name}}</div>
      </top-menu>
      <ul class="list-group">
        <li class="list-group-item only-bottom-border" v-for="article in detail.stories" :key="article.id">
            <article-sample :article="article" @tap="$router.push({name:'news-detail',params:{id:article.id}})"></article-sample>
        </li>
      </ul>
  </div>
</template>

<script>
import TopMenu from "@components/top-menu.vue";
import ArticleSample from "@components/article-sample.vue";
import { mapActions, mapState } from "vuex";
import _ from "lodash";
export default {
  components: { TopMenu, ArticleSample },
  methods: {
    ...mapActions(["getThemeDetail"])
  },
  computed: {
    ...mapState({
      detail: state => state.news.themeDetal
    })
  },
  created() {
    let id = this.$route.params.id;
    this.getThemeDetail({ id });
  }
};
</script>

<style lang="scss" scoped>

</style>
