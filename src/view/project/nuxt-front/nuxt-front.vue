<template>
    <div class="nuxt_front">
        <Bar about="nuxt_front" />
        <div class="table">
            <el-table ref="ElTableRefs" :data="tableData" style="width: 100%;height: calc(100% - 60px)" max-height="700"
                border>
                <el-table-column type="index" width="60" label="索引" />
                <el-table-column prop="date" label="名称" width="180" align="center" />
                <el-table-column prop="name" label="创建时间" width="180" align="center" />
                <el-table-column prop="name" label="指定时间" width="180" align="center" />
                <el-table-column prop="name" label="完成时间" width="180" align="center" />
                <el-table-column prop="name" label="开发人员" width="180" align="center" />
                <el-table-column prop="name" label="备注" align="center" />
                <el-table-column prop="name" label="状态" width="100" align="center">
                    <template #default>
                        <el-tag type="warning">开发中</el-tag>
                        <el-tag type="success">已完成</el-tag>
                        <el-tag type="danger">bug</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="操作" fixed="right" width="220" align="center">
                    <template #default>

                        <el-button type="text" size="default" @click="edit">修改</el-button>
                        <el-button type="text" size="default" @click="edit">完成</el-button>
                        <el-button type="text" size="default" @click="edit">回退</el-button>
                        <el-button type="danger" size="default" link @click="del">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            分页
        </div>
    </div>
</template>


<script setup lang='ts'>
import { ref } from 'vue'
import Bar from '../c-comps/Bar.vue';
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
const ElTableRefs = ref()
const maxHeight = ref<number>()

const edit = () => {
    console.log(ElTableRefs.value?.resizeState.height);
}
const del = () => { }


</script>


<style scoped lang='less'>
.nuxt_front {
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;

    .table {
        padding: 0 20px 20px 20px;
        flex: 1;
    }

}
</style>