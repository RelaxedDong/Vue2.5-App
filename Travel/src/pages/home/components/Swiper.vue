<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for ='item of swiperList' :key="item.id">
        <img class="swiper-img" :src="item" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  props: ['swiperList']
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wrapper
  overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    .swiper-img
      width 100%
</style>
