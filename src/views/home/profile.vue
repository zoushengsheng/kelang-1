<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="11" :sm="11" :md="9" :lg="9" :xl="7">
            <img :src="data.image" />
        </el-col>
        <el-col :xs="11" :sm="11" :md="9" :lg="9" :xl="7">
            <div class="content">
                <h3>{{data.title}}</h3>
                <p class="text" v-html="data.content"></p>
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
        '$route' (to, from) {
            let id = to.query.id;
            this.data = this.datas[id];
        }}
}
</script>
<style scoped>
.content {
    padding: 20px 0;
}
.text {
    white-space: pre-wrap;
}
</style>