<template>
  <div class="row top-menu-wraper">
    <div class="col-xs-2 text-left" @click="$router.go(-1)">
        <i class="fa fa-angle-left font-lg"></i>
    </div>
    <div class="col-xs-8">
        <slot></slot>
    </div>
    <div class="col-xs-2 text-right">
        <i class="fa fa-plus-circle font-lg"></i>
    </div>
    <div class="top-menu-bg" :style="bgStyle"></div>
  </div>
</template>

<script>
export default {
  props: ["background"],
  computed: {
    bgStyle() {
      return {
        "background-image": "url(" + _.get(this, "background", "") + ")"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 45px;
.top-menu-wraper {
  position: relative;
  height: $height;
  line-height: $height;
  color: #fff;
  overflow: hidden;
}
.top-menu-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color:#333; 
}
</style>
