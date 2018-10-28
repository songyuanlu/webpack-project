<template>
    <div class="view-main">
        <div class="view-side clear">
            <div class="menu">
                <router-link to="/index">首页</router-link>
                <router-link to="/manager">用户管理</router-link>
                <router-link to="/video">视频管理</router-link>
            </div>
            <!-- <el-menu default-active="manager" router="menu.router">
                <el-menu-item index="index">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="manager">
                    <i class="el-icon-document"></i>
                    <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="video">
                    <i class="el-icon-setting"></i>
                    <span slot="title">视频管理</span>
                </el-menu-item>
            </el-menu> -->
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: {
                router: true
            }
        }
    }
};
</script>

<style scoped>
.view-main {
}
</style>

