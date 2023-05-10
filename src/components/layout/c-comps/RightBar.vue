<template>
    <div class="right_bar">
        <el-badge :value="12" class="icon">
            <el-icon size="28">
                <ChatDotSquare />
            </el-icon>
        </el-badge>

        <div class="user">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <el-dropdown @command="clickAbout">
                <span class="el-dropdown-link">
                    Dropdown List
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item icon="Close" command="exit">退出登录</el-dropdown-item>
                        <el-dropdown-item icon="InfoFilled" divided command="info">个人信息</el-dropdown-item>
                        <el-dropdown-item icon="Unlock" command="psw">修改密码</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

    </div>
</template>


<script setup lang='ts'>
import { localCache } from '@/utils/cache';
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus'


const router = useRouter()

const clickAbout = (command) => {
    switch (command) {
        case 'exit':
            handleLogout()
            break;

        case 'info':

            break;

        case 'psw':

            break;

        default:
            break;
    }
}

const handleLogout = () => {
    ElMessageBox.confirm(
        '是否退出登录！',
        '提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            localCache.removeCache('token')
            localCache.removeCache('user')
            router.push('/login')
            ElMessage({
                type: 'success',
                message: '退出登录成功',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消操作',
            })
        })
}

</script>


<style scoped lang='less'>
.right_bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        margin-right: 20px;
    }

    .user {
        display: flex;
        align-items: center;
        justify-content: center;

        .el-avatar {
            margin-right: 10px;
        }
    }
}

.el-dropdown {
    cursor: pointer;
}

.el-dropdown-link:focus {
    outline: 0;
}
</style>