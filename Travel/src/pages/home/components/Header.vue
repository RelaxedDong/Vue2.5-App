<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe606;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6aa;</span>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市<span class="iconfont arrow-right">&#xe638;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<!--组件样式，不影响其他组件-->
<!--1rem = html front-size = 50px-->
<style lang="stylus" scoped>
 @import "~styles/varibles.styl"
 .header
  display flex
  line-height:.86rem
  background: $bgColor
  color: #fff
  .header-left
    margin-left: 0.1rem
    float:left
    width :.64rem
  .header-input
    padding-left:.2rem
    .back-icon
      text-align center
      font-size .4rem
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    color: #ccc
    background: #fff
    border-radius: .1rem
  .header-right
    .arrow-right
      font-size .3rem
      margin-left -.05rem
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #ffffff
</style>
