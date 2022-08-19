<template>
  <div>
    <div class="information">
      <ProfileBox />
      <LiveVideo />
    </div>

    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfileBox from '../components/ProfileBox.vue'
import LiveVideo from '../components/LiveVideo.vue'

export default Vue.extend({
  components: { ProfileBox, LiveVideo }
})
</script>

<style lang="scss">

</style>
