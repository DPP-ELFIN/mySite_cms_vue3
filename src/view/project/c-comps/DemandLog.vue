<template>
    <div class="demand_dialog">
        <el-drawer v-model="drawer" :direction="direction" :before-close="handleClose">
            <template #header>
                <h4>为{{}}添加需求</h4>
            </template>
            <template #default>

            </template>
            <template #footer>
                <div style="flex: auto">
                    <el-button @click="cancelClick">关闭</el-button>
                    <el-button type="primary" @click="confirmClick">确定</el-button>
                </div>
            </template>
        </el-drawer>
    </div>
</template>


<script setup lang='ts'>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const drawer = ref(false)
const direction = ref('rtl')
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure you want to close this?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}


function cancelClick() {
    drawer.value = false
}
function confirmClick() {
    ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
        .then(() => {
            drawer.value = false
        })
        .catch(() => {
            // catch error
        })
}

</script>


<style scoped lang='less'>
.demand_dialog {}
</style>