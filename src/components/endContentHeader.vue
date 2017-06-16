<template>
  <div class="box">
     <div class="boxLeft">
         <div class="headFont">
           {{this.$route.meta.conHeadFont}}
         </div>
     </div>
     <div class="boxRight" v-show="!$route.meta.isHidden">
          <el-select v-model="value" placeholder="请选择" class="select">
                <el-option
                v-for="item in getConHeadOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
          </el-select>
          <el-input
            placeholder="请输入关键字"
            icon="search"
            v-model="input2"
            :on-icon-click="handleIconClick"
            class="search"
            >
          </el-input>
          <el-button type="warning" class="btn">查询</el-button>
           <el-button type="info"  class="btn">添加</el-button>
     </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
      return {
        value: ''
      }
    },
  computed: {
    ...mapGetters([
      'getConHeadOptions',
    ])
  }
}
</script>


<style scoped>
    .box {
        display: flex;
        box-sizing: border-box;
        padding:0 20px;
        min-height:60px;
        border-bottom:1px solid #ccc;
        font-size: 14px;
        color:#444444;
    }
    .boxLeft {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }
    .boxRight {
        flex-grow:1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .select {
        width: 130px;
        margin-right: 10px;
    }
    .search {
        width:150px;
        margin-right: 10px;
    }
</style>
