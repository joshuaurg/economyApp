<template>
  <div id="home_head">
   <img class="ui centered image" src="../../assets/home_head_backimg.png">
   <img class="ui avatar image" src="../../assets/dzy.jpg">
   <i class="setting icon"  @click="setting"></i>     
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
    setting(){
      alert("TODO")
    }
  }
}
</script>

<style scoped>
  .avatar{
    width:10em!important;
    height:10em!important;
    margin-top: -7em;
    margin-left:30%;
  }
  .setting{
    font-size: 2em!important;
    color: #dddfff;
    position: absolute;
    top: 0.5em;
    right:0;
  }
</style>
