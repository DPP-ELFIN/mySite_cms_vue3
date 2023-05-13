<template>
    <div class="main">
        <el-container>
            <el-aside :width="isExpand ? '200px' : '60px'">
                <MainAside :isExpand="isExpand" />
            </el-aside>
            <el-container>
                <el-header>
                    <MainHeader @expandChange="expandChange" />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script setup lang='ts'>
import MainAside from '@/components/layout/MainAside.vue';
import MainHeader from '@/components/layout/MainHeader.vue';
import { ref } from 'vue';

const isExpand = ref(true)
const expandChange = (val) => {
    isExpand.value = val
}
</script>


<style scoped lang='less'>
.main {
    height: 100%;

    .el-aside {
        transition: width 0.3s ease;
    }

    .el-header {
        background-color: white;
    }

    .el-container {
        height: 100%;
        background-color: #e4e3e3;
    }
}
</style>