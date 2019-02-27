<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button" ref="mycity">{{this.current_city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"  v-for="city in hotcities" :key="city.id">
            <div class="button" @click="HandleCity(city.name)">{{city.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(city,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="c in city" :key="c.id" @click="HandleCity(c.name)">{{c.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  props: ['cities', 'hotcities', 'letter'],
  methods: {
    HandleCity (value) {
      // this.$store.commit('citychanged', value)
      this.citychanged(value)
      this.$router.push('/')
    },
    ...mapMutations([
      'citychanged'
    ])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: mapState({
    current_city: 'city'
  })
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
  &:before
    border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    right 0
    bottom 0
    left 0
    .title
      line-height .54rem
      padding-left .2rem
      background #eee
      color #666
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        padding .1rem
        .button
          text-align center
          margin .1rem
          border .02rem solid #ccc
          border-radius .06rem
          padding .1rem .5rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
