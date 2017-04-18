<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{ seller.name }}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score"></star>
          <span class="text">{{ seller.ratingCount }}</span>
          <span class="text">月售{{ seller.sellCount }}单</span>
        </div>
        <ul class="remark">
          
        </ul>
      </div>
      <split></split>
      <div class="bulletin">公告</div>
      <split></split>
      <div class="pics">图片</div>
      <split></split>
      <div class="info">商家信息</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import split from 'components/split/split'
  import star from 'components/star/star'

  export default {
    components: {
      star,
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
