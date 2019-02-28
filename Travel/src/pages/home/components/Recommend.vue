<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <div ref="wrapper">
    <ul>
      <router-link  tag="li" class="item" v-for="(item,index) in hotList" :key="item.id" :to="'/detail/' + index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.price}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeRecommend',
  props: ['hotList'],
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height .8rem
    background #eee
    margin-top .2rem
    text-indent .2rem
  .item
    border-bottom 1px solid #cacaca
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
  .item-info
    min-width 0
    flex 1
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      background #ff9300
      line-height .44rem
      color #ffffff
      padding 0 .2rem
      border-radius .06rem
      margin-top .2rem
</style>
