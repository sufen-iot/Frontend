<template>
  <div class="accident">
    <div class="content_detail">
      <h1>수난 사고</h1>
      <p>{{ accident.time }}</p>
      <p>위도 {{ accident.latitude }} / 경도 {{ accident.longitude }}</p>
      <div class="content_buttons">
        <button id="accept" @click="change">
          수락
        </button>
        <button id="deny" @click="change">
          거절
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { AccidentList } from '~/types'
import { putAccidentList } from '~/api'

export default Vue.extend({
  name: 'AccidentContent',
  props: {
    accident: {
      type: Object as () => AccidentList,
      required: true
    }
  },
  updated () {
    if (this.accident === null) {
      this.$router.push('/')
    }
  },
  methods: {
    async change (elements: any) {
      const id = this.accident.id
      const status = elements.target.id === 'accept'
      await putAccidentList({ id, status })
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/ContentBox/Accident/Content/style.scss';
@import '@/assets/styles/ContentBox/Accident/style.scss';
</style>
