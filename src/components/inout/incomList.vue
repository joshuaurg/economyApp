<template>
    <div id="incomeList">
        <page-head title="收入记录" redirectpath="/income/new"></page-head>
        <div class="ui middle aligned divided list">
          <div class="item">
            <div class="right floated content">
              <div class="ui button">Add</div>
            </div>
            <div class="content">Lena 东方大道</div>
          </div>
        </div>
    </div>    
</template>
<script>
import PageHead from '../pageHead'
function getIncomeList(obj){
  var data = {accessToken:'2',category:'3',money:'23'};
  var url = "http://localhost:8080/inout/1/save";
  obj.$http.post(url,data).then((response) => {
          if(response.status == 200){
            var categorys = response.body;
            for (var i = categorys.length - 1; i >= 0; i--) {
              console.log(categorys[i]);
            };
          }
      }, (response) => {
        // error callback
      });
}
export default {
  data:function(){
    return {
      xx:getIncomeList(this)
    }
  },
  watch:{
    
  },
  methods:{
     
  },
  components:{
    PageHead
  }
}
</script>

<style scoped>
  
</style>
