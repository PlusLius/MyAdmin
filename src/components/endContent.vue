<template>
    <div class="content">
        <myConHead></myConHead>
        <myConBody></myConBody>
        <myFooter></myFooter>
    </div>
</template>

<script>
import myConHead from "../components/endContentHeader"
import myFooter from "../components/endContentFooter"
import myConBody from "../components/endContentBody"

export default {
  components:{
      myConHead,
      myFooter,
      myConBody
  }
}
</script>

<style scoped>
    .content {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
