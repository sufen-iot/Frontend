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
  },
  methods: {
    redirect (id: string) {
      this.$router.push(`/request/${id}`)
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/Information/ListHistory/style.scss';
</style>
