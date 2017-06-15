<template>
    <div class="endSlider">
        <el-row class="tac">
            <el-col :span="8" class="el-Control">
              
                <el-menu :default-active="$route.name" class="el-menu-vertical-demo">
                    <el-menu-item index="publicSignal"  @click="goPubSingal"><i class="el-icon-setting"></i>公众号管理</el-menu-item>
                    <el-menu-item index="device"  @click="goDevice"><i class="el-icon-setting"></i>设备管理</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <router-view class="MainContent" :key="key"></router-view>
    </div>
</template>

<script>

export default {
  data(){
      return {
        fontS:"公众号管理",
        fontD:"设备管理",
        optionsS:[{
          value: '选项1',
          label: '公众号app_id'
        }, {
          value: '选项2',
          label: '公众号名称'
        }],
        optionsD:[{
          value: '选项1',
          label: '设备编码'
        }, {
          value: '选项2',
          label: '设备类型'
        },{
          value: '选项3',
          label: '所属公众号ID'
        }]
      }
  },
  methods:{
      goPubSingal(){
          this.$store.commit("changeConHeadFont",this.fontS)
          this.$store.commit("changeConHeadOptions",this.optionsS)
          this.$store.dispatch("getPubList")
          this.$router.replace({path:"/menu/publicSignal"})
      },
      goDevice(){
          this.$store.commit("changeConHeadFont",this.fontD)
          this.$store.commit("changeConHeadOptions",this.optionsD)
          this.$store.dispatch("getDevList")
          this.$router.replace({path:"/menu/device"})
      }
  },
  computed:{
      key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
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
    .endSlider {
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: flex-start;
    }
</style>

