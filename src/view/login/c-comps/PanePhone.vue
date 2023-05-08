<template>
    <div class="pane_phone">
        <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="90px" size="default" status-icon>
            <el-form-item label="手机号码" prop="phone">
                <el-input v-model="form.phone" />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model="form.code">
                    <template #append>
                        <el-button type="primary" @click="getCode">
                            获取验证码
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>

        </el-form>
    </div>
</template>


<script setup lang='ts'>
import type { FormRules } from 'element-plus';
import { reactive } from 'vue';

const form = reactive({
    phone: '',
    code: ''
})
const rules = reactive<FormRules>({
    phone: [
        { required: true, message: '请输入手机号码', trigger: 'blur' },
        { min: 11, max: 11, message: '手机号码格式错误', trigger: 'blur' },

    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
})

const getCode = () => {
    console.log(1);

}

</script>


<style scoped lang='less'>
.pane_phone {}
</style>