<template>
    <div class="main">
        <div class="content">
            <transition name="el-fade-in-linear">
                <h2 v-show="show">广州科琅医疗科技有限公司</h2>
            </transition>
            <transition name="el-fade-in-linear">
                <el-row :type="isMobile ? '' : 'flex'" class="row-bg" justify="center" v-show="show">
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                        <router-link to="/home/profile?id=scientific">
                            <el-button class="">科研转化和项目申报服务</el-button>
                        </router-link>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                        <router-link to="/home/profile?id=consultation">
                            <el-button class="">医疗器械临床试验咨询服务</el-button>
                        </router-link>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                        <router-link to="/home/profile?id=medical">
                            <el-button class="">注册体系咨询服务</el-button>
                        </router-link>
                    </el-col>
                </el-row>
            </transition>
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
.main .content h2{
    font-size: 48px !important;
    margin-bottom: 20px;
}
.main .content .el-button {
    width: 350px;
    background: none;
    color: #fff;
    margin: 0.5em;
    font-size: 26px !important;
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
    data: () => ({
        show: false
    }),
    mounted () {
        document.getElementsByClassName('main')[0].style.height = `${window.innerHeight - 62}px`;
        this.show = true;
    },
    computed: {
        isMobile () {
            return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        }
    }
}
</script>