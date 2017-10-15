<template>
    <div class="share">
        <div class="share-title text-center font-lg">
            分享的标题
        </div>
        <div class="share-content">
            <div class="menu-wrap">
                <div class="menu-item">
                    <div class="menu-item-img">
                        <i class="fa fa-weixin font-xlg" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">微信好友</div>
                </div>
               <div class="menu-item">
                    <div class="menu-item-img">
                        <i class="fa fa-weixin font-xlg" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">微信好友</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-img">
                        <i class="fa fa-qq font-xlg" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">QQ</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-img">
                        <i class="fa fa-weibo font-xlg" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">新浪微博</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-img">
                        <i class="fa fa-cloud font-xlg" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">有道云</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-img">
                        <i class="fa fa-clipboard font-xlg" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">复制链接</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-img">
                        <i class="fa fa-sticky-note font-xlg" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">印象笔记</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-img">
                        <i class="fa fa-tencent-weibo font-xlg" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">腾讯微博</div>
                </div>


            </div>
            <div class="share-buttons">
                <button class="btn btn-block">收藏</button>
                <button class="btn btn-block">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$menuItemSize:50px;

.share {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 380px;
    background-color: #e9e9e9;

    &-title {
        padding: 15px 0px;
    }
    &-content {
        width: 320px;
        margin: 0 auto;
    }

    &-buttons {
        &>button {
            height: 44px;
            color: #949494;
            background-color: #fff;
            margin-top: 15px;
        }
    }
}

.menu {
    &-wrap {
        display: flex;
        align-items: center;
        height: 190px;
        flex-flow: row wrap;
        justify-content: space-around;
    }

    &-item {
        margin: 0 12px;
        &-img {
            display: flex;
            width: $menuItemSize;
            justify-content: center;
            align-items: center;
            height: $menuItemSize;
            border-radius: 50%;
            border: 1px solid #ccc;
        }
    }
}
</style>
