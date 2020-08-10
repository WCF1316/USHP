<template>
  <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span slot="title">系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <i class></i>
              <span slot="title">选项1</span>
            </el-menu-item>

            <el-menu-item index="1-2">
              <i class></i>
              <span slot="title">选项2</span>
            </el-menu-item>
          </el-menu-item-group>

          <el-submenu index="4">
            <span slot="title">分组一</span>
            <el-menu-item index="5">
              <i class></i>
              <span slot="title">选项1</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <span slot="title">分组二</span>
            <el-menu-item index="7">
              <i class></i>
              <span slot="title">选项2</span>
            </el-menu-item>
          </el-submenu>
  </el-submenu>

   
</template>
<script>
export default {};
</script>