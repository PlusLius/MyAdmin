<template>
  <div class="box">
     <div class="boxLeft">
         <slot name="headFont" class="headFont"></slot>
     </div>
     <div class="boxRight">
          <el-select v-model="value" placeholder="请选择" class="select">
                <el-option
                v-for="item in options"
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
export default {
  data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
}
</script>


<style scoped>
    .box {
        display: flex;
        box-sizing: border-box;
        padding:0 20px;
        max-height:60px;
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
