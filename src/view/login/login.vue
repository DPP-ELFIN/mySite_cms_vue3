<template>
    <div class="login">
        <div class="panel">
            <h1>DPP的后台</h1>
            <div class="tabs">
                <el-tabs type="border-card" stretch v-model="activeTabs" @tab-change="tabChange">
                    <el-tab-pane name="account">
                        <template #label>
                            <div class="label">
                                <el-icon>
                                    <User />
                                </el-icon>
                            </div>
                            账号密码
                        </template>
                        <PaneAccount />
                    </el-tab-pane>
                    <el-tab-pane name="phone">
                        <template #label>
                            <div class="label">
                                <el-icon>
                                    <Iphone />
                                </el-icon>
                            </div>

                            手机登录
                        </template>
                        <PanePhone />
                    </el-tab-pane>
                </el-tabs>

            </div>
            <div class="controls">
                <el-checkbox v-model="isKeep" label="记住密码" size="large" />
                <el-link type="primary">忘记密码</el-link>
            </div>
            <el-button type="primary">登录</el-button>
        </div>
    </div>
</template>


<script setup lang='ts'>
import PaneAccount from './c-comps/PaneAccount.vue'
import PanePhone from './c-comps/PanePhone.vue'
import { ref } from 'vue';

const isKeep = ref(false)
const activeTabs = ref('account')
const tabChange = (v) => {

}

</script>


<style scoped lang='less'>
.login {
    width: 100%;
    height: 100%;
    background: url('../../assets/img/login-background.jpg') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .panel {
        width: 330px;
        margin-bottom: 150px;
        background-color: white;
        border-radius: 15px;
        padding: 0 30px 30px 30px;

        h1 {
            text-align: center;
        }

        .tabs {
            .label {
                margin-right: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .el-button {
            width: 100%;
        }
    }
}
</style>