<template>
    <div class="pane_account">
        <el-form ref="formRef" :model="form" :rules="rules" label-width="60px" size="default" status-icon>
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" show-password />
            </el-form-item>

        </el-form>
    </div>
</template>


<script setup lang='ts'>
import type { FormRules, ElForm } from 'element-plus';
import { reactive, ref } from 'vue';
import { login } from '@/service/api';


const form = reactive({
    username: '',
    password: ''
})
const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 12, message: '用户名长度在3 - 12个字符之间', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '密码长度不能小于6', trigger: 'blur' },
    ],
})

const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = () => {
    formRef.value?.validate(async vali => {
        if (vali) {
            console.log('验证成功');
            const params = {

            }
            const res = await login(form)
        } else {
            console.log('验证失败');

        }
    })
}

defineExpose({
    loginAction
})

</script>


<style scoped lang='less'>
.pane_account {}
</style>