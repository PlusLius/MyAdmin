<template>
    <div class="endSlider">
        <el-row class="tac">
            <el-col :span="8" class="el-Control">
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-menu-item index="1"  @click="demo1"><i class="el-icon-setting"></i>公众号管理</el-menu-item>
                    <el-menu-item index="2"  @click="demo2"><i class="el-icon-setting"></i>设备管理</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  methods:{
      demo1(){
          router.replace("")
      },
      demo2(){
      }
  }
}
</script>
<style scoped>
    .tac {
        height: 100%;
    }
    .el-Control {
        height: 100%;
    }
    .el-menu-vertical-demo {
        min-width: 160px;
        height: 100%;
    }
</style>

