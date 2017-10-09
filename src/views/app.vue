<template>
    <div class="container">
        <app-nav></app-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppNav from '@components/app-nav.vue';
    export default {
        components: {AppNav}
    }
</script>

<style>

</style>
