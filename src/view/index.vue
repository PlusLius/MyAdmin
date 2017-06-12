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
  components: {
      myHeader,
      myMenu
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


