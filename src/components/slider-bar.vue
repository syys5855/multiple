<template>
    <div class="sliderbar">
        <div class="margin-hor-15">
            <div class="sliderbar-group" style="height:50px;">

            </div>
            <div class="sliderbar-group clearfix margin-ver-15">
                <div class="col-xs-4 text-center">
                    <div>
                        <span class="glyphicon glyphicon-star font-lg"></span>
                    </div>
                    <div class="font-sm">收藏</div>
                </div>
                <div class="col-xs-4 text-center">
                    <div>
                        <span class="glyphicon glyphicon-bell font-lg"></span>
                    </div>
                    <div class="font-sm">消息</div>
                </div>
                <div class="col-xs-4 text-center">
                    <div>
                        <span class="glyphicon glyphicon-cog font-lg"></span>
                    </div>
                    <div class="font-sm">设置</div>
                </div>
            </div>
            <load-more style="height:74vh;overflow:hidden;">
                <ul class="list-nostyle" slot="main">
                    <li v-for="theme in themes" :key='theme.id'>
                        <slider-bar-item :bar-item-text='theme.name' :title='theme.description' @tap="$router.push({name:'theme-detail',params:{id:theme.id}})"></slider-bar-item>
                    </li>
                </ul>
            </load-more>
            <div class="clearfix sliderbar-bottom-menu">
                <span class="pull-right" @click="updateAppStyle({bgColor:'#232a30'})" v-if="appInfo.bgColor==='#fff'">
                    <i class="fa fa-moon-o font-lg"></i>&nbsp;夜间
                </span>
                <span class="pull-right" @click="updateAppStyle({bgColor:'#fff'})" v-else>
                    <i class="fa fa-sun-o font-lg"></i>&nbsp;日间
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import SliderBarItem from "@components/slider-bar-item.vue";
import LoadMore from "@components/load-more.vue";
import { mapActions, mapState,mapMutations } from "vuex";
export default {
  components: { SliderBarItem, LoadMore },
  computed: {
    ...mapState({
      themes: state => state.news.themes,
      appInfo: state=>state.news.appInfo
    })
  },
  methods: {
    ...mapActions(["getThemes"]),
    ...mapMutations(['updateAppStyle'])
  },
  created() {
    this.getThemes();
  }
};
</script>

<style lang="scss" scoped>
$menuHeight:40px;
.sliderbar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 60%;
  height: 100vh;
  overflow: auto;
  background: #232a30;
  color: #94999d;
}
.sliderbar-bottom-menu{
    position: absolute;
    bottom: 0px;
    right: 15px;
    width: 100%;
    height: $menuHeight;
    line-height: $menuHeight;
    background-color: #232a30;
}
</style>
