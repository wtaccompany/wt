<template>
    <div>
      <div class="items">
        <ul>
          <li>
            <img src="./../../static/images/face.jpg" alt="">
            <span>面授课程</span>
          </li>
          <li>
            <img src="./../../static/images/computer.jpg" alt="">
            <span>网校课程</span>
          </li>
          <li>
            <img src="./../../static/images/book.jpg" alt="">
            <span>图书材料</span>
          </li>
          <li>
            <img src="./../../static/images/online.jpg" alt="">
            <span>在线讲座</span>
          </li>
          <li>
            <img src="./../../static/images/others.jpg" alt="">
            <span>各地校区</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Items"
    }
</script>

<style scoped>
  .items{
    margin: 30px 0;
  }
  .items ul{
    display: flex;
    margin-left: 30px;
  }
  .items ul li{
    justify-content: center;
    margin:0 15px;
  }
img{
  width: 98px;
  height: 98px;
  border-radius: 50%;
}
li>span{
  color: #959595;
  font-size: 26px;
  margin-top: 25px;
}
</style>
