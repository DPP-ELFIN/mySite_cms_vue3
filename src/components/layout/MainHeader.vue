<template>
    <div class="main_header">
        <div class="icon">
            <el-icon size="28" @click="handleExpand">
                <component :is="isExpand?'Expand':'Fold'"></component>
            </el-icon>

            <div class="bread">
                <el-breadcrumb :separator-icon="ArrowRight">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <RightBar />
    </div>
</template>


<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'

import RightBar from './c-comps/RightBar.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import mainChildren from '@/router/mainChildren'


const emit = defineEmits(['expandChange'])
const route = useRoute()
const isExpand = ref(true)
const handleExpand = () => {
    isExpand.value = !isExpand.value
    emit('expandChange', isExpand.value)
}

const handleBreadCrumbs = (path: string, menus: any[]) => {
    // console.log(path);
    // console.log(menus);

    const breadCrumbs: any[] = []
    for (const menu of menus) {
        for (const child of menu.children) {
            if (child.path === path) {
                breadCrumbs.push({ name: menu.meta.name, path: menu.path })
                breadCrumbs.push({ name: child.meta.name, path: child.path })
            }
        }
    }
    return breadCrumbs
}

const breadCrumb = computed(() => {
    return handleBreadCrumbs(route.path, mainChildren as any)
})
// console.log(breadCrumb);

</script>


<style scoped lang='less'>
.main_header {
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        .bread {
            margin-left: 20px;
        }
    }
}
</style>