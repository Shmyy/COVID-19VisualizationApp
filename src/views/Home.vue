<template>
  <div class="hello">
    首页
  </div>
</template>

<script>
import {getHomemultidata} from 'network/HomeData.js'

export default {
  name: 'Home',
  data(){
    return {
      data:{},
    }
  },
  created(){
    getHomemultidata().then(res => {
        this.data = res.newslist[0].desc
        console.log(this.data)
        console.log(res)
      })
    console.log('111')
    // console.log(this.data)
  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
