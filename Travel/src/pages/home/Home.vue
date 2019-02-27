<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :hotList="hotList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import ApiUrl from '@/config/api_url'
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend},
  data () {
    return {
      swiperList: [],
      iconList: [],
      hotList: [],
      weekendList: []
    }
  },
  methods: {
    getBanner () {
      axios.get(ApiUrl.api + 'index.json')
        .then(this.handleIndex)
    },
    handleIndex (res) {
      res = res.data
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.hotList = res.data.hotList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    this.getBanner()
  }
}
</script>

<style>

</style>
