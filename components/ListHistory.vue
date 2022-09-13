<template>
  <div class="list">
    <h1 class="list_title">
      History
    </h1>
    <p class="list_subtitle">
      클릭해주세요!
    </p>

    <div class="list_wrapper">
      <div
        v-for="(i, k) in accident.history"
        :key="k"
        class="list_item"
        @click="redirect(i.id)"
      >
        <h1>수난 사고</h1>
        <p>{{ i.time[0] }}</p>
        <p>{{ i.time[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAccidentList } from '~/api'
import type { Accident } from '~/types'

export default Vue.extend({
  name: 'ListHistory',
  data () {
    return {
      timer: null as NodeJS.Timer | null,
      accident: {} as Accident
    }
  },
  watch: {
    async $route () {
      this.accident = await getAccidentList()
      this.accident.history.forEach((element) => {
        element.time = element.time.toString().split('T')
      })
    }
    // 페이지가 이동할 때마다 데이터를 다시 받아옴
  },
  async mounted () {
    if (this.timer) {
      clearInterval(this.timer)
    }
    function start (callback: Function) {
      callback()

      return setInterval(async () => {
        await callback()
      }, 1000)
    }
    await start(async () => {
      this.accident = await getAccidentList()
      this.accident.history.forEach((element) => {
        element.time = element.time.toString().split('T')
      })
    })
    // 1초마다 백엔드에 요청을 보내서 사고 리스트를 갱신합니다.
  },
  methods: {
    redirect (id: string) {
      this.$router.push(`/request/${id}`)
    }
    // 사고 리스트의 아이템을 클릭하면 해당 사고의 id를 가지고 사고 요청 페이지로 이동합니다.
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/Information/ListHistory/style.scss';
</style>
