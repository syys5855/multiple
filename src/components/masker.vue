<template>
    <div class="mask" v-tap="{methods:close}">
    </div>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped>
.mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.3;
    z-index: 2;
}
</style>
