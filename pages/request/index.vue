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
  },
  async mounted () {
    this.accident = await getAccidentList()

    if (this.accident.totalCount === 0) {
      this.$router.push('/')
    } else {
      this.$router.push(`/request/${this.accident.history[0].id}`)
    }
  }
})
</script>
