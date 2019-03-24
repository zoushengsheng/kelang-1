<template>
    <el-container>
        <el-header height="auto">
            <div class="header">
                <img src="../../assets/logo.png" />
                <el-button icon="el-icon-more" v-if="isMobile" @click="showMenu = !showMenu"></el-button>
                <el-collapse-transition>
                    <el-menu :mode="isMobile ? 'vertical' : 'horizontal'" v-show="showMenu" router :default-active="activeIndex" @select="isMobile ? showMenu = !showMenu : ''">
                        <el-menu-item index="/home/">首页</el-menu-item>
                        <el-menu-item index="/home/profile?id=company">公司介绍</el-menu-item>
                        <el-submenu index="3">
                            <template slot="title">项目介绍</template>
                            <el-menu-item index="/home/profile?id=scientific">科研转化服务</el-menu-item>
                            <el-menu-item index="/home/profile?id=project">项目申报服务</el-menu-item>
                            <el-menu-item index="/home/profile?id=medical">医疗器械注册体系咨询服务</el-menu-item>
                            <el-menu-item index="/home/profile?id=consultation">医疗器械临床试验咨询服务</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="/home/profile?id=teamResources">团队资源</el-menu-item>
                        <el-menu-item index="/home/profile?id=contactUs">联系我们</el-menu-item>
                    </el-menu>
                </el-collapse-transition>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <transition name="el-zoom-in-bottom">
            <el-footer height="auto" v-show="showFooter">
                <p>科琅医疗<br>苏ICP备15008XXX号</p>
            </el-footer>
        </transition>
    </el-container>
</template>
<script>
export default {
    data () {
        return {
            activeIndex: null,
            showMenu: null,
            showFooter: false
        }
    },
    mounted () {
        let id = this.$route.query.id || '';
        this.activeIndex = id ? `/home/profile?id=${id}` : '/home/';
        this.showMenu = !navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        this.showFooter = true;
    },
    computed: {
        isMobile () {
            return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        }
    }
}
</script>
<style scpoed>
.el-header, .el-main {
    background: #fff;
    padding: 0;
}
.el-header {
    border-bottom: solid 1px #e6e6e6;
}
.header {
    max-width: 1024px;
    margin: 0 auto;
}
.header .el-button {
    float: right;
    margin: 7px;
    padding: 12px;
}
.header img {
    height: 55px;
}
.header .el-menu.el-menu--horizontal {
    display: inline-block;
    float: right;
    border-bottom: none;
}
.el-footer {
    text-align: center;
    color: #fff;
    font-size: 15px;
    background-color: #141c2c;
    padding: 10px 0;
}
</style>