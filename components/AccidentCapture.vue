<template>
  <div class="accident">
    <img v-if="accident" class="accident_img" :src="`data:image/jpeg;base64,${accident}`">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AccidentCapture',
  props: {
    accident: {
      type: String,
      required: true,
      default: ''
    }
  }
  // pages/request.vue에서 props로 받아온 accident를 img 태그의 src로 넣어줌
})
</script>

<style lang="scss">
@import '@/assets/styles/ContentBox/Accident/Capture/style.scss';
@import '@/assets/styles/ContentBox/Accident/style.scss';
</style>
