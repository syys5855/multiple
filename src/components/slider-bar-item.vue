<template>
    <div class="row slider-bar-item" v-tap="{methods:emitTap}">
        <div class="pull-left">
            <span>{{barItemText}}</span>
        </div>
        <div class="pull-right">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'barItemText'
    ],
    methods:{
        emitTap(){
            this.$emit('tap');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';
.slider-bar {
    &-item {
        @extend .no-margin-hor;
        @extend .padding-hor-15;
        @extend .font-md;
        height: 50px;
        line-height: 50px;
        background-color: #232a30;
    }
}
</style>
