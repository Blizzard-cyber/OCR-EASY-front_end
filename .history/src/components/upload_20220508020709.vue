<template>
<div class="'upload'">
  <el-upload
    class="upload-img"
    ref="upload"
    action="http://127.0.0.1:8000/api/ocr_rco"
    accept=" bmp, jpg, png, gif, jpeg"
    :on-remove="handleRemove"
    :file-list="fileList"
    :before-upload="onBeforeUpload"
    :auto-upload="false"
    list-type="picture"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">
      只能上传jpg/png文件，且不超过500kb
    </div>
  </el-upload>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      fileList: [],
      resmsg: [],
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
    submitupload() {
      this.$refs.upload.clearFiles();
    },

    // handleChange(file, fileList) {
    //   if (fileList.length > 0) {
    //     this.form.fileList = [fileList[fileList.length - 1]]; // 这一步，是 展示最后一次选择的csv文件
    //   }
    // },
  },
};
// //上传
// handleChange(file) {
//   // 上传文件推入图库中
//   this.uploadParam.filelist.push(file);
// },
//上传文件
// SubmitEvent(e) {
//   var fd = new FormData();
//   this.uploadParam.imgFileList.forEach((file) => {
//     fd.append("file", file.raw);
//   });
//   axios({
//     url: "http://127.0.0.1:8000/api/ocr_rco",
//     method: "post",
//     headers: { "Content-Type": "multipart/form-data" },
//     data: fd,
//   }).then((res) => {
//     console.log(res);
//   });
// },

// methods: {
//
//   myUpload(fileList) {
//     var form = new FormData();

//     form.append("file", content.file);

//     this.$axios
//       .post(content.action, form)
//       .then((res) => {
//         if (res.data.code != 0) {
//           content.onError("文件上传失败, code:" + res.data.code);
//         } else {
//           content.onSuccess("文件上传成功！");
//         }
//       })
//       .catch((error) => {
//         if (error.response) {
//           content.onError("文件上传失败," + error.response.data);
//         } else if (error.request) {
//           content.onError("文件上传失败，服务器端无响应");
//         } else {
//           content.onError("文件上传失败，请求封装失败");
//         }
//       });
//   },
// submitUpload() {
//   this.$refs.upload.submit();
// },
// },
//上传服务器
// submitUpload() {
//   //判断是否有文件再上传
//   if (this.fileList.length === 0) {
//     return this.$message.warning("请选取文件后再上传");
//   }
//   // 下面的代码将创建一个空的FormData对象:
//   const formData = new FormData();
//   // 使用FormData.append来添加键/值对到表单里面；
//   this.fileList.forEach((file) => {
//     formData.append("file", file.raw);
//   });

//   //自定义的接口也可以用ajax或者自己封装的接口
//   request(
//     {
//       method: "POST",
//       url: "http://127.0.0.1:8000/api/ocr_rco", //自己的接口
//       data: formData, //填写包装好的formData对象
//     }.then((res) => {
//       if (res.data.code == 200) {
//         this.$message.success("上传成功");
//       } else {
//         this.$message.error("上传失败");
//       }
//       //清空fileList
//       this.fileList = [];
//     })
//   );
// },

// export default {
//   name: "upload",
//   data() {
//     return {
//       fileList: [],
//     };
//   },
//   methods: {
//     before_Upload(file) {
//       let FormDatas = new FormData();
//       FormDatas.append("file", file);
//       let that = this;
//       that
//         .$axios({
//           method: "post",
//           url: "http://127.0.0.1:8000/api/ocr_rco",
//           headers: { "Content-Type": "multipart/form-data" },
//           data: FormDatas,
//         })
//         .then(function (res) {
//           if (res.data.code == "00000") {
//             let count = 0;
//             that.$message.success("上传成功");
//             const timer = window.setInterval(() => {
//               setTimeout(function () {
//                 that
//                   .$axios({
//                     method: "get",
//                     url: "http://127.0.0.1:8000/api/show_context",
//                     params: { filename: file.name },
//                   })
//                   .then((res) => {
//                     if (res.data.code === "00000") {
//                       that.$message.success("识别成功");
//                       console.log(count, res.data);
//                       count = 0;
//                       clearInterval(timer);
//                       let textContent = res.data.data.text.split(/[\t\n]/);
//                       function textObjcet(str) {
//                         this.data = str;
//                       }
//                       let textArrObj = [];
//                       for (let item of textContent) {
//                         textArrObj.push(new textObjcet(item));
//                       }
//                       let RecResult = {
//                         picUrl: "http://" + res.data.data.imageUrl,
//                         textArray: textArrObj,
//                       };
//                       that.$store.commit({
//                         type: "pushFormResult",
//                         listItem: RecResult,
//                       });
//                     }
//                     if (count == 60) {
//                       console.log(count, res.data);
//                       count = 0;
//                       that.$message.error("网络异常，请重新发送");
//                       clearInterval(timer);
//                     }
//                     count++;
//                   });
//               }, 0);
//             }, 1000);
//             that.$once("hook:beforeDestroy", () => {
//               clearInterval(timer);
//             });
//           } else {
//             that.$message.error(res.data.message);
//           }
//         });
//     },
//   },
// };
// };
</script>

<style  scoped>

.el-upload {
  margin-top: 100px;
  vertical-align: middle;
}
.el-button {
  margin-left: 600px;
  float: center;
}
.el-upload__tip {
  text-align: center;
  text-indent: -100px;
}
</style>