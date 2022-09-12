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
  },
  destroyed () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
})
</script>
