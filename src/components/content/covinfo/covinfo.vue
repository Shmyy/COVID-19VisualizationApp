<template>
    <div class='info'>
        <div class="hot_topic">
            <div>
                <img class="hot_topic_img1" src="https://img1.dxycdn.com/2021/0111/820/9732351014585228543-22.png" alt="">
            </div>
            <ul>
                <li v-for="item in news" :key="item.id">
                    <img class="hot_topic_img2" src="~assets/img/news.png" alt="">
                    <a :href="item.sourceUrl">
                        <span class="left">{{item.title}}</span>
                        <span class="right">></span>
                    </a>
                </li>
            </ul>
        </div>
        <help></help>
    </div>
</template>

<script>
    import Help from 'components/content/covinfo/help.vue'
    export default {
        name: 'Covinfo',
        components:{
            Help
        },
        props:{
            news:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.info{
    padding: 0.2rem;
    border-bottom: 0.35rem solid #f7f7f7;
    .hot_topic_img1{
        width: 1.4rem;
        border-left: 0.1rem solid #007aff;
        padding-left: 0.1rem;
        margin-left: 0.15rem;
        margin-bottom: 0.2rem;
    }
    .hot_topic_img2{
        width: 0.7rem;
        padding-left: 0.1rem;
    }
    li{
        display: flex;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 0.4rem;
        a{
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                display: inline-block;
                width: 6.1rem;
            }
            .right{
                color: #d3d3d3;
            }
        }
    }
    
    // .title{
    //     border-left: 0.1rem solid rgb(20,49,128);
    //     padding-left: 0.1rem;
    //     margin-bottom: 0.2rem;
    // }
    // p{
    //     line-height: 0.5rem;
    //     color: #666;
    // }
}
</style>