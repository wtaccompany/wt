<template>
  <div class="home wrap">
    <header>
      <div class="circle">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </header>
    <Swipers/>
    <Items/>
    <div class="activity">
      <img src="./../../static/images/activity.jpg" alt="">
    </div>
    <Headlines/>
    <Foot />
  </div>
</template>

<script>
  import Swipers from "./Swipers";
  import Items from "./Items";
  import Headlines from "./Headlines";
  import Foot from "./Foot";

  export default {
    name: 'Home',
    components: {Foot,Headlines, Items, Swipers},
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    width: 750px;
    height: 88px;
    background-image: url("./../../static/images/head.png");
    background-size: 100%;
    position: relative;
  }

  .circle {
    position: absolute;
    right: 20px;
    bottom: 20px;

  }

  .circle li {
    float: left;
    width: 12px;
    height: 12px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 8px;
  }

  .activity > img {
    width: 750px;
    height: 160px;
  }
</style>
