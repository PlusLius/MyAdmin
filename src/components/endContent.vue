<template>
    <div class="content">
        <myConHead>
            <div slot="headFont">公众号管理</div>
        </myConHead>
        <myFooter></myFooter>
    </div>
</template>

<script>
import myConHead from "../components/endContentHeader"
import myFooter from "../components/endContentFooter"
export default {
  components:{
      myConHead,
      myFooter
  }
}
</script>

<style scoped>
    .content {
        width: 100%;
        height: 100%;
    }
</style>
