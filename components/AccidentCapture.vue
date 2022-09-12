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
})
</script>

<style lang="scss">
@import '@/assets/styles/ContentBox/Accident/Capture/style.scss';
@import '@/assets/styles/ContentBox/Accident/style.scss';
</style>
