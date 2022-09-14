<template>
  <div class="index">
    <div class="index_logo">
      <img src="~/assets/images/hardware.png" alt="RaspberryPi">
      <div class="index_logo_desc">
        <h1>Hardware</h1>
        <p>Information</p>
        <hr>
        <div class="index_info">
          <p><strong>CPU</strong>&nbsp;&nbsp;&nbsp;{{ hardware.cpu }}</p>
          <p><strong>RAM</strong>&nbsp;&nbsp;&nbsp;{{ hardware.ram }}</p>
          <p><strong>OS</strong>&nbsp;&nbsp;&nbsp;{{ hardware.os }}</p>
          <p><strong>KERNEL</strong>&nbsp;&nbsp;&nbsp;{{ hardware.kernel }}</p>
          <p><strong>UPTIME</strong>&nbsp;&nbsp;&nbsp;{{ hardware.uptime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getHardware } from '~/api'
import type { Hardware } from '~/types'
// Hardware get api 를 가져오고 Hardware type을 가져옴

export default Vue.extend({
  name: 'MainPage',
  data () {
    return {
      hardware: {} as Hardware
    }
  },
  async mounted () {
    this.hardware = await getHardware()
  }
  // mounted 될 때 hardware api를 호출하여 데이터를 가져온 후 this.hardware에 저장
})
</script>

<style lang="scss">
@import "@/assets/styles/MainPage/style.scss";
</style>
