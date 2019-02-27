<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe606;</div>
      </div>
    </router-link>
    选择城市
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    color #ffffff
    background $bgColor
    text-align center
    font-size .32rem
    .header-left
      color #ffffff
      top 0
      left: 0
      font-size .4rem
      width .64rem
      position absolute
      text-align center
</style>
