<template>
  <el-container> 
    <Commonaside></Commonaside>
    <el-container>
      <CommonHeader></CommonHeader>
      <el-row>
        <!-- <div class="divtags">
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
        </div> -->
        <!-- tag组件 -->
        <Tags></Tags>
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
</template> 
<script>
import CommonHeader from "@/components/header/index";
import Commonaside from "@/components/menu/index";
import Tags from "@/components/tags/index";

export default {
  name: "Main",
  components: {
    CommonHeader,
    Commonaside,
    Tags
  },

  data: function () {
    return {
      drawer: false, 
    };
  },
  //计算属性
  computed: {
     
  },
  methods: {
    handleClose(tag) {
      //关闭tag
      this.tags.splice(this.tags.indexOf(tag), 1);
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
  /* background-image:url('../assets/background/background.jpg'); */
} 
</style>
