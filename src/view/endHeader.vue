<template>
    <div class="endSliderBox">
        <div class="endHeaderBox">
            <div class="endLogo">{{"公众号管理后台"}}</div>
            <div class="endInfo">
                <div class="endAdmin">{{"admin"}}</div>
                <div class="endControl">{{"退出"}}</div>
            </div>
        </div>

        <div class="endSlider">
            <el-row class="tac">
                <el-col :span="8">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-menu-item index="1"><i class="el-icon-setting"></i>公众号管理</el-menu-item>
                        <el-menu-item index="2"><i class="el-icon-setting"></i>设备管理</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
   methods:{
       
   }
}
</script>

<style scoped>
    .endHeaderBox {
        width:100%;
        min-height: 50px;
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 20px;
        background: skyblue;
    }
    .endLogo {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }
    .endInfo {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
        background:yellowgreen;
    }
    .endAdmin {
        padding-right:20px;
    }
    .endSliderBox,.endSlider {
        height:100%;
    }
    .endSlider {
        background: #eef1f6;
         width:200px
    }
    .el-menu-vertical-demo {
        width:200px
    }
</style>

