<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailList,
    DetailBanner,
    DetailHeader
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '特惠双人票'
            },
            {
              title: '三人票',
              children: [
                {
                  title: '包午餐三人票'
                }
              ]
            }
          ]
        },
        {
          title: '学生票',
          children: [
            {
              title: '学生票七日游'
            }
          ]
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
    overflow auto
</style>
