<template>
    <div id="pageHead">
        <span onclick="window.history.go(-1)"><i class="reply icon"></i></span>
        <span class="title">{{title}}</span>
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
  props:['title'],
  methods:{
     
  }
}
</script>

<style scoped>
  .reply{
    margin-left: 0.4em;
    font-size: 1.5em;
    color: #0101f7;
    margin-top: 0.5em;
  }
  .add{
    font-size: 1.5em;
    color: blue;
    float: right;
    margin-top: 0.5em;
    margin-right: 0.7em;
  }
  #pageHead{
    border-bottom: 1px solid #ddd;
    padding-bottom: 1em;
  }
  .title{
    margin: 0 auto;
    font-size: 1.5em;
    color: blue;
    margin-left: 32%;
  }
</style>
