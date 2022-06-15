<template>
<div class="'upload'">
  <div class="'upload-button'">
  <el-upload
    class="upload-img"
    ref="upload"
    action="http://127.0.0.1:8000/api/ocr_rco"
    accept=".jpg"
    :limit="1"
    :on-remove="handleRemove"
    :file-list="fileList"
    :before-upload="onBeforeUpload"
    :on-success="onSuccess"
    list-type="picture"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <!-- <el-button style="margin-left: 10px;" size="small" @click="getresult">获取结果</el-button> -->
    <div slot="tip" class="el-upload__tip">
      只能上传jpg文件，且不超过1MB
    </div>
  </el-upload>
  </div>
  <div class="upload-result">
    <el-button style="margin-left: 650px;margin-top: 20px;" size="small" type="primary" @click="getresult">获取结果</el-button>
    <div slot="tip" class="el-upload__tip">
      请等待5-10s后再获取结果，否则结果可能为空
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
import bus from '@/common/bus'
export default {
  name: "Upload",
  data() {
    return {
      fileList: [],
      Imgresult: [
        {
          
        },
      ],
      id: [],
    };
  },
  methods: {
    onBeforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 4;

      if (!isLt1M) {
        this.$message.error("上传文件大小不能超过 4MB!");
      }
      return isLt1M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onSuccess(res, file, fileList) {
      this.$message.success('图片上传成功');
      this.id = res.id;
    },
    getresult(){
      let self=this;
      this.$axios.get('http://127.0.0.1:8000/api/show_context',
       {
        params: {
         ID:this.id
        }
      }
      )
    .then((response) => {
      var res=response.data.data[0];
      self.Imgresult = res.fields;
     
      bus.$emit('result', self.Imgresult);
      self.$message.success('图片识别成功');
      console.log(self.Imgresult);
    })
    .catch(function (error) {
    console.log(error);
    });


    }

  },
};
</script>

<style  scoped>
.upload{
  display: flex;
  flex-direction: column;
  margin-top: 50px;

}
.el-upload {
  margin-top: 100px;
  vertical-align: middle;
}
.el-button {
  margin-left: 650px;
  float: center;
}
.el-upload__tip {
  text-align: center;
  text-indent: -100px;
  margin-left:0%
}
.upload-button{
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.upload-result{
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  float: left;

}
</style>