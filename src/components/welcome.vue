<template>
    <div class="welcome">
        <img src="../static/imgs/welcome.jpg">
        <div class="welcome-title">
            <h1 class="text-center">syys</h1>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.welcome {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;

    &>img{
        width: 100%;
    }
    &-title{
        position: absolute;
        left: 0;
        bottom:0px;
        width: 100%;
        height: 100px;
        background-color: #000;
        color: #c3c0c0;
    }
}
</style>
