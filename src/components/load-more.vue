<template>
    <div class="load-more" v-load-more :style="isOverHidden">
        <div>
            <slot class="load-more-main" name="main"></slot>
            <div class="load-more-tips text-center">
                <span v-if="loadStatus===0">
                    <span class="fa fa-arrow-up" aria-hidden="true"></span>
                    <span>上拉加载更多</span>
                </span>
                <span v-else-if="loadStatus===1">
                    <span class="fa fa-arrow-down" aria-hidden="true"></span>
                    <span>松开加载</span>
                </span>
                <span v-else>
                    <span class="fa fa-spinner" aria-hidden="true"></span>
                    <span>加载中</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import IScroll from "iscroll";
function preventDefault(e) {
  e.preventDefault();
}

export default {
  data() {
    return {
      scroller: null,
      loadStatus: 0
    };
  },
  props: ["onLoadMore", "loadMoreDisable"],
  computed: {
    isOverHidden() {
      return { overflow: this.loadMoreDisable ? "hidden" : "" };
    }
  },
  directives: {
    loadMore: {
      bind(el, binding, vnode) {

        el.addEventListener("touchmove", preventDefault);
        let scroller = new IScroll(el, {
          probeType: 1,
          mouseWheel: true,
          click: true
        });
        let context = vnode.context,
          $data = context.$data;
        scroller.on("scroll", function() {
          let { y, maxScrollY } = this;
          if (!$data.loadStatus && Math.abs(y) - Math.abs(maxScrollY) > 50) {
            $data.loadStatus = 1;
            this.maxScrollY = -Math.abs(this.maxScrollY) - 34;
          }
        });
        scroller.on("scrollEnd", async function() {
          if ($data.loadStatus === 1) {
            $data.loadStatus = 2;
            (await typeof context.onLoadMore) === "function" &&
              context.onLoadMore();
            $data.loadStatus = 0;
          }
        });
        vnode.scroller = scroller;
        vnode.el = el;
      },
      componentUpdated(el, binding, vnode, oldVnode) {
        let $data = vnode.context.$data;
        vnode.scroller = oldVnode.scroller;
        vnode.el = oldVnode.el;
        if ($data.loadStatus !== 0 || !vnode.scroller) return;
        vnode.scroller.refresh();
      },
      unbind(el, binding, vnode, oldVnode) {
        if (!vnode.scroller) return;
        vnode.scroller = oldVnode.scroller;
        vnode.scroller.destroy();
        vnode.scroller = null;
        el.removeEventListener("touchmove", preventDefault);
      }
    }
  },
  watch: {
    loadMoreDisable(val) {
      let scroller = this._self._vnode.scroller,
        el = this._self._vnode.el;

      if (val) {
        el.removeEventListener("touchmove", preventDefault);
        scroller.scrollTo(0, 0);
        scroller.disable();
      } else {
        el.addEventListener("touchmove", preventDefault);
        scroller.enabled = true;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
$loadTipsHeight: 34px;
.load-more {
  position: relative;
  left: 0;
  top: 0;
  height: 100vh;
  margin-left: -15px;
  margin-right: -15px;

  &-main {
  }

  &-tips {
    position: absolute;
    left: 0;
    bottom: -$loadTipsHeight;
    width: 100%;
    height: $loadTipsHeight;
    line-height: $loadTipsHeight;
    text-align: center;
  }
}
</style>
