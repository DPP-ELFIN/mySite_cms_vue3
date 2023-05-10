<template>
    <div class="right_bar">
        <el-badge :value="12" class="icon">
            <el-icon size="28">
                <ChatDotSquare />
            </el-icon>
        </el-badge>

        <div class="user">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <el-dropdown>
                <span class="el-dropdown-link">
                    Dropdown List
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item icon="Close">退出登录</el-dropdown-item>
                        <el-dropdown-item icon="InfoFilled" divided>个人信息</el-dropdown-item>
                        <el-dropdown-item icon="Unlock">修改密码</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

    </div>
</template>


<script setup lang='ts'>


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