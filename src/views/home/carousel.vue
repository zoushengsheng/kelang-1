<template>
    <el-carousel height="100%">
      <el-carousel-item v-for="item in 2" :key="item">
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
</style>