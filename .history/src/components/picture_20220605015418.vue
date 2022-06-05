<template>
  <div class="block">
  <div class="block1">
    <span class="demonstration">1.输入图像</span>
    <el-image :src="src"></el-image>
  </div>
  <div class="block2">
    <span class="demonstration">2.图像灰度化</span>
    <el-image :src="src"></el-image>
  </div>
  <br>
   <div class="block1">
    <span class="demonstration">3.图像二值化</span>
    <el-image :src="src"></el-image>
  </div>
  <div class="block2">
    <span class="demonstration">4.图像滤波</span>
    <el-image :src="src"></el-image>
  </div>
</div>
</template>

<script type="text/javascript">
import bus from '@/common/bus'
export default {
    name: ' PictureSource',
    data() {
      return {
        ori_photo: ''
      }
    },
    mounted(){
      bus.$on('result', (data) => {
        this.ori_photo = data.src.;
      })
    }
  }

  // data() {
  //   let validateImage = (rule, value, callback) => {
  //     //验证器
  //     if (!this.checkImgSuccess) {
  //       //为true代表图片在  false报错
  //       callback(new Error("请上传图片"));
  //     } else {
  //       callback();
  //     }
  //   };
  //   return {
  //     rules: {
  //       //校验规则
  //       posterList: [
  //         { required: true, validator: validateImage, trigger: "change" },
  //       ],
  //     },
  //     checkImgSuccess: true,
  //   };
  // },
  // methods: {
  //   //文件上传成功时钩子
  //   onSuccess(response, file, fileList) {
  //     this.$refs.ruleForm.clearValidate(); //上传成功清除校验
  //     this.checkImgSuccess = true;
  //   },
  //   //文件列表移除文件时的钩子
  //   onRemove(file, fileList) {
  //     this.checkImgSuccess = false; //检查图片是否加载成功
  //     this.$refs.ruleForm.validate(); //删除图片,重新触发校验
  //   },
  //   addSubmit() {
  //     this.$refs.ruleForm.validate((valid) => {
  //       if (valid) {
  //         //判断校验是否为true  , true就是全部规则的内容都存在
  //         let params = {
  //           //给后端的参数
  //           title: this.addForm.posterTitle,
  //           url: this.imageUrl,
  //           seqNum: this.addForm.seqNum,
  //           type: this.pageType,
  //         };
  //         addPoster(params).then((res) => {
  //           this.getPostersPage();
  //           this.crePosterDialog = false;
  //         });
  //       } else {
  //         throw new Error("提交出错");
  //       }
  //     });
  //   },
  // },

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