<template>
    <div class="endContentFooterBox" v-show="!$route.meta.isHidden">
       <el-button type="primary" class="btn">上一页</el-button>
       <el-button type="primary" class="btn">下一页</el-button>
       <el-input v-model="input" placeholder="当前 / 页" class="btn page"></el-input>
       <el-button type="success" class="btn">跳转</el-button>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .endContentFooterBox {
        display: flex;
        min-height: 35px;
        margin-top:39px;
        box-sizing: border-box;
        padding:0 20px;
        justify-content: flex-end;
    }
    .endContentFooterBox .btn,.page {
        margin:0 5px;
    }
    .btn {
        width: 80px;
    }
</style>
