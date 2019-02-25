<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item" v-for="item in imgList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      imgList: [
        {
          id: '001',
          title: '故宫',
          desc: '还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg'
        },
        {
          id: '002',
          title: '北京欢乐谷',
          desc: '这里是学生党名副其实的开心课堂，这里同样是青年情侣的浪漫圣地！时尚、动感、欢乐、梦幻的北京欢乐谷欢迎你！',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg'
        },
        {
          id: '003',
          title: '远古的恐龙',
          desc: '远去的恐龙》是由北京大风文化艺术投资有限公司创意、编剧、策划并组织中外杰出艺术家、工程师团队制作，南宁八菱科技股份有限公司、北京演艺集团联合出品的一部不可思议的巨制演艺作品',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg'
        }
      ]
    }
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
