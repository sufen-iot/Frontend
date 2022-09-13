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
      type: Array as () => Array<number>,
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
  watch: {
    accident () {
      this.initMap()
    }
    // accident 가 바뀌면 지도를 다시 그림 ( props 로 받아온 accident를 지도에 표시하기 위함 )
  },
  mounted () {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script')
      script.src =
        `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.KAKAO_API_KEY}`
      script.addEventListener('load', () => {
        window.kakao.maps.load(() => {
          this.initMap()
        })
      })
      document.head.appendChild(script)
      // 카카오 맵 sdk 를 불러옴
    } else {
      this.initMap()
    }
    // 카카오 맵을 불러옴
  },
  methods: {
    initMap () {
      const container = document.getElementById('map')
      const options = {
        center: new window.kakao.maps.LatLng(this.accident[0], this.accident[1]),
        level: 2
      }
      // 지도를 표시할 div, 지도의 중심좌표, 지도의 확대 레벨
      this.map = new window.kakao.maps.Map(container, options)
      // 지도를 불러옴

      const circle = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(this.accident[0], this.accident[1]), // 원의 중심좌표 입니다
        radius: 50, // 미터 단위의 원의 반지름입니다
        strokeWeight: 5, // 선의 두께입니다
        strokeColor: '#E8828D', // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'dashed', // 선의 스타일 입니다
        fillColor: '#F5C6CB', // 채우기 색깔입니다
        fillOpacity: 0.7 // 채우기 불투명도 입니다
      })

      circle.setMap(this.map)

      const markerPosition = new window.kakao.maps.LatLng(this.accident[0], this.accident[1])

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      })

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(this.map)
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/ContentBox/Accident/Position/style.scss';
@import '@/assets/styles/ContentBox/Accident/style.scss';
</style>
