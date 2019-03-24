<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="22" :sm="22" :md="14" :lg="14" :xl="12">
        <!-- <el-form class="form" label-position="top">
            <p>问卷 ID:{{datas.id}}</p>
            <form-item :question="question" v-for="question in datas.questions"></form-item>
        </el-form> -->
        <input type='file' capture='camera' id='input'>
        <canvas id="canvas"></canvas>
        <signature></signature>
        </el-col>
    </el-row>
</template>
<script>
// import axios from 'axios'
import signature from '../../components/signature.vue'
// import PDFJS from 'pdfjs-dist/build/pdf'
// import formItem from './form-item.vue'

export default {
  name: 'app',
  components: {
    signature
  },
  data () {
    return {
      datas: {}
    }
  },
  mounted () {
    // axios
    //   .get('./config/questions.json')
    //   .then(response => (this.datas = response.data))
    var input = document.getElementById('input');
    // function picToBlob () {
    //   PDFJS.getPdf(input.files[0], function getPdfHelloWorld(data) {
    //     var pdf = new PDFJS.PDFDoc(data);
    //     var page = pdf.getPage(1);
    //     var scale = 1.5;
    //     var canvas = document.getElementById('canvas');
    //     var context = canvas.getContext('2d');
    //     canvas.height = page.height * scale;
    //     canvas.width = page.width * scale;
    //     page.startRendering(context);
    //   });
    // }
    // input.addEventListener('change', picToBlob, false);
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