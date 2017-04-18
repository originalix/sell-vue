<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{ seller.score }}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{ seller.rankRate }}%</div>
        </div>
        <div class="overview-right"></div>
        <split></split>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//  import BScroll from 'better-scroll'
//  import {formatDate} from 'common/js/date'
  import star from 'components/star/star'
  import ratingselect from 'components/ratingselect/ratingselect'
  import split from 'components/split/split'

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star,
      ratingselect,
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ratings
    position: absolute
    top: 174px
    bottom: 0
    left:0
    width: 100%
    overflow: hidden
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px
</style>
