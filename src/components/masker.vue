<template>
    <div class="mask" @click="$emit('click')">

    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
}
</script>

<style scoped>
.mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #000;
    opacity: 0.3;
}
</style>
