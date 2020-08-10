<template>
  <el-breadcrumb class="el-breadcrumb" separator="/" >
    <el-breadcrumb-item
      v-for="item in levelList"
      :key="item.path"
      :to="item.path"
    >{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
 
<script>
export default {
  name: "headBreadcrumb",
  data() {
    return {
      levelList: [],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      //$route.matched一个数组 包含当前路由的所有嵌套路径片段的路由记录
      let matched = this.$route.matched.filter((item) => item.name);
      console.log(matched);
      console.log(matched[0].path);
      const first = matched[0];
      // if (first &&first.name.trim().toLocaleLowerCase() !== "商品管理".toLocaleLowerCase()) {
      //   matched = [{ path: "/view/product/index", meta: { title: "商品管理" } }].concat(
      //     matched
      //   );
      // }
      this.levelList = matched;
    },
  },
};
</script>

<style  scoped>
.el-breadcrumb { 
  box-sizing: border-box;
  background: white; 
  padding: 20px;
}
</style>