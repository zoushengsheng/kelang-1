<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="22" :sm="22" :md="14" :lg="14" :xl="12">
        <el-form class="form" label-position="top">
            <p>问卷 ID:{{datas.id}}</p>
            <form-item :question="question" v-for="question in datas.questions"></form-item>
        </el-form>
        <signature></signature>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios'
import signature from '../../components/signature.vue'
import formItem from './form-item.vue'


export default {
  name: 'app',
  components: {
    signature,
    formItem
  },
  data () {
    return {
      datas: {}
    }
  },
  mounted () {
    axios
      .get('./config/questions.json')
      .then(response => (this.datas = response.data))
  },
  methods: {
    onSubmit () {}
  }
}
</script>
<style scoped>
.row-bg {
  margin: 20px 0;
}
.form {
  padding: 20px;
  border-radius: 10px;
  background: #fff;
}
</style>