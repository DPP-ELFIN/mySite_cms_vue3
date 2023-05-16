<template>
    <div class="nuxt_front">
        <Bar ref="barRefs" about="nuxt_front" :tableRow="tableRow" @addSuccess="getDemandFn" />
        <div class="table">
            <el-table ref="ElTableRefs" :data="tableData" style="width: 100%;height: calc(100% - 60px)" max-height="700"
                border>
                <el-table-column type="index" width="60" label="索引" />
                <el-table-column prop="name" label="名称" width="180" align="center" />
                <el-table-column prop="createTime" label="创建时间" width="180" align="center" :formatter="timeFormat" />
                <el-table-column prop="time" label="指定时间" width="180" align="center" :formatter="timeFormat" />
                <el-table-column prop="overTime" label="完成时间" width="180" align="center" :formatter="timeFormat" />
                <el-table-column prop="person" label="开发人员" width="180" align="center" />
                <el-table-column prop="remark" label="备注" align="center" />
                <el-table-column prop="status" label="状态" width="100" align="center">
                    <template #default="{ row }">
                        <el-tag v-if="row.status === 0" type="warning">开发中</el-tag>
                        <el-tag v-if="row.status === 1" type="success">已完成</el-tag>
                        <el-tag v-if="row.status === 2" type="danger">bug</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="220" align="center">
                    <template #default="{ row }">

                        <el-button size="default" link @click="edit(row)">修改</el-button>
                        <el-button size="default" link @click="over(row)">完成</el-button>
                        <el-button size="default" link @click="back(row)">回退</el-button>
                        <el-button type="danger" size="default" link @click="del(row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            分页
        </div>
    </div>
</template>


<script setup lang='ts'>
import { onBeforeMount, ref } from 'vue'
import Bar from '../c-comps/Bar.vue';
import { getDemand, delDemand, editStatus } from '@/service/api'
import { ElMessage } from 'element-plus';
import { timeFormatter } from '@/utils/formatter'

let tableData = ref([])
const ElTableRefs = ref()
const tableRow = ref()
const barRefs = ref()

const edit = (row) => {
    tableRow.value = row
    barRefs.value.form.name = row.name
    barRefs.value.form.remark = row.remark
    barRefs.value.form.time = row.time
    barRefs.value.form.person = row.person
    barRefs.value.isModify = true
    barRefs.value.addDemand()
}
const del = async (row) => {
    const res: Res = await delDemand({ id: row._id })
    if (res.code !== 200) return ElMessage.error(res.msg)
    ElMessage.success(res.msg)
    getDemandFn()
}
const over = async (row) => {
    const res: Res = await editStatus({ id: row._id, status: 1, overTime: Date.now() })
    if (res.code !== 201) return ElMessage.error(res.msg)
    ElMessage.success(res.msg)
    getDemandFn()
}
const back = async (row) => {
    const res: Res = await editStatus({ id: row._id, status: 0, overTime: '' })
    if (res.code !== 201) return ElMessage.error(res.msg)
    ElMessage.success(res.msg)
    getDemandFn()
}



const getDemandFn = async () => {
    const res: Res = await getDemand({ about: 0 })
    if (res.code !== 200) return ElMessage.error(res.msg)
    tableData.value = res.data
}

const timeFormat = (row, column, cellValue) => {
    if (!cellValue) return cellValue
    return timeFormatter(cellValue)
}

onBeforeMount(() => {
    getDemandFn()
})
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