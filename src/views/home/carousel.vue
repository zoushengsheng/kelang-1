<template>
    <div class="main">
        <div class="content">
            <h2>广州科琅医疗科技有限公司</h2>
            <el-row :type="isMobile ? '' : 'flex'" class="row-bg" justify="center">
                <el-col :xs="24" :sm="24" :md="6" :lg="5" :xl="4">
                    <router-link to="/home/profile?id=scientific">
                        <el-button class="">科研转化和项目申报服务</el-button>
                    </router-link>
                </el-col>
                <el-col :xs="24" :sm="24" :md="6" :lg="5" :xl="4">
                    <router-link to="/home/profile?id=consultation">
                        <el-button class="">临床试验咨询服务</el-button>
                    </router-link>
                </el-col>
                <el-col :xs="24" :sm="24" :md="6" :lg="5" :xl="4">
                    <router-link to="/home/profile?id=medical">
                        <el-button class="">医疗器械注册体系咨询服务</el-button>
                    </router-link>
                </el-col>
            </el-row>
        </div>
        <div class="mask"></div>        
    </div>
</template>
<style scoped>
.main {
    width: 100%;
    height: 100%;
    background: url("../../assets/background_1.jpg") center;
    position: relative;
}
.main .content {
    position: absolute;
    z-index: 1;
    top: 20%;
    color: #fff;
    left: 50%;
    width: 100%;
    margin-left: -50%;
    text-align: center;
}
.main .content .el-button {
    width: 250px;
    background: none;
    color: #fff;
    margin: 0.5em;
}
.main .mask {
    background: #000;
    opacity: 0.7;
    width: 100%;
    height: 100%;
}
@media screen and (min-width: 900px) {
  .main .content h2 {
      font-size: 36px;
  }
  .main .content .el-button {
      font-size: 18px;
  }
}
</style>
<script>
export default {
    mounted () {
        document.getElementsByClassName('main')[0].style.height = `${window.innerHeight - 62}px`;
    },
    computed: {
        isMobile () {
            return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        }
    }
}
</script>