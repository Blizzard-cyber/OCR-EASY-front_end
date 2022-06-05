<template>
  <div class="text">
    <el-table :data="tableData" height="432" stripe style="width: 100%">
      <el-table-column prop="no" label="列" width="150"> </el-table-column>
      <el-table-column prop="context" label="识别内容" width="650">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TextRes",
  data() {
    return {
      tableData: [],
    };
  },
  mounted: {
    //获取数据
    getData() {
      axios.get("http://172.0.0.1:8000/api/show_context");
      then((response) => (this.tableData = response)).catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
.text {
  margin-top: 75px;
  width: 800px;
}
</style>