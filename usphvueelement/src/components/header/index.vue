<template>
  <el-header>
    <div class="divhead">
      <div class="divisCollapse">
        <i :class="collpaseIcon" @click="collapseMenu" class="iconIsCollapse"></i>
      </div>
      <div class="divBreadcrumb">
        <el-breadcrumb class="el-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/view/product/index' }"><span  @click="clickBreadcrumbHome()">首页</span></el-breadcrumb-item>
          <el-breadcrumb-item v-if="currentMenu!=null">{{currentMenu.menuName}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="divavatar">
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
      </div>
      
    </div>
  </el-header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "headBreadcrumb",
  data() {
    return {};
  },
  watch: {
    $route() {},
  },
  created() {},
  computed: {
    ...mapState({
      currentMenu: (state) => state.currentMenu,
      isCollapse: (state) => state.isCollapse,
    }),

    collpaseIcon: function () {
      //控制收缩展开时的按钮图标,获取状态树中的isCollapse
      return this.isCollapse ? "el-icon-s-unfold" : "el-icon-s-fold";
    },
  },
  methods: {
    ...mapMutations(["collapseMenu","clickBreadcrumbHome"]),
  },
};
</script>
<style >
/* 控制菜单收缩动画 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 199px;
  min-height: 400px;
}
</style>
<style  scoped>
.el-breadcrumb {
  box-sizing: border-box;
  background: white;
  padding: 20px;
  padding-left: 0px;
}

.el-header {
  color: #333;
  text-align: left;
  line-height: 60px;
  width: 100%;
}
.divisCollapse {
  min-width: 25px;
  float: left;
}
.iconIsCollapse {
  font-size: 25px;
  color: #909399;
  padding: 15px;
  padding-left: 0px;
}
.divBreadcrumb{
  min-width: 25px;
  float:left
}
.divhead{
  min-width: 500px;
}
.divavatar{
padding:10px;float:right
}
</style>