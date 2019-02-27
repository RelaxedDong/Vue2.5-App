<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,key) in pages" :key="key">
      <div class="icons">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.title}}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
      }
    }
  },
  props: ['iconList'],
  computed: {
    pages: function () {
      const res = []
      for (let i in this.iconList) {
        const k = Math.floor(i / 8)
        if (!res[k]) {
          res[k] = []
        }
        res[k].push(this.iconList[i])
      }
      return res
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons
    height:0
    width 100%
    padding-bottom 50%
    overflow hidden
    .icon
      position relative
      overflow hidden
      float left
      height 0
      width 25%
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        box-sizing border-box
        padding .1rem
        left 0
        right 0
        bottom .44rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
    .icon-desc
      position absolute
      bottom 0
      line-height .44rem
      height .44rem
      left 0
      right 0
      color $darkTextColor
      text-align center
      ellipsis()
</style>
