<template>
  <div class="intro" >
    <div class="textArea">
  <span class="content"> 
    OCR预处理：输入文本经过扫描仪进入计算机后，由于纸张的厚薄、光洁度和印刷质量都会造成文字畸变，产生断笔、粘连和污点等干扰，所以在进行文字识别之前，要对带有噪声的文字图像进行处理。由于这种处理工作是在文字识别之前，所以被称为预处理。预处理一般包括灰度化、二值化，倾斜检测与校正，行、字切分，平滑，规范化等等。预处理是OCR中十分重要的步骤，预处理的效果好坏直接决定了文字识别的质量，并且预处理中处理的问题是很难通过重新训练字符识别模型来避免的，因此本文主要研究的关于噪音背景的去除的问题也在此阶段。 
  </span>
  </div>
</template>
<script>
export default {
  name:"Introduction",
  data(){
   return {

   }
  }
}
</script>
<style scoped>
.intro{
  animation: animated-border 1.5s infinite;
  /* text-indent:2em;
  color: #898a8b;
  font-size: 18px;
  line-height: 30px; */
  /* display:inline-block; */
  height: 90%; 
  width:500px;
  margin-right: 50px;
  /* vertical-align: center; */
  float: left;
  margin-left: 100px;
  text-align: left;
  margin-top: 20px;
  /* border: 5px solid #009688;
  box-shadow:  0 0 0 7px #4b90f8;
  outline: dashed 3px #fff;
  border-radius: 2px; */
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
}
.content{
  display: inline;
  text-indent:2em;
  color: #898a8b;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  text-align: left;
  margin-top: 5px;
  /* background: linear-gradient(90deg, grey 66%, transparent 0) repeat-x;
  background-size: 0.5em 1px;
  background-position: 0 1.5em;
  text-shadow: 0.05em 0 #fff, -0.05em 0 #fff; */
  border-bottom: dashed 1px rgb(66, 179, 245);
  padding-bottom: .1rem;
  /* font-style: ; */
}
.textArea{
  padding: 10px;
  margin-left: 5%;
  margin-top: 2%;
  width: 90%;
  height: 90%;
}
@keyframes animated-border {
  0% {
    box-shadow: 0000rgba(255,255,255,0.4);
  }
  100% {
     box-shadow: 00020pxrgba(255,255,255,0);
  }
}
/* @font-face{
			font-family: test;
			src:url('./方正胖头鱼简体.ttf');
		} */
</style>