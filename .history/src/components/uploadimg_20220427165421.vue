  <template>
  <el-dialog
    :title="title"
    modal-append-to-body
    :visible.sync="visible"
    width="40%"
    style="left: 10%"
    :before-close="cancel"
  >
    <div>
      <div style="margin-bottom: 20px">
        <el-upload
          class="upload-excel"
          ref="upload"
          action="string"
          accept=".xlsx, .xls"
          :limit="1"
          :http-request="httpRequest"
          :file-list="fileList"
        >
          <el-button icon="el-icon-upload" size="small" type="primary"
            >添加上传文件</el-button
          >
        </el-upload>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="cancel()">取 消</el-button>
      <el-button size="small" type="primary" @click="confirm()"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    //控制弹窗显示隐藏
    visible: {
      type: Boolean,
      default: false,
    },

    //接口地址
    url: {
      type: String,
    },
    //弹窗标题
    title: {
      type: String,
    },
  },
  data() {
    return {
      tableHeight: window.innerHeight * 0.6,
      formData: new window.FormData(),
      binary: {}, //导入的文件
      fileId: "",
      fileList: [],
    };
  },
  methods: {
    //  覆盖默认上传行为
    httpRequest(params) {
      this.binary = params.file;
      this.formData.append("grfFile", this.binary);
      this.formData.append("fileId", "grfFile");
    },

    // 取消
    cancel() {
      this.$emit("update:visible", false);
    },
    // 确定
    confirm() {
      //提交的参数具体记得和后端商量一下哈，不然就是坑
      this.$axios({
        url: this.url,
        method: "post",
        data: this.formData,
        processData: false, // 告诉axios不要去处理发送的数据(重要参数)
        contentType: false, // 告诉axios不要去设置Content-Type请求头
      }).then((res) => {
        if (res && res.data.code == "200") {
          this.$emit("update:visible", false);
          this.fileList = [];
          this.formData = new window.FormData();
          this.$message({
            type: "success",
            message: "导入成功",
          });
        } else {
          this.fileList = [];
          this.formData = new window.FormData();
          this.$message({
            type: "error",
            message: "导入失败," + res.data.msg,
          });
        }
      });
    },
  },
};
</script>
<style  scoped>
.el-dialog__body {
  padding: 0 20px;
  max-height: 600px;
  overflow-y: hidden;
}
.input_data {
  margin-bottom: 20px;
}
h3 {
  float: left;
}
</style>  