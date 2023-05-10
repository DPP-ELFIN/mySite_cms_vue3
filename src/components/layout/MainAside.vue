<template>
    <div class="main_aside">
        <div class="logo">
            <img src="@/assets/logo.svg" alt="">
            <h3 class="title">DPP的后台</h3>
        </div>
        <div class="menu">
            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                default-active="11" text-color="#fff" @open="handleOpen" @close="handleClose">
                <el-sub-menu v-for="subMenu in mainChildren" :key="subMenu.meta?.id" :index="subMenu.meta?.id + ''">
                    <template #title>
                        <el-icon>
                            <!-- <Monitor /> -->
                            <component :is="subMenu.meta?.icon"></component>
                        </el-icon>
                        <span>{{ subMenu.meta?.name }}</span>
                    </template>
                    <el-menu-item v-for="subItem in subMenu.children" :key="subItem.meta?.id"
                        :index="subItem.meta?.id + ''">{{
                            subItem.meta?.name }}</el-menu-item>
                </el-sub-menu>

            </el-menu>
        </div>
    </div>
</template>


<script setup lang='ts'>
import mainChildren from '@/router/mainChildren'
const handleOpen = () => { }
const handleClose = () => { }
</script>


<style scoped lang='less'>
.main_aside {
    height: 100%;
    display: flex;
    flex-direction: column;

    .logo {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(84, 92, 100);
        color: white;

        img {
            width: 40px;
            height: 40px;
        }
    }

    .menu {
        flex: 1;

        .el-menu {
            border-right: none;
            height: 100%;

            .el-menu-item:hover {
                color: white;
            }

            .el-menu-item.is-active {
                color: #545c64;
                background-color: #ffd04b;
            }
        }
    }
}
</style>