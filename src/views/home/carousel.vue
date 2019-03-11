<template>
    <el-carousel height="100%">
      <el-carousel-item v-for="item in 2" :key="item">
          <h2>广州科琅医疗科技有限公司</h2>
          <div class="mask"></div>
      </el-carousel-item>
    </el-carousel>
</template>
<style scoped>
.el-carousel {
    height: 100%;
}
</style>
<style>
.el-carousel__item:nth-child(3) {
    background: url("../../assets/background_1.jpg") center;
}
.el-carousel__item:last-child {
    background: url("../../assets/background_2.jpg") center;
}
.el-carousel__item h2 {
    position: absolute;
    z-index: 1;
    top: 20%;
    color: #fff;
    left: 50%;
    margin-left: -6em;
}
.mask {
    background: #000;
    opacity: 0.6;
    width: 100%;
    height: 100%;
}
</style>