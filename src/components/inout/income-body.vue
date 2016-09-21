<template>
    <div id="income-body">
      <validator name="validation">
        <form novalidate @submit="onSubmit">
         <div class="ui form">
          <div class="field">
            <label>金额</label>
            <input type="text" v-model="money" id="money" v-validate:money="{ minlength: 3, maxlength: 15 }" >
            <div>
              <span v-show="$validation.money.minlength">不得少于3个字符</span>
              <span v-show="$validation.money.maxlength">不得大于15个字符</span>
            </div>
          </div>

          <div class="field">
            <label>类别</label>
            <input type="text" v-model="category">
          </div>

          <div class="field">
            <label>起始时间</label>
            <input type="text" v-model="startDate">
          </div>

          <div class="field">
            <label>终止时间</label>
            <input type="text" v-model="endDate">
          </div>
          <input type="submit" value="确定" class="fluid ui button blue" v-if="$validation.valid">
        </div>
        </form>
      </validator>
    </div>    
</template>
<script>
export default {
  data:function(){
    return {
      money:'',category:'',startDate:'',endDate:''
    }
  },
  watch:{
    
  },
  methods:{
     save(){
      var url = "http://yuenr.com/yuenr/category/getCategories";
      var data = {
        money:this.money,
        category:this.category,
        startDate:this.startDate,
        endDate:this.endDate
      }
      this.$http.post(url, data).then((response) => {
          if(response.status == 200){
            var categorys = response.body;
            for (var i = categorys.length - 1; i >= 0; i--) {
              console.log(categorys[i]);
            };
          }
      }, (response) => {
        // error callback
      });
     },
    onSubmit: function (e) {
      // validate manually
      var self = this
      this.$validate(true, function () {
        if (self.$validation.invalid) {
          e.preventDefault()
        }
      })
    }
  }
}
</script>

<style scoped>
    #income-body{
        margin-top: 1em;
        padding-left: 2em;
        padding-right: 2em;
    }
     
</style>
