<template>
<div class="block">
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="行号"
      prop="col"
      width:20%
      header-align="center">
    </el-table-column>
    <el-table-column
      label="识别内容"
      prop="date">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click.native.prevent="handleDelete(scope.$index, tableData)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          col: '2016-05-02',
          date: '王小虎',
        }],
        search: ''
      }
    },
    methods: {
     
      handleDelete(index, rows) {
         rows.splice(index, 1);
      }
    },
  }
</script>

<style scoped>
.block {
  margin-top: 75px;
  width: 70%;
  margin-left:15%;
  margin-right:15%;
  margin-bottom: 75px;
}
</style>