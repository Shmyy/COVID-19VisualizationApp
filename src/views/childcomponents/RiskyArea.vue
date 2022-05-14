<template>
    <div class="riskyarea">
        <navbar></navbar>
        <titles>
            <template #left>
                <div class="titles">近期疫情分布</div>
            </template>
        </titles>
        <div class="checkall">
            <div>高风险地区<span style="color:red;font-weight:800;">{{higharea.length}}</span>个&nbsp中风险地区<span style="color:orange;font-weight:800;">{{midarea.length}}</span>个</div>
            <a href=""><div>查看全部></div></a>
        </div>
        <div class="all_collection">
            <el-table :data="tableData" style="width: 100%">
            <el-table-column type="expand">
            <template #default="props">
                <div m="4">
                    <p m="t-0 b-2">State: {{ props.row.state }}</p>
                    <p m="t-0 b-2">City: {{ props.row.city }}</p>
                    <p m="t-0 b-2">Address: {{ props.row.address }}</p>
                    <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
                </div>
            </template>
            </el-table-column>
            <el-table-column label="Date" prop="date" />
            <el-table-column label="Name" prop="name" />
        </el-table>
        </div>
    </div>
</template>

<script>
// 组件引入
import Navbar from 'components/common/Navbar/navbar'
import Titles from 'components/common/Title/title'

export default {
    name: 'Riskyarea',
    data(){
        return {
            tableData:[
            {
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-08',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-06',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-07',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            ]
        }
    },
    props:{
        higharea:{
            type:Array,
            default(){
                return []
            }
        },
        midarea:{
            type:Array,
            default(){
                return []
            }
        },
    },
    components: {
        Navbar,
        Titles
    }
}
</script>

<style lang="less">
.riskyarea{
    .titles{
        border-left: 0.1rem solid #007aff;
        background-color: white;
        padding-left: 0.25rem;
        margin-top: 0.2rem;
        margin-left: 0.35rem;

        font-size: 18px;
    }
    .checkall{
        margin-top: 0.3rem;
        margin-left: 0.35rem;
        margin-right: 0.35rem;
        padding: 0.15rem 0.12rem 0.15rem 0.12rem;
        border: 0.04rem solid #ebebeb;
        border-radius: 0.1rem;
        font-size: 15px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        a{
            font-size: 13px;
            color: blue;
        }
    }
}
</style>