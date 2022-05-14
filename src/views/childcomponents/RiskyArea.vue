<template>
    <div class="riskyarea">
        <navbar></navbar>
        <titles>
            <template #left>
                <div class="titles">近期疫情分布</div>
            </template>
        </titles>
        
    </div>
</template>

<script>
// 组件引入
import Navbar from 'components/common/Navbar/navbar'
import Titles from 'components/common/Title/title'

export default {
    name: 'Riskyarea',
    components: {
        Navbar,
        Titles
    }
}
</script>

<style lang="less">
.riskyarea{
    background-color: #f7f7f7;
    .titles{
        border-left: 0.1rem solid #007aff;
        background-color: white;
        padding-left: 0.35rem;
        margin-top: 0.2rem;
        
        margin-left: 0.35rem;

        font-size: 18px;
    }
}
</style>