<template>
  <div class="request">
    <AccidentContent :accident="accident" />
    <div class="request_wrapper">
      <AccidentCapture />
      <AccidentPosition />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AccidentContent from '~/components/AccidentContent.vue'
import AccidentCapture from '~/components/AccidentCapture.vue'
import AccidentPosition from '~/components/AccidentPosition.vue'

import { getAccidentListById } from '~/api'
import type { AccidentList } from '~/types'

export default Vue.extend({
  name: 'RequestPage',
  components: { AccidentContent, AccidentCapture, AccidentPosition },
  data () {
    return {
      accident: {} as AccidentList
    }
  },
  async mounted () {
    this.accident = await getAccidentListById(this.$route.params.id)
  }
})

</script>

<style lang="scss">
@import '@/assets/styles/RequestPage/style.scss';
</style>
