<template>
  <div>
    <LiveVideo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LiveVideo from '~/components/LiveVideo.vue'

export default Vue.extend({
  components: { LiveVideo }
})
</script>
