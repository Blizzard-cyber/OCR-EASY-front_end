<template>
  <el-steps :active="1">
  <el-step title="步骤 1" icon="el-icon-edit"></el-step>
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
    margin-left: 20%;
    margin-right: 20%;
    padding: 0;
}
</style>