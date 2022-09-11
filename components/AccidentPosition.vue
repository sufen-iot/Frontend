<template>
  <div class="accident">
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

declare global {
  interface Window {
    kakao: any
  }
}

export default Vue.extend({
  name: 'AccidentPosition',
  props: {
    accident: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      markers: [],
      infowindow: null,
      map: null
    }
  },
  mounted () {
    if (window.kakao && window.kakao.maps) {
      this.initMap()
    } else {
      const script = document.createElement('script')
      script.src =
        `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.KAKAO_API_KEY}`
      script.addEventListener('load', () => {
        window.kakao.maps.load(() => {
          this.initMap()
        })
      })
      document.head.appendChild(script)
    }
  },
  methods: {
    initMap () {
      const container = document.getElementById('map')
      const options = {
        center: new window.kakao.maps.LatLng(this.accident[0], this.accident[1]),
        level: 3
      }
      this.map = new window.kakao.maps.Map(container, options)
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/ContentBox/Accident/Position/style.scss';
@import '@/assets/styles/ContentBox/Accident/style.scss';
</style>
