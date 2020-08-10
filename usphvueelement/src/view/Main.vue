<template>
  <!-- <div> -->
  <el-container>
    <el-aside class="elaside" :style="{ width } ">
      <el-menu
        :default-active="this.$router.path"
        :router="true"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <div data-v-6494804b class="sidebar-logo-container">
          <a class="sidebar-logo-link router-link-active">
            <img data-v-6494804b src="../assets/sidebarLogo/vue.png" class="sidebar-logo" />
            <h1 data-v-6494804b class="sidebar-title">USHP Manage</h1>
          </a>
        </div>

        <el-menu-item index="/view/product/index">
          <i class="el-icon-menu"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/view/userProfile/Index">
          <i class="el-icon-s-custom"></i>
          <span slot="title">用户信息管理</span>
        </el-menu-item>
        <el-menu-item index="/view/myProfile/Index">
          <i class="el-icon-user"></i>
          <span slot="title">我的信息</span>
        </el-menu-item>

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span slot="title">系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/view/userProfile/index">
              <i class=""></i>
              <span slot="title">选项1</span>
            </el-menu-item>

            <el-menu-item index="/view/userProfile/index">
              <i class></i>
              <span slot="title">选项2</span>
            </el-menu-item>
          </el-menu-item-group>

          <el-submenu index="2">
            <span slot="title">分组一</span>
            <el-menu-item index="/view/userProfile/index">
              <i class></i>
              <span slot="title">选项11</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <span slot="title">分组二</span>
            <el-menu-item index="/view/userProfile/index">
              <i class></i>
              <span slot="title">选项12</span>
            </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="1">
            <div style="width:60px;">
              <i
                :class="collpaseIcon"
                @click="changeCollapse"
                style="font-size: 25px;color:#909399;padding:15px;"
              ></i>
            </div>
          </el-col>
          <el-col :span="22">
            <!-- 
            <el-breadcrumb separator="/" style="padding:20px;">
              <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '#' }">活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>-->
            <headBreadcrumb></headBreadcrumb>
          </el-col>
          <el-col :span="1">
            <div style="padding:10px;">
              <div>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-row>
        <div class="divtags">
          <el-tag
            v-for="tag in tags"
            :key="tag.name"
            :closable="true"
            @close="handleClose(tag)"
            :type="tag.type"
            :style="background"
            class="eltag"
          >
            <span>{{tag.name}}</span>
          </el-tag>
        </div>
      </el-row>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div style="float:right;  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);border-radius: 30px">
          <el-button type="primary" icon="el-icon-check" @click="drawers" circle></el-button>
        </div>

        <el-drawer
          title="我是标题"
          :visible.sync="drawer"
          :show-close="true"
          size="300px"
          :modal="false"
          :with-header="false"
        >
          <el-row style="height:30px;">
            <el-col :span="1">
              <i class="el-icon-close" @click="drawers" style="padding:10px;"></i>
            </el-col>
          </el-row>
          <span>我来啦!</span>
        </el-drawer>
      </el-footer>
    </el-container>
  </el-container>
  <!-- </div> -->
</template>

<script>
// 这一大段JS就是为了做收缩/展开导航栏而用的！
import headBreadcrumb from "@/components/breadcrumb/index";
export default {
  name: "Main",
  components: {
    headBreadcrumb,
  },
  data: function () {
    return {
      isCollapse: false, // 决定左侧导航栏是否展开
      width: "200px;",
      drawer: false,
      background: "background:rgba(190, 190, 190, 0.068);color:black;",
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" },
      ],
    };
  },

  computed: {
    collpaseIcon: function () {
      // 左侧导航栏是否展开状态的图标
      // 如果是展开状态就图标向右，否则图标向左
      return this.isCollapse ? "el-icon-s-unfold" : "el-icon-s-fold";
    },
    collpaseWidth: function () {
      // 左侧导航栏是否展开状态的宽度
      // 如果是展开状态就导航栏宽度为65px，否则200px

      return this.isCollapse ? "65px" : "200px";
    },
  },
  methods: {
    handleClose(tag) {
      //关闭tag
      this.tags.splice(this.tags.indexOf(tag), 1);
    },

    changeCollapse: function () {
      !this.isCollapse ? (this.width = "65px") : (this.width = "200px");
      // 更改左侧导航栏展示状态
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 抽屉
    drawers: function () {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style>
/*
	找到html标签、body标签，和挂载的标签
	都给他们统一设置样式
*/
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
  /* background: #909399; */
  /* background-image:url('../assets/background/background.jpg'); */
}

/* 点击收缩按侧边栏底层aside动画 */
.elaside {
  width: 200px;
  transition-property: width;
  transition-duration: 0.25s;
  transition-timing-function: linear;
  transition-delay: 0s;
  /* Firefox 4 */
  -moz-transition-property: width;
  -moz-transition-duration: 0.25s;
  -moz-transition-timing-function: linear;
  -moz-transition-delay: 0s;
  /* Safari and Chrome */
  -webkit-transition-property: width;
  -webkit-transition-duration: 0.25s;
  -webkit-transition-timing-function: linear;
  -webkit-transition-delay: 0s;
  /* Opera */
  -o-transition-property: width;
  -o-transition-duration: 0.25s;
  -o-transition-timing-function: linear;
  -o-transition-delay: 0s;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 199px;
  min-height: 400px;
}

.el-header {
  /* background-color:#409EFF; */
  color: #333;
  text-align: left;
  line-height: 60px;
  width: 100%;
  /* border: red solid 1px; */
  /* background: blanchedalmond; */
  /* border-bottom: rgb(83, 83, 83) solid 1px; */
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  /* margin-bottom: 40px; */
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<style scoped>
.el-header,
.el-main {
  padding: 0;
}

.sidebarLogoFade-enter-active[data-v-6494804b] {
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}

.sidebarLogoFade-enter[data-v-6494804b],
.sidebarLogoFade-leave-to[data-v-6494804b] {
  opacity: 0;
}

.sidebar-logo-container[data-v-6494804b] {
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #ffffff02;
  text-align: center;
  overflow: hidden;
}

.sidebar-logo-container .sidebar-logo-link[data-v-6494804b] {
  height: 100%;
  width: 100%;
}

.sidebar-logo-container .sidebar-logo-link .sidebar-logo[data-v-6494804b] {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;
}

.sidebar-logo-container .sidebar-logo-link .sidebar-title[data-v-6494804b] {
  display: inline-block;
  margin: 0;
  color: rgb(7, 7, 7);
  font-weight: 600;
  line-height: 60px;
  font-size: 14px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
}
.sidebar-logo-container.collapse .sidebar-logo[data-v-6494804b] {
  margin-right: 0px;
}

/*左边导航栏具体样式*/
.el-menu-vertical-demo.el-menu {
  background: rgba(142, 143, 145, 0);
  padding-left: 20px;
  text-align: left;
  height: 100%;
  padding: 0;
}

el-container > .el-menu-vertical-demo.el-menu {
  padding: 0;
}

.el-submenu .el-menu-item,
.el-menu-item {
  min-width: 50px;
}

.el-menu-item {
  padding: 0;
}
.divtags {
  border: rgb(226, 226, 226) solid 1px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  /* border-radius: 0px; */
  height: 38px;
  background: rgba(240, 248, 255, 0);
}
.eltag {
  float: left;
  margin-left: 3px;
  margin: 3px;
  background: rgba(190, 190, 190, 0.068);
  color: aliceblue;
}
</style>