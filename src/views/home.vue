<template>
    <div class="view-main">
        <div class="view-side clear">
            <div class="menu">
                <router-link to="/index">首页</router-link>
                <router-link to="/manager">用户管理</router-link>
                <router-link to="/video">视频管理</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.view-main{

}
</style>

