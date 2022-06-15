<template>
  <div class="block">
  <div class="block1">
    <span class="demonstration">1.输入原图像</span>
    <el-image :src="ori_photo"></el-image>
  </div>
  <div class="block2">
    <span class="demonstration">2.图像灰度化</span>
    <el-image :src="gray_photo"></el-image>
  </div>
  <br>
   <div class="block1">
    <span class="demonstration">3.图像二值化</span>
    <el-image :src="binary_photo"></el-image>
  </div>
  <div class="block2">
    <span class="demonstration">4.形态学运算</span>
    <el-image :src="morpho_photo"></el-image>
  </div>
   <br>
   <div class="block1">
    <span class="demonstration">5.图像平滑</span>
    <el-image :src="smoothed_photo"></el-image>
  </div>
  <div class="block2">
    <span class="demonstration">6.最终图像</span>
    <el-image :src="final_photo"></el-image>
  </div>
</div>
</template>

<script type="text/javascript">
import bus from '@/common/bus'
export default {
    name:"PictureSource",
    data() {
      return {
        ori_photo: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        gray_photo: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        binary_photo: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        morpho_photo: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        smoothed_photo: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        final_photo: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      }
    },
    mounted(){
      bus.$on('result', (data) => {
        this.ori_photo = 'http://127.0.0.1:8000/media/' + data.ori_photo;
        this.gray_photo = 'http://127.0.0.1:8000/media/' + data.gray_photo;
        this.binary_photo = 'http://127.0.1:8000/media/' + data.binary_photo;
        this.morpho_photo = 'http://127.0.1:8000/media/' + data.morpho_photo;
        this.smoothed_photo = 'http://127.0.1:8000/media/' + data.smoothed_photo;
        this.final_photo = 'http://127.0.01:8000/media/' + data.final_photo;
      })
    }
  }

</script>



<style scoped>

.block1 {
  height: 100%;
  width: 500px;
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 100px;
  display: inline-block;
}
.block2{
  height: 100%;
  width:500px;
 
  display: inline-block;
}
.el-image {
  width: 100%;
  height: 100%;
}
</style>