<template>
  <el-steps :active="5" align-center>
  <el-step title="上传图片" icon="el-icon-upload"></el-step>
  <el-step title="图像灰度化" icon="el-icon-brush"></el-step>
  <el-step title="图像二值化" icon="el-icon-film"></el-step>
  <el-step title="图像形态学处理" icon="el-icon-magic-stick"></el-step>
  <el-step title="" icon="el-icon-printer"></el-step>
  <el-step title="OCR识别" icon="el-icon-printer"></el-step>
</el-steps>
</template>

<script>
export default {
    name: "Step",

}
</script>

<style>
.el-steps {
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
    padding: 0;
}
</style>