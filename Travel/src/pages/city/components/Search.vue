<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>
<!--组件样式，不影响其他组件-->
<!--1rem = html front-size = 50px-->
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      padding 0 .1rem
      box-sizing border-box
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
</style>
