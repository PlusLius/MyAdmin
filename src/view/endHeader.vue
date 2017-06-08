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

        <div class="view">
            <div class="publicHeader">
                <div class="publicInfoBox">
                    {{"公众号管理"}}
                </div>
                <div class="publicSearchBox">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-input
                    placeholder="请输入关键字"
                    icon="search"
                    v-model="input2"
                    :on-icon-click="handleIconClick">
                    </el-input>
                   <el-button type="warning">警告按钮</el-button>
                   <el-button type="info">信息按钮</el-button>
                </div>
            </div>
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
        background: #4DA5FF;
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

