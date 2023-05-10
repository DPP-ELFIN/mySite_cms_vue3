<template>
    <div class="main_header">
        <div class="icon">
            <el-icon size="28" @click="handleExpand">
                <component :is="isExpand?'Expand':'Fold'"></component>
            </el-icon>

            <div class="bread">bread</div>
        </div>
        <RightBar />
    </div>
</template>


<script setup lang='ts'>
import RightBar from './c-comps/RightBar.vue';
import { ref } from 'vue';
const emit = defineEmits(['expandChange'])
const isExpand = ref(true)
const handleExpand = () => {
    isExpand.value = !isExpand.value
    emit('expandChange', isExpand.value)
}
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