<template>
  <div v-if="accident" class="request">
    <div class="request_wrapper">
      <AccidentContent :accident="accident" />
      <AccidentCapture :accident="accident.image" />
    </div>
    <AccidentPosition :accident="accident_position" />
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
      accident: null as AccidentList | null,
      accident_position: [] as number[]
    }
  },
  async mounted () {
    this.accident = await getAccidentListById(this.$route.params.id)
    if (!this.accident) {
      this.$router.push('/request')
    } else {
      this.accident_position = [this.accident.latitude, this.accident.longitude]
    }
    // 백엔드에 요청하여 해당 id의 사고 정보를 받아옴
    // id 정보가 없을 경우 /request 로 리다이렉트
  }
})

</script>

<style lang="scss">
@import '@/assets/styles/RequestPage/style.scss';
</style>
