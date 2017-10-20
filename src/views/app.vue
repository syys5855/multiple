<template>
    <div class="container">
        <!-- <app-nav></app-nav> -->
        <router-view></router-view>
    </div>
</template>

<script>
import AppNav from "@components/app-nav.vue";
export default {
  components: { AppNav },
  watch: {
    ["$store.state.news.appInfo.bgColor"](newVal, oldVal) {
        console.log(newVal,oldVal)
      if (newVal === oldVal) return;
      let bgColor = newVal;
      let appStyle = document.querySelector("#appStyle");
      if (appStyle) {
        appStyle.innerHTML = createStyle();
      } else {
        appStyle = document.createElement("style");
        appStyle.setAttribute("type", "text/css");
        appStyle.setAttribute("id", "appStyle");
        appStyle.innerHTML = createStyle();
        document.head.appendChild(appStyle);
      }
      function createStyle() {
        return `
                .list-group-item,.news-detail-main *,.bottom-menu{
                    background-color:${bgColor}!important;
                }
                .load-more-tips,.list-group-item,.top-menu-wraper,.news-detail-main *,.bottom-menu{
                    color:${bgColor === "#232a30"
                    ? "#94999d"
                    : "#333"}!important;
                }
                .container{
                    background-color:${bgColor};
                }
                .only-bottom-border{
                    border-color:${bgColor};
                    opacity:0.7;
                }
            `;
      }
    }
  }
};
</script>

<style>

</style>
