<template>
  <el-aside class="elaside" :style="{width}">
    <el-menu
      :default-active="thisMenuIndex"
      :router="true"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <div data-v-6494804b class="sidebar-logo-container divlin">
        <a class="sidebar-logo-link router-link-active">
          <img data-v-6494804b src="@/assets/sidebarLogo/vue.png" class="sidebar-logo" />
          <h1 data-v-6494804b class="sidebar-title">USHP Manage</h1>
        </a>
      </div> 
      <!-- 不存在子菜单  :key="index" :index="item.url" -->
      <el-menu-item
        :key="item.url"
        :index="item.url"
        v-for="item in noChildren"
        @click="clickMenu(item)"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{item.menuName}}</span>
      </el-menu-item> 
      <!-- 存在子菜单 -->
      <el-submenu :index="item.url" v-for="item in hasChildren" :key="item.url">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.menuName}}</span>
        </template> 
        <el-menu-item
          :key="childrenItem.url"
          :index="childrenItem.url"
          v-for="childrenItem in item.children"
          v-if="!childrenItem.children"
          @click="clickMenu(childrenItem)"
        >
          <i :class="childrenItem.icon"></i>
          <span slot="title">{{childrenItem.menuName}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>

import {mapState} from 'vuex';
export default {
  name: "Commonaside",  
  data: function () {
    return {  
      menu: [
        {
          icon: "el-icon-menu",
          menuName: "商品管理",
          url: "/view/product/index",
        },
        {
          icon: "el-icon-s-custom",
          menuName: "用户管理",
          url: "/view/userProfile/Index",
        },
        {
          icon: "el-icon-user",
          menuName: "我的信息",
          url: "/view/myProfile/Index",
        },
        {
          icon: "el-icon-s-tools",
          menuName: "系统管理",
          url: "",
          children: [
            {
              icon: null,
              menuName: "选项1",
              url: "/view/myProfile/Index2",
            },
            {
              icon: null,
              menuName: "选项1",
              url: "/view/myProfile/Index1",
            },
            {
              icon: null,
              menuName: "分组一",
              url: "",
              children: [
                {
                  icon: null,
                  menuName: "选项1",
                  url: "/view/myProfile/Index",
                },
              ],
            },
            {
              icon: null,
              menuName: "分组二",
              url: "",
              children: [
                {
                  icon: null,
                  menuName: "选项1",
                  url: "/view/myProfile/Index",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  //计算属性
  computed: { 
    //获取状态树中的isCollapse,width
    ...mapState({
      isCollapse:(state)=>state.isCollapse,
       width:(state) => state.width,
       thisMenuIndex:(state) => state.thisMenuIndex,
    }),
    //没有子菜单
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    //有子菜单 (这样设置会有一个问题 就是有子菜单的 永远会在没有子菜单的下面
    hasChildren() {
      return this.menu.filter((item) => item.children);
    } 
  },
  methods: {
    handleClose(tag) {
      //关闭tag
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    
    //跳转路由 根据名称跳转
    clickMenu(item) {
      this.$store.commit("selectMenu", item);
      this.$router.push({ name: item.name });
    },
  },
};
</script>

<style>
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
</style>

<style scoped> 

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

.divlin {
  border-bottom: rgb(206, 206, 206) solid 1px;
}

/*左边导航栏具体样式*/
.el-menu-vertical-demo.el-menu {
  background: rgba(142, 143, 145, 0);
  padding-left: 20px;
  text-align: left;
  height: 100%;
  padding: 0;
}

.el-submenu .el-menu-item,
.el-menu-item {
  min-width: 50px;
} 
</style>