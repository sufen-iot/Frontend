<template>
  <div class="accident">
    <div class="content_detail">
      <h1>{{ accident }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AccidentContent',
  props: {
    accident: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log(this.accident)
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/ContentBox/Accident/Content/style.scss';
@import '@/assets/styles/ContentBox/Accident/style.scss';
</style>
