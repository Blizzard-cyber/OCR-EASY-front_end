<template>
  <div id="middle">
    <PictureSource />
    <TextRes />
    <Upload />
  </div>
</template>
<script>
import TextRes from "./text.vue";
import PictureSource from "./picture.vue";
import Upload from "./upload.vue";
export default {
  name: "Middle",
  components: {
    TextRes,
    PictureSource,
    Upload
},
};
</script>
<style scoped>
#middle {
  margin-top: 20px;
  height: 450px;
}
</style>