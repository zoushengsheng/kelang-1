<template>
    <el-container>
        <el-header height="auto">
            <div class="header">
                <img src="../../assets/logo.png" />
                <el-menu mode="horizontal" router :default-active="activeIndex">
                    <el-menu-item index="/home/">首页</el-menu-item>
                    <el-menu-item index="/home/profile?id=company">公司介绍</el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">项目介绍</template>
                        <el-menu-item index="/home/profile?id=government">政府项目申报</el-menu-item>
                        <el-menu-item index="/home/profile?id=medical">医疗器械法规咨询与临床咨询</el-menu-item>
                        <el-menu-item index="/home/profile?id=research">科研转化平台</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/home/profile?id=teamResources">团队资源</el-menu-item>
                    <el-menu-item index="/home/profile?id=contactUs">联系我们</el-menu-item>
                </el-menu>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer height="auto">
            <p>科琅医疗<br>苏ICP备15008XXX号</p>
        </el-footer>
    </el-container>
</template>
<script>
export default {
    data () {
        return {
            activeIndex: null
        }
    },
    mounted () {
        let id = this.$route.query.id || '';
        this.activeIndex = id ? `/home/profile?id=${id}` : '/home/';
        // let headerHeight =  document.getElementsByClassName('el-main')[0].offsetHeight;
        document.getElementsByClassName('el-main')[0].style.height = `${800}px`;
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
.header img {
    height: 55px;
}
.header .el-menu {
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