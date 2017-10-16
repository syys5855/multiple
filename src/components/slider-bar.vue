<template>
  <div class="sliderbar" >
      <div class="sliderbar-group">
          <!-- <div class="col-xs-3">buzhidao</div>
          <div class="col-xs-9">syys</div> -->
      </div>
      <div class="sliderbar-group clearfix">
          <div class="col-xs-4 text-center">
              <div><span class="glyphicon glyphicon-star font-lg"></span></div>
              <div class="font-sm">收藏</div>
          </div>
          <div class="col-xs-4 text-center">
              <div><span class="glyphicon glyphicon-bell font-lg"></span></div>
              <div class="font-sm">消息</div>
          </div>
          <div class="col-xs-4 text-center">
              <div><span class="glyphicon glyphicon-cog font-lg"></span></div>
              <div class="font-sm">设置</div>
          </div>
      </div>
      <div style="height:300px;background-color:red">
          <div style="height:1000px;background-color:#de1"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:'slider-bar'
}
</script>

<style lang="scss" scoped>
    .sliderbar{
        position: fixed;
        left: 0;
        top:0;
        z-index: 10;
        width: 60%;
        height: 100vh;
        overflow: auto;
        background: #232a30;
        color:#94999d;

    }
</style>
