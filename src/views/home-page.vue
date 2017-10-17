<template>
  <div>
    <h1>home page</h1>
    <button class="btn btn-primary" @click="show=true">clickme</button>
    <div v-if="show">
      <masker @click="clickTest"></masker>
    </div>
  </div>
</template>

<script>
import Masker from '@components/masker.vue';

export default {
  data() {
    return {
      show: false
    }
  },
  components: { Masker },
  methods: {
    clickTest() {
      alert(123);
    }
  }
}
</script>

<style scoped>
.test {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
}
</style>
