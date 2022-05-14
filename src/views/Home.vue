<template>
  <div class="home">
    <!-- 疫情图片 -->
    <img class="top_img" src="https://img1.dxycdn.com/2020/0314/863/3401956761707181858-2.png" alt="">
    <!-- 疫情热点 -->
    <covinfo :news="news"></covinfo>
    <!-- 地区疫情 -->
    <riskyarea
      :higharea="higharea"
      :midarea="midarea"
      >
    </riskyarea>
  </div>
</template>

<script>
// 组件引用
import Covinfo from 'components/content/covinfo/covinfo'

// 视图引入
import Riskyarea from 'views/childcomponents/RiskyArea.vue'

// 网络引用
import {getHomemultidata} from 'network/HomeData.js'

export default {
  name: 'Home',
  components:{
    Covinfo,
    Riskyarea
  },
  data(){
    return {
      data:{},
      news:[],
      higharea:[],
      midarea:[],
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
        this.news = res.newslist[0].news
        this.higharea = res.newslist[0].riskarea.high
        this.midarea = res.newslist[0].riskarea.mid
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
