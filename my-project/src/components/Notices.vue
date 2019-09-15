<template>
  <div>
    <div class="notice">
      <img src="./../../static/images/rocket.jpg" alt="">
      <span>2017山东乡镇公务员考试公告</span>
      <i class="test">考试公告</i>
      <div class="spacer"></div>
      <div class="notices">
        <ul>
          <li v-for="item of list"><i class="circle"></i>{{item.title}}<i class="el-icon-arrow-right"></i></li>
        </ul>
      </div>
      <div class="get-more" @click="getMore">点击查看更多</div>
      <Foot />
    </div>
  </div>
</template>

<script>
  import Foot from "./Foot";
  export default {
    name: "Notices",
    components:{Foot},
    data(){
      return{
        list:[],  //用于存放请求的所有数据
        n: 0  //用于记录每次加载的条数，初始展示十条数据，每次点击加载五条数据
      }
    },
    methods:{
      getMore() {
        if (this.n < 25) {
          this.$axios.get('./../../static/items.json').then((res) => {
            //一开始展示有一条数据，所以从0+this.n，否则少加载一条数据
            let data = res.data.slice(5 + this.n, 10 + this.n);
            //把加载的数据拼接到list中
            this.list = this.list.concat(data);
          }).catch(() => {
            this.$message({
              showClose: true,
              message: '数据丢失了',
              type: 'error'
            });
          });
          this.n += 5;  //每次加载一条数据
        } else {
          this.$message({
            showClose: true,
            message: '不好意思哦，数据加载完了~~~',
            type: 'warning'
          });
        }
      }
    },
    created(){
      this.$axios.get('./../../static/items.json').then((res)=>{
        // console.log(res.data);
        this.list = res.data.slice(0,10);
    }).catch(()=>{
        this.$message({
          showClose: true,
          message: '数据丢失了',
          type: 'error'
        });
      })
    }
  }
</script>

<style scoped>
  .notice {
    width: 750px;
    font-size: 30px;
    color: #444;
    margin-top: 40px;
  }

  img {
    margin: 0 16px 30px;
  }

  .test {
    display: inline-block;
    width: 158px;
    height: 48px;
    font-size: 28px;
    margin-left: 10px;
    color: #16ccaf;
    border: 1px solid #16ccaf;
    border-radius: 5%;
    text-align: center;
    line-height: 48px;
  }

  .spacer {
    width: 750px;
    height: 12px;
    background: #eee;
  }

  .notices > ul li {
    height: 100px;
    line-height: 100px;
    color: #555;
    border-bottom: 2px solid #efefef;
  }

  .circle {
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    border: 1px solid;
    border-radius: 50%;
    font-size: 28px;
    margin: 1px 15px 0 30px;
  }
  .el-icon-arrow-right{
    margin-left: 230px;
  }
  .get-more {
    text-align: center;
    color: #999;
    font-size: 28px;
    cursor: pointer;
    margin-top: 30px;
  }
</style>
