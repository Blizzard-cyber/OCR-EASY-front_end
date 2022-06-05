<template>
  <el-steps :active="1" align-center>
  <el-step title="上传图片" icon="el-icon-upload"></el-step>
  <el-step title="步骤 2" icon="el-icon-upload"></el-step>
  <el-step title="步骤 3" icon="el-icon-picture"></el-step>
  <el-step title="步骤 4" icon="el-icon-picture"></el-step>
  <el-step title="步骤 5" icon="el-icon-picture"></el-step>
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