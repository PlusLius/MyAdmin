<template>
    <div class="endSliderBox">
        <div class="endHeaderBox">
            <div class="endLogo">{{"公众号管理后台"}}</div>
            <div class="endInfo">
                <div class="endAdmin">{{"admin"}}</div>
                <div class="endControl">{{"退出"}}</div>
            </div>
        </div>
        <div class="endRightSliserBox">
            <div class="endSlider">
                <el-row class="tac">
                    <el-col :span="8">
                        <el-menu default-active="2" class="el-menu-vertical-demo">
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
                          <el-select v-model="value" placeholder="请选择" class="publicDrop">
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
                        class="publicSearch"
                        >
                        </el-input>
                    <el-button type="warning" class="publicBtn">查询</el-button>
                    <el-button type="info" class="publicBtn">添加</el-button>
                    </div>
                </div>
                <div class="publicTable">
                      <el-table
                        :data="tableData3"
                        border
                        style="width: 100%"
                        >
                        <el-table-column
                        fixed
                        prop="date"
                        label="app_id"
                        width="150">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="appSecret"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="province"
                        label="微信ID"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="city"
                        label="token"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="通信服务器地址"
                        width="300">
                        </el-table-column>
                        <el-table-column
                        prop="zip"
                        label="重定向地址"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="zip"
                        label="公众号证书文件"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="zip"
                        label="设备ID"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="zip"
                        label="名称"
                        width="100">
                        </el-table-column>
                         <el-table-column
                        prop="zip"
                        label="升级模版ID"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="zip"
                        label="推送开门信息模版ID"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="zip"
                        label="警告模版ID"
                        width="100">
                        </el-table-column>
                         <el-table-column
                        prop="zip"
                        label="AES_key"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        prop="zip"
                        label="操作"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                        <template scope="scope">
                            <el-button @click="handleClick" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                      <!--<el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                        prop="date"
                        label="app_id"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="appSecret"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="微信ID">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="token">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="通信服务器地址">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="重定向地址">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="公众号证书文件">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="设备ID">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="名称">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="升级模版ID">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="推送开门信息模版ID">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="警告模版ID">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="AES_key">
                        </el-table-column>
                         <el-table-column
                        prop="address"
                        label="操作">
                        </el-table-column>
                    </el-table>-->
                </div>
            </div>
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
        value: '',
       tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
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
    .endRightSliserBox {
        display: flex;
        height: 100%;
    }
    .endSlider {
        background: #eef1f6;
         width:200px
    }
    .el-menu-vertical-demo {
        width:200px;
    }
    .view {
        float:left;
        width:100%;
        overflow-x: auto;
    }
    .publicHeader {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width:100%;
        height: 56px;
        box-sizing: border-box;
        padding:0 22px;
        border-bottom:1px solid #DEDEDE;
    }
    .publicInfoBox{
        flex-grow:1;
        min-width: 100px;
    }
    .publicSearchBox{
        flex-grow:1;
        display: flex;
        justify-content: flex-end;
        align-content: center;
       
    }
    .publicDrop {
        width:130px;
          margin-right: 10px;
    }
    .publicSearch {
        width: 150px;
         margin-right: 10px;
    }
    .publicBtn {
        min-width: 70px;
    }
 
</style>

