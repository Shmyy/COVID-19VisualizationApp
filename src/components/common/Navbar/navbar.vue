<template>
    <div class="navbar">
        <div class="navbaritem_all">
            <div class="navbaritem">
                <span>地区风险</span>
            </div>
            <div class="navbaritem">
                <span>国内数据</span>
            </div>
            <div class="navbaritem">
                <span>全球数据</span>
            </div>
            <div class="navbaritem">
                <span>新冠疫苗</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Navbar',
        components: {
        }
    }
</script>

<style lang="less">
.navbar{
    background-color: #f7f7f7;
    .navbaritem_all{
        display: flex;
        align-items: center;
        justify-content: space-around;

        background-color: #e6edff;
        
        border-radius: 0.35rem 0.35rem 0 0;
        .navbaritem{
            height: 1rem;

            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
    font-size: 16px;
}
</style>