<template>
    <div class="endContentBoyBox">

          <el-table
            :data="getPubList"
            border
            style="width: 100%"
            max-height="377"
            v-if="$route.name == 'publicSignal' "
           >
            <el-table-column
            fixed
            prop="appId"
            label="app_id"
            width="150">
            </el-table-column>
            <el-table-column
            prop="appSecret"
            label="appSecret"
            width="120">
            </el-table-column>
            <el-table-column
            prop="wexiId"
            label="微信ID"
            width="120">
            </el-table-column>
            <el-table-column
            prop="token"
            label="token"
            width="120">
            </el-table-column>
            <el-table-column
            prop="url"
            label="通信服务器地址"
            width="300">
            </el-table-column>
            <el-table-column
            prop="redirect"
            label="重定向地址"
            width="120">
            </el-table-column>
            <el-table-column
            prop="deviceId"
            label="设备ID"
            width="120">
            </el-table-column>
            <el-table-column
            prop="name"
            label="名称"
            width="120">
            </el-table-column>
            <el-table-column
            prop="modeId"
            label="升级模版ID"
            width="120">
            </el-table-column>
            <el-table-column
            prop="sendId"
            label="推送开门信息模版ID"
            width="120">
            </el-table-column>
            <el-table-column
            prop="warnId"
            label="警告模版ID"
            width="120">
            </el-table-column>
            <el-table-column
            prop="key"
            label="AES_key"
            width="120">
            </el-table-column>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="160">
            <template scope="scope">
                 <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>

        <el-table
        :data="tableData"
        max-height="377"
        border
        style="width: 100%"
        v-if="$route.name == 'device'"
        >
        <el-table-column
          fixed
          prop="date"
          label="设备编码"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="设备列表"
          width="120"
          :filters="[{ text: '网关', value: '网关' }, { text: '锁', value: '锁' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template scope="scope">
            <el-tag
              :type="scope.row.tag === '网关' ? 'primary' : 'success'"
              close-transition>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="设备类型编码"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Mac地址"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="address"
          label="设备版本"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="address"
          label="所属公众号ID"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="address"
          label="所属公众号设备ID"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="address"
          label="所属公众号设备ticket"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="address"
          label="备注"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="160">
            <template scope="scope">
              <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    // created(){
    //    this.$store.dispatch("getPubList")
    // },
    computed:{
      ...mapGetters([
        'getPubList'
      ])
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    },
    data() {
      return {
        // tableData4: [{
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // }, {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // }, {
        //   date: '2016-05-08',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // }, {
        //   date: '2016-05-06',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // }],
        // tableData: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   tag: '网关'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄',
        //   tag: '锁'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄',
        //   tag: '网关'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄',
        //   tag: '锁'
        // }]
      
      }
    }
}
</script>

<style scoped>

</style>
