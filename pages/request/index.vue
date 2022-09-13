<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'

import { getAccidentList } from '~/api'
import type { Accident } from '~/types'

export default Vue.extend({
  name: 'RequestPage',
  data () {
    return {
      accident: {} as Accident
    }
  },
  watch: {
    async $route () {
      this.accident = await getAccidentList()
    }
    // 페이지가 이동할 때마다 데이터를 다시 받아옴
  },
  async mounted () {
    this.accident = await getAccidentList()

    if (this.accident.totalCount === 0) {
      this.$router.push('/')
    } else {
      this.$router.push(`/request/${this.accident.history[0].id}`)
    }
    // 백엔드에 요청하여 해당 id의 사고 정보를 받아옴
    // 사고가 없는 경우 메인 페이지로 이동
    // 사고가 있는 경우 가장 최근 발생한 사고의 id를 가지고 사고 요청 페이지로 이동
  }
})
</script>
