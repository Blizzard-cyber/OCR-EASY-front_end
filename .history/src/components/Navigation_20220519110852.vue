<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    
    text-color="#00BFFF"
    style="border: none"
  >
    <el-menu-item index="1" style="margin-left: 10px">OCR-Service</el-menu-item>

    <el-menu-item index="2" style="margin-left: 1006px">
      <a href="https://github.com/CodeStarting-design/OCR-web">To Github</a>
    </el-menu-item>
    <el-menu-item index="3" style="margin-left: 100px">
      <div>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
