<template>
  <div class="wrap">
    <header><img src="./../../static/images/exam.jpg" alt="" @click="back"></header>
    <Consult/>
    <div class="tabs">
      <ul>
        <li @click="cur=0" :class="{active:cur==0}">
          <router-link to="/exam/notices">公告大纲</router-link>
        </li>
        <li @click="cur=1" :class="{active:cur==1}">
          <router-link to="/exam/news">考试新闻</router-link>
        </li>
        <li @click="cur=2" :class="{active:cur==2}">
          <router-link to="/exam/guidance">报考指南</router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </div>

</template>

<script>
  import Consult from "./Consult";
  import Foot from "./Foot";

  export default {
    name: "Exam",
    components: {Consult, Foot},
    data() {
      return {
        cur: 0 //默认选中第一个tab
      }
    },
    methods: {
      back() {
        this.$router.push('/');
      }
    }
  }
</script>
<style scoped>
  header {
    width: 750px;
    height: 88px;
  }

  header > img {
    width: 750px;
    height: 88px;
  }

  .tabs > ul {
    display: flex;
    align-content: space-between;
    justify-content: center;
    text-align: center;
  }

  .tabs > ul li {
    width: 217px;
    height: 88px;
    line-height: 88px;

    cursor: pointer;
    border-bottom: 1px solid #eee;

  }

  .tabs > ul li a {
    color: #888;
  }

  .tabs > ul li.active {
    border-bottom: 2px solid #16ccaf;
  }
</style>
