<template>
    <el-row :type="!isMobile ? 'flex' : ''" class="row-bg" justify="center">
        <el-col :xs="24" :sm="11" :md="9" :lg="9" :xl="7" class="content">
            <img :src="data.image" />
        </el-col>
        <el-col :xs="24" :sm="11" :md="9" :lg="9" :xl="7" class="content">
            <h3>{{data.title}}</h3>
            <p class="text" v-html="data.content"></p>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            datas: null,
            data: {}
        }
    },
    mounted () {
        axios
        .get('./config/home.json')
        .then(response => {
            this.datas = response.data;
            this.data = this.datas[this.$route.query.id];
        });
    },
    watch: {
        '$route' (to) {
            let id = to.query.id;
            this.data = this.datas[id];
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
.content img {
    width: 100%;
}
.content h3 {
    margin: 0;
}
.text {
    white-space: pre-wrap;
}
</style>