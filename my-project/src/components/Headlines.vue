<template>
    <div class="wrap">
      <div class="headlines clearfix">
        <div class="left">
          <img src="./../../static/images/headlines.jpg" alt="">
          <span>乡镇公务员</span>
          <template>
            <el-select v-model="value" placeholder="请选择">
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
          </template>
        </div>
        <div class="right">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="list">
        <ul>
          <li v-for="item of list"><i class="circle"></i>{{item.title}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Headlines",
      data(){
          return{
            list:[],
            options: [{
              label: '热门城市',
              options: [{
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }]
            }, {
              label: '城市名',
              options: [{
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }, {
                value: 'Dalian',
                label: '大连'
              }]
            }],
            value: ''
          }
      },
      created(){
          this.$axios.get('./../../static/txt.json').then((res)=>{
            // console.log(res.data);
            this.list = res.data;
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
.headlines{
  width: 750px;
  height: 80px;
  margin: 0 30px;
  overflow: hidden;
  border-bottom: 2px solid #eee;
}
  .left{
    float: left;
    margin: 25px 0;
  }
.left>img{
  width: 58px;
  height: 39px;
}
.left>span{
  font-size: 26px;
  font-weight: bold;
  margin: 0 30px 20px;
}
select{
  color: #ccc;
}
  .right{
    margin: 25px 0;
    float: right;
  }
  .list{
    margin: 30px 0 0 30px;
    border-bottom: 2px solid #eee;
  }
.list ul li{
  height: 80px;
  line-height: 80px;
  color: #444;
  font-size: 32px;
}
  .circle{
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    border: 1px solid;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>
