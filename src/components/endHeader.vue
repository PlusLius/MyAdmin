<template>
    <div class="endSliderBox">
        <div class="endHeaderBox">
            <div class="endLogo">{{"公众号管理后台"}}</div>
            <div class="endInfo">
                <div class="endAdmin">{{"admin"}}</div>
                <div class="endControl">{{"退出"}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

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
</style>

