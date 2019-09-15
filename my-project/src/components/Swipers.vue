<template>
  <div>
    <div class="swiper wrap">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img src="./../../static/images/banner1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="./../../static/images/banner2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="./../../static/images/banner3.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="./../../static/images/banner4.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swipper",
    data() {
      return {
        swiperOption: {
          autoplay:1000,
          loop:true,
          pagination : '.pagination',
          preventClicks : true,
          paginationClickable :true,
          paginationAsRange : true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
        }
      }
    },
  }
</script>

<style scoped>
  .swiper{
    width: 750px;
    height: 303px;
    position: relative;
  }
  img{
    width: 750px;
    height: 303px;
  }
.swiper-pagination-bullets{
  position: absolute;
  bottom: 30px;
  left: 320px;
  z-index: 999;
}
</style>
