<template>
  <div>
    <div class="banner">
      <img v-show="!showGallary" @click="handleImgClick" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
           class="banner-img" alt="">
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6bc;</span>39</div>
      </div>
    </div>
    <fade>
      <common-gallary @close="HandleClose" :imgs="imgs" v-show="showGallary"></common-gallary>
    </fade>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_r_800x800_83a5fe3a.jpg',
        'http://img1.qunarzz.com/sight/p0/1510/ca/ca60a080020329ef90.img.jpg_350x240_9ff2208e.jpg',
        'http://img1.qunarzz.com/sight/p0/1510/cc/ccafbdaac21bdbf790.img.jpg_350x240_c35f8451.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    handleImgClick () {
      this.showGallary = true
    },
    HandleClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    Fade
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      color #ffffff
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      display flex
      .banner-title
        font-size .32rem
        padding 0 .2rem
        flex 1
      .banner-number
        margin .14rem
        padding 0 .3rem
        line-height .4rem
        height .32rem
        font-size .24rem
        border-radius .2rem
        background rgba(0, 0, 0, 8)
        .banner-icon
          font-size .24rem
          padding .02rem
</style>
