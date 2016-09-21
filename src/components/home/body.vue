<template>
  <div id="home_body">
   <div style="margin-top:3em;" id="home_head_body">
    <div>
        <a v-link="{ path: '/income/list' }">
          <div class="inout">
              <span class="income-title">收</span>
              <span class="income-money">￥200</span>
          </div>
        </a>
        <a v-link="{ path: '/outcome/list' }">
          <div class="inout" style="border-top:1px solid #ddd;">
              <span class="outcome-title">支</span>
              <span class="outcome-money">￥100</span>
          </div>
        </a>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data:function(){
    return {
      
    }
  },
  watch:{
    
  },
  methods:{
    
  }
}
</script>

<style>
   .inout{
    padding: 2em;
  }
  .income-title{
    font-size: 2em;
    color: #0053e0;
    border: 1px solid;
    padding: 10px;
    border-radius: 2em;
    font-family: "微软雅黑";
  }
  .outcome-title{
    font-size: 2em;
    color: #e2282b;
    border: 1px solid;
    padding: 10px;
    border-radius: 2em;
    font-family: "微软雅黑";
  }
  .income-money{
    margin-left:2em;
    color: #0053e0;
    font-size: 2em;
  }
  .outcome-money{
    margin-left:2em;
    color: #e2282b;
    font-size: 2em;
  }
</style>
