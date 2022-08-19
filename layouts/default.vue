<template>
  <div class="main">
    <div class="main_wrapper">
      <div class="information">
        <ProfileBox />
        <ListHistory />
      </div>

      <div class="content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfileBox from '../components/ProfileBox.vue'
import ListHistory from '../components/ListHistory.vue'

export default Vue.extend({
  components: { ProfileBox, ListHistory }
})
</script>

<style lang="scss">
@import '@/assets/styles/style.scss';
</style>
