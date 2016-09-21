<template>
  <div id="app">
    <home-head></home-head>
    <home-body></home-body>
  </div>
</template>
<script>
import storage from './storage'
import HomeHead from './components/home/head'
import HomeBody from './components/home/body'
export default {
  data:function(){
    return {
       
    }
  },
  watch:{
    todos:{
      handler:function(items){
         
      },
      deep:true
    }
  },
  methods:{
   
  },
  components:{
    HomeHead,HomeBody
  }
}
</script>
