<template>
    <div class="box">
        <myHeader></myHeader>
        <div class="controlBox"> 
            <myMenu></myMenu>
        </div>
    </div>
</template>

<script>
import myHeader from "../components/endHeader"
import myMenu from "../components/endLeftMenu"


export default {
  data(){
      return {
        fontS:"公众号管理",
        optionsS:[{
            value: '公众号app_id',
            label: '公众号app_id'
            }, {
            value: '公众号名称',
            label: '公众号名称'
        }],
        data:[]
      }
  },
  components: {
      myHeader,
      myMenu
  },
  created(){
     this.$store.commit("changeConHeadFont",this.fontS)
     this.$store.commit("changeConHeadOptions",this.optionsS)
     this.$store.dispatch("getPubList")
  }
}
</script>

<style scoped>
    .box {
        height: 100%;
    }
    .controlBox {
        width:100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
    }
</style>


