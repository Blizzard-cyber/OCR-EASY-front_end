<template>
<div class="block">
  <el-table
    :data="tableData.filter(data => !search || data.date.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="行号"
      prop="col"
      width="90%">
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

<script type="text/javascript">
import bus from '@/common/bus'
  export default {
    data() {
      return {
        tableData: [{
          col: '1',
          date: '王小虎',
        }],
        search: ''
      }
    },
    mounted() {
      bus.$on('result', (data) => {
        console.log(data.context)
        this.tableData[0].date = data.context[0];
      })
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
  animation: animated-border 1.5s infinite;
  height: 90%; 
  float: left;
  text-align: left;
  text-indent:2em;
  background: 
  linear-gradient(to left, #02a6b5, #02a6b5) left top no-repeat,
	linear-gradient(to bottom, #02a6b5, #02a6b5) left top no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) right top no-repeat,
	linear-gradient(to bottom, #02a6b5, #02a6b5) right top no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) left bottom no-repeat,
	linear-gradient(to bottom, #02a6b5, #02a6b5) left bottom no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) right bottom no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) right bottom no-repeat;
	background-size: 3px 20px, 20px 3px, 3px 20px, 20px 3px;
  border:1px solid #BEBEBE;
  background-color: #FFFFF0;
  margin-top: 75px;
  width: 70%;
  margin-left:15%;
  margin-right:15%;
  margin-bottom: 75px;
}
</style>