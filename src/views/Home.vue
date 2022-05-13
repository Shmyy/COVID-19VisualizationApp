<template>
  <div class="home">
    <img class="top_img" src="https://img1.dxycdn.com/2020/0314/863/3401956761707181858-2.png" alt="">
    <covinfo></covinfo>
  </div>
</template>

<script>
// 组件引用
import Covinfo from 'components/content/covinfo/covinfo'

// 网络引用
import {getHomemultidata} from 'network/HomeData.js'

export default {
  name: 'Home',
  components:{
    Covinfo
  },
  data(){
    return {
      data:{},
    }
  },
  created(){
    console.log('111')
    this.getHomemultidata()
  },
  mounted(){
    
  },
  methods:{
    getHomemultidata(){
      getHomemultidata().then(res => {
        this.data = res
        console.log(this.data)
      })
    }
  }
}
</script>


<style scoped>
.top_img{
  width: 100%;
}
</style>
