<template>
  <div class="test wrap">
    <header><img src="./../../static/images/ban.jpg" alt="" @click="back"></header>
    <h2>乡镇公务员行测常识：灾害逃生常识</h2>
    <div class="title">
      <span class="title-left">中公教育公务员考试网  2017-02-13  11:18</span>
      <i class="title-right">中公教育</i>
    </div>
    <div class="main">
      <div class="inner" v-for="item of list">
        <p class="introducer">{{item.introducer}}</p>
        <p class="maintitle"> {{item.title}} </p>
        <p class="content">{{item.content}}</p>
        <div class="know">{{item.know}}</div>
      </div>
      <div class="get-more" @click="getMore">点击查看更多</div>
      <div class="gray"></div>
      <div class="about">
        <ul>
          <li @click="back">返回首页</li>
          <li class="space"></li>
          <li>关于中公</li>
          <li class="space"></li>
          <li>电脑版</li>
        </ul>
      </div>
    </div>
    <p class="copyright">Copyright©1999-2016 北京中公教育科技股份有限公司
      <br /> .All Rights Reserved</p>
    <Foot />
  </div>
</template>

<script>
  import Foot from "./Foot";
  export default {
    name: "Test",
    components:{Foot},
    data() {
      return {
        list: [],  //用于存放请求的所有数据
        n: 0  //用于记录每次加载的条数，初始展示一条数据，每次点击加载一条数据
      }
    },
    methods: {
      back(){
        this.$router.push('/');
      },
      getMore() {
        if (this.n < 5) {
          this.$axios.get('./../../static/test.json').then((res) => {
            //一开始展示有一条数据，所以从0+this.n，否则少加载一条数据
            let data = res.data.slice(0 + this.n, 1 + this.n);
            //把加载的数据拼接到list中
            this.list = this.list.concat(data);
          }).catch(() => {
            this.$message({
              showClose: true,
              message: '数据丢失了',
              type: 'error'
            });
          });
          this.n += 1;  //每次加载一条数据
        } else {
          this.$message({
            showClose: true,
            message: '不好意思哦，数据加载完了~~~',
            type: 'warning'
          });
        }
      },
      back(){
        this.$router.push('/');
      }
    },
    created() {
      this.$axios.get('./../../static/test.json').then((res) => {
        // console.log(res.data);
        this.list = res.data.slice(0, 1);   //请求到的数据展示在页面上一条
      }).catch(() => {
        this.$message({
          showClose: true,
          message: '数据丢失了',
          type: 'error'
        });
      });
    }
  }
</script>

<style scoped>
  header{
    width: 750px;
    height: 88px;
  }
  header>img{
    width: 750px;
    height: 88px;
  }
  .test {
    padding: 0 20px  40px;
  }

  h2 {
    margin-top: 40px;
    font-size: 32px;
    text-align: center;
    color: #444;
    font-weight: 700;
  }

  .title {
    font-size: 24px;
    margin-top: 30px;
  }

  .title-left {
    color: #a9a9a9;
  }

  .title-right {
    color: #f16161;
    margin-left: 50px;
  }

  .maintitle {
    font-size: 30px !important;
    font-weight: 700 !important;
    color: #444;
    margin: 35px 0 45px;
  }

  .introducer, .content, .know {
    font-size: 28px;
  }

  .introducer {
    margin-top: 85px;
    text-indent: 2em;
    line-height: 60px;
  }

  .introducer, .content {
    color: #666;
  }

  .content {
    text-indent: 2em;
    line-height: 60px;
  }

  .know {
    color: #888;
    text-indent: 4em;
    margin-top: 35px;
  }

  .get-more {
    text-align: center;
    color: #999;
    font-size: 28px;
    cursor: pointer;
    margin-top: 70px;
  }
  .gray{
    height: 26px;
    background: #eee;
  }
  .about{
    margin-top: 40px;
    color: #c9c9c9;
    font-size: 24px;
    text-align: center;
  }
  .space{
    width: 1px;
    height: 19px;
    color: #e3e4e5;
  }
  .about ul li{
    float: left;
    margin: 0 40px;
  }
  .copyright{
    text-align: center;
    margin-top: 80px;
    line-height: 45px;
    color: #999;
    font-size: 22px;
  }
</style>
