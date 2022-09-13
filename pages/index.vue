<template>
  <MainPage />
</template>

<script lang="ts">
import Vue from 'vue'
import MainPage from '~/components/MainPage.vue'
import { getAccidentList } from '~/api'

export default Vue.extend({
  components: { MainPage },
  data () {
    return {
      timer: null as NodeJS.Timer | null
    }
  },
  mounted () {
    if (this.timer) {
      clearInterval(this.timer)
    }
    this.timer = setInterval(async (timer) => {
      const data = await getAccidentList()
      if (data.totalCount !== 0) {
        this.$router.push('/request')
        clearInterval(timer!)
      }
    }, 1000, this.timer)
    // 사고가 발생한 경우 바로 사고 요청 페이지로 이동
  },
  destroyed () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
  // 다른 페이지로 이동 시 Interval 종료
})
</script>
