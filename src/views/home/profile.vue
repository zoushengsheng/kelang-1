<template>
    <el-row :type="!isMobile ? 'flex' : ''" class="row-bg" justify="center">
        <el-col :xs="24" :sm="18" :md="14" :lg="12" :xl="12" class="content">
            <el-menu mode="vertical" router :default-active="active" v-if="!isMobile && showMenu" class="listMenu">
                <el-menu-item index="/home/profile?id=scientific">科研转化服务</el-menu-item>
                <el-menu-item index="/home/profile?id=project">项目申报服务</el-menu-item>
                <el-menu-item index="/home/profile?id=medical">医疗器械注册体系咨询服务</el-menu-item>
                <el-menu-item index="/home/profile?id=consultation">临床试验咨询服务</el-menu-item>
            </el-menu>
            <div v-for="item in data" :key="item" class="item">
                <h3>{{item.title}}</h3>
                <img :src="publicPath + img" class="image" v-for="img in item.image" :key="img"/>
                <div class="text" v-html="item.content" v-if="item.content"></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            datas: null,
            data: {},
            active: null,
            id: null,
            publicPath: null,
            showMenu: false
        }
    },
    mounted () {
        axios
        .get('./config/home.json')
        .then(response => {
            this.datas = response.data;
            this.data = this.datas[this.$route.query.id];
        });
        let id = this.$route.query.id || '';
        this.active = `/home/profile?id=${id}`;
        this.showMenu = ['scientific', 'project', 'medical', 'consultation'].indexOf(id) > -1;
        this.publicPath = process.env.BASE_URL;
    },
    watch: {
        '$route' (to) {
            let id = to.query.id;
            this.data = this.datas[id];
            this.active = `/home/profile?id=${id}`;
            this.showMenu = ['scientific', 'project', 'medical', 'consultation'].indexOf(id) > -1;
        }
    },
    computed: {
        isMobile () {
            return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);
        }
    }
}
</script>
<style scoped>
.content {
    box-sizing: border-box;
    padding: 20px;
}
.content .image {
    width: 100%;
}
.content h3 {
    margin: 0;
    border-left: 5px solid #409EFF;
    padding: 0.5em;
    margin: 1em 0;
}
.text {
    text-indent:2em;
    white-space: pre-wrap;
}
.listMenu {
    position: absolute;
    top: 20px;
    width: 200px;
    margin-left: -220px;
}
.listMenu .is-active {
    border-right: 3px solid #409EFF;
}
</style>