<template>
    <div class="sbanner">
        <div class="sbanner-wrap" :style="wrapStyle">
            <div class="sbanner-wrap-item" :style="calcLeft(index)" v-for="(banner,index) in banners" :key="banner.id">
                <img :src="banner.image" @click="$emit('click',{banner})" />
                <span>
                    <h4 style="line-height:1.2;">{{banner.title}}</h4>
                </span>
            </div>
        </div>
        <div class="sbanner-indicators">
            <div class="sbanner-indicator" :class="{active:index===curIndex}" v-for="(banner,index) in banners" :key="index" @click="curIndex=index"></div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['banners'],
    data() {
        return {
            curIndex: 0
        }
    },
    computed: {
        wrapStyle() {
            return { transform: `translate3d(${-100 * this.curIndex}vw,0,0)` }
        }
    },
    methods: {
        calcLeft(index) {
            return {
                left: `${100 * index}vw`
            }
        }
    },
    created() {
        if (this.banners.length) {
            this.timer = setInterval(() => {
                this.curIndex = this.curIndex + 1 >= this.banners.length ? 0 : this.curIndex + 1;
            }, 5000);
        }
    },
    destroyed() {
        window.clearInterval(this.timer);
    }
}
</script>

<style lang='scss' scoped>
$indicatorSize:8px;

.sbanner {
    position: relative; // 容器
    overflow: hidden;
    &-wrap {
        width: 100%;
        height: 100%;
        transition: transform 300ms ease-in-out;
    }
    &-wrap-item {
        position: absolute; // banner图片
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        &>img {
            width: 100%;
        } // banner文字
        &>span {
            position: absolute;
            left: 0;
            bottom: 20px;
            color: #ffffff;
            margin: 0 15px;
        }

        &.active {
            transform: translate3d(0, 0, 0);
        }
    } //指示器-容器
    &-indicators {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        text-align: center;
    }
    &-indicator {
        width: $indicatorSize;
        height: $indicatorSize;
        border-radius: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        display: inline-block;
        margin: 0 2px;
        &.active {
            background-color: rgba(255, 255, 255, 0.7);
        }
    }
}
</style>
