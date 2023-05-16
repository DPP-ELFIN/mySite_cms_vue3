<template>
    <div class="bar">
        <h4>项目进度：</h4>
        <el-button type="primary" size="default" @click="addDemand">添加需求</el-button>
    </div>
    <el-drawer v-model="drawer" direction="rtl" :before-close="handleClose">
        <template #header>
            <h4>为{{ titleMap.get(about) }}添加需求</h4>
        </template>
        <template #default>
            <el-form ref="formRefs" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="需求名称" prop="name">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="开发人员" prop="person">
                    <el-select v-model="form.person" multiple collapse-tags collapse-tags-tooltip :max-collapse-tags="3"
                        placeholder="请选择开发人员" style="width: 240px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="指定时间" prop="time">
                    <el-date-picker v-model="form.time" type="date" placeholder="请选择日期" />
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="form.remark" type="textarea" />
                </el-form-item>
                <el-form-item>
                    <el-button @click="handleClose">关闭</el-button>
                    <el-button type="primary" @click="confirmClick">确定</el-button>
                </el-form-item>
            </el-form>
        </template>
    </el-drawer>
</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import { ElMessage, ElMessageBox, } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { addDemandApi, editStatus } from '@/service/api'

const props = defineProps({
    about: {
        type: String,
        default: 'nuxt_front'
    },
    tableRow: {
        type: Object,
        default: () => { }
    },

})
const titleMap = new Map([['nuxt_front', '前端页面']])
const aboutMap = new Map([['nuxt_front', 0]])
const drawer = ref(false)
const isModify = ref(false) //是否修改
const formRefs = ref<FormInstance>()

const form = reactive({
    name: '',
    remark: '',
    person: [],
    time: ''
})
const emit = defineEmits(['addSuccess'])
const rules = reactive<FormRules>({
    name: [
        { required: true, message: '需求名称不能为空', trigger: 'blur' },
    ],
    person: [
        { required: true, message: '需求名称不能为空', trigger: 'blur' },
    ],
    time: [
        { required: true, message: '请指定完成时间', trigger: 'blur' },
    ],
})
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
function confirmClick() {
    formRefs.value?.validate(vali => {
        if (vali) {
            addDemandFn()
        } else {
            console.log('验证未通过');
        }
    })
}
const addDemandFn = async () => {
    let res: Res
    console.log(isModify.value);

    if (!isModify.value) {
        res = await addDemandApi({ ...form, about: aboutMap.get(props.about) })
    } else {
        res = await editStatus({ id: props.tableRow._id, ...form })
    }
    if (res.code !== 201) return ElMessage.error(res.errors.msg)
    ElMessage.success(res.msg)
    emit('addSuccess')
    handleClose()
}

const resetForm = () => {
    form.name = ''
    form.remark = ''
    form.person = []
    form.time = ''
    isModify.value = false
}

const addDemand = () => {
    drawer.value = true
}
const handleClose = () => {
    drawer.value = false
    resetForm()
}
// watch(drawer, (v) => {
//     if (!v) resetForm()
// })

defineExpose({ form, addDemand, isModify })
</script>


<style scoped lang='less'>
.bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 20px;
}
</style>