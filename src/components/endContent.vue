<template>
    <div class="content">
        <myConHead></myConHead>
        <myConBody v-if="!$route.meta.isHidden"></myConBody>
        <myPubEdit></myPubEdit>
        <myFooter></myFooter>
    </div>
</template>

<script>
import myConHead from "../components/endContentHeader"
import myFooter from "../components/endContentFooter"
import myConBody from "../components/endContentBody"
import myPubEdit from "../components/endPubEdit"

export default {
  components:{
      myConHead,
      myFooter,
      myConBody,
      myPubEdit
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
