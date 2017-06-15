<template>
    <div class="endContentBoyBox">

          <el-table
            :data="getPubList"
            v-loading.body="loading"
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
        :data="getDevList"
        max-height="377"
        border
        style="width: 100%"
        v-loading.body="loading"
        v-if="$route.name == 'device'"
        >
        <el-table-column
          fixed
          prop="devCode"
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
          prop="devClass"
          label="设备类型编码"
        >
        </el-table-column>
        <el-table-column
          prop="mac"
          label="Mac地址"
        >
        </el-table-column>
        <el-table-column
          prop="versiton"
          label="设备版本"
        >
        </el-table-column>
        <el-table-column
          prop="pubId"
          label="所属公众号ID"
        >
        </el-table-column>
        <el-table-column
          prop="devClass"
          label="所属公众号设备ID"
        >
        </el-table-column>
        <el-table-column
          prop="ticket"
          label="所属公众号设备ticket"
        >
        </el-table-column>
        <el-table-column
          prop="more"
          label="备注"
        >
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
    created(){
        setTimeout(() => {
          this.loading = false;
        }, 1000);
    },
    computed:{
      ...mapGetters([
        'getPubList',
        'getDevList'
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
      },
      handleEdit(index, row) {
        console.log(index, row);
        if(this.$route.name == "publicSignal"){
          this.$router.replace("/menu/publicSignalEdit")
        }
        else if (this.$route.name == "device"){
          this.$router.replace("/menu/deviceEdit")
        }
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    data() {
      return {
         loading: true
      }
    }
}
</script>

<style scoped>

</style>
