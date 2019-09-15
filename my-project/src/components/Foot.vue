<template>
  <div class="wrap">
    <footer>
      <ul>
        <li><router-link to="/"><img src="./../../static/images/consult.png" alt=""></router-link></li>
        <li><router-link to="/exam"><img src="./../../static/images/wechat.png" alt=""></router-link></li>
        <li><router-link to=""><img src="./../../static/images/course.png" alt=""></router-link></li>
        <li><router-link to="/test"><img src="./../../static/images/group.png" alt=""></router-link></li>
      </ul>
    </footer>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "Foot"
  }
</script>

<style scoped>
  footer{
    margin-top: 30px;
    border-top: 2px solid #e8e8e8;
  }
  footer > ul {
    display: flex;
    align-content: space-between;
    justify-content: center;
    text-align: center;
  }

  li >a>img {
    width: 88px;
    height: 88px;
    margin: 14px 54px 0;
  }
</style>
