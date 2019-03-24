<template>
    <el-row :type="!isMobile ? 'flex' : ''" class="row-bg" justify="center">
        <el-col :xs="24" :sm="18" :md="14" :lg="12" :xl="12" class="content">
            <el-menu mode="vertical" router :default-active="active" v-if="!isMobile && showMenu" class="listMenu">
                <el-menu-item index="/home/profile?id=scientific">科研转化服务</el-menu-item>
                <el-menu-item index="/home/profile?id=project">项目申报服务</el-menu-item>
                <el-menu-item index="/home/profile?id=consultation">医疗器械临床试验咨询服务</el-menu-item>
                <el-menu-item index="/home/profile?id=medical">医疗器械注册体系咨询服务</el-menu-item>
            </el-menu>
            <div v-for="item in data" :key="item.title" class="item">
                <h3>{{item.title}}</h3>
                <img :src="publicPath + img" class="image" v-for="(img, index) in item.image" :key="img"/>
                <div :class="active != '/home/profile?id=contactUs' ? 'text' : 'ctext'" v-html="item.content" v-if="item.content"></div>
                <div v-html="item.multiContent" v-if="item.multiContent"></div>
                <div v-if="item.persons">
                    <el-row v-for="personItems in item.persons" :type="isMobile ? '' : 'flex'" class="row-bg" justify="center">
                        <el-col v-for="person in personItems.person" :key="person.name" :xs="24" :sm="24" :md="8" :lg="8" :xl="8" :class="person.showDetail ? 'index-9999' : ''">
                            <div class="introduce" :class="person.showDetail ? 'person-hover' : ''" @mouseover="showDetail(person)" @mouseout="hideDetail(person)">
                                <div class="introduce-wraper">
                                    <div class="img-120">
                                        <img class="img-w100" :src="person.image">
                                    </div>
                                    <p class="person-name">{{person.name}}</p>
                                    <p class="line-bottom"></p>
                                    <p class="person-job">{{person.job}}</p>
                                    <p class="job-describe">{{person.describe}}</p>
                                    <div class="persion-detail" v-show="person.showDetail">
                                        <div class="detail-more" v-html="person.detail"></div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
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
        this.publicPath = process.env.BASE_URL;
        this.showMenu = ['scientific', 'project', 'medical', 'consultation'].indexOf(id) > -1;
    },
    methods: {
        showDetail (person) {
            console.log("aa")
            person.showDetail = true;
        },
        hideDetail (person) {
            console.log("bb")
            person.showDetail = false;
        }
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
    animation-name: fadeInUp;
}
.content h3 {
    margin: 0;
    border-left: 5px solid #409EFF;
    padding: 0.5em;
    margin: 2em 0;
}
.text {
    text-indent:2em;
    white-space: pre-wrap;
    line-height: 32px;
}
.ctext{
    white-space: pre-wrap;
    line-height: 32px;
}
.item {
    margin-bottom: 30px;
}
.listMenu {
    position: absolute;
    top: 20px;
    width: 200px;
    margin-left: -220px;
}
.listMenu .is-active {
    outline: 0;
    background-color: #ecf5ff;
}
.content .el-menu{
    border-right: none !important;;
}

.introduce {
    padding: 0;
    margin-bottom: 65px;
    position: relative;
    background: #fff;
    height: 250px;
    z-index: 1;
}
.introduce-wraper {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    padding-top: 20px;
    z-index: 3;
    background: #fff;
    text-align: center;
}
.introduce .img-120 {
    width: 120px;
    height: 120px;
    margin: 0 auto;
}
.img-w100 {
    max-width: 100%;
    display: block;
}
.introduce .person-name {
    margin-top: 16px;
    font-size: 18px;
    color: #2385D5;
    height: 25px;
    line-height: 25px;
    margin-bottom: 0px;
}
.introduce .line-bottom {
    width: 20px;
    height: 4px;
    margin: 0 auto;
    background: #2385D5;
    margin-top: 6px;
}
.introduce .person-job {
    height: 20px;
    line-height: 20px;
    margin-top: 16px;
    color: #595E61;
    font-size: 14px;
    font-weight: 600;
}
.introduce .job-describe {
    height: 30px;
    line-height: 20px;
    margin-top: 2px;
    color: #787D81;
    font-size: 12px;
}
.introduce .detail-more{
    font-size: 12px;
    line-height: 21px;
    padding: 0 15px;
    text-align: left;
}
.person-hover{
    border: 1px solid #F5F5F5;
}
.index-9999 {
    z-index: 9999;
}
.item {
    padding-bottom: 25px;
}
</style>