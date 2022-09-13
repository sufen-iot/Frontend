<template>
  <div class="profile" @click="() => {$nuxt.$router.push('/')}">
    <h1 class="profile_title">
      SUFEN
    </h1>
    <p class="profile_now">
      {{ now }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProfileBox',
  data () {
    return {
      now: ''
      // 현재 시간을 저장하는 변수
    }
  },
  mounted () {
    function startTime (seconds: number, callback: Function) {
      callback()
      return setInterval(() => {
        callback()
      }, seconds * 1000)
    }

    startTime(1, () => {
      const time = new Date()
      this.now = `${time.getFullYear()} / ${time.getMonth() + 1} / ${time.getDate()}`
    })

    // 1초마다 현재 시간을 갱신합니다.
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/Information/ProfileBox/style.scss';
</style>
