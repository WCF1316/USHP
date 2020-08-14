<template>
  <div class="divtags" style="min-width: 400px;">
    <el-tag
      v-for="(tag,index) in tagList"
      :key="tag.url"
      :class="isActive(tag)?'active':''"
      :closable="tag.menuName!='首页'"
      @close="handleClose(tag,index)"
      @click="clickTag(tag)"
      class="eltag"
    >
      <span>{{tag.menuName}}</span>
    </el-tag>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "tags",
  data() {
    return {};
  },
  //计算属性
  computed: {
    //从全局状态中获取tag
    ...mapState({
      tagList: (state) => state.tagList,
    }),
  },

  methods: {
    ...mapMutations({}),
    //关闭tag
    handleClose(item, index) { 
      let taglistLength = this.tagList.length - 1;
      //如果关闭的不是当前路由tag则不跳转页面
      if (item.url === this.$route.path) {
        //关闭当前标签时，如果是最后一个标签，则向前active，否则都向后active
        if (index < taglistLength) {
          console.log(1)
          this.$router.push({ path: this.tagList[index + 1].url });
        } else { 
          this.$router.push({ path: this.tagList[index - 1].url });
        }
      }
      //调用全局状态中的修改tagList的突变函数
      this.$store.commit("closeTab", item,);
    },
    //选择标签跳转路由
    clickTag(item) {
      this.$router.push({ path: item.url });
      this.$store.commit("selectMenu", item);
    },
    //标签是否选中
    isActive(route) {
      console.log(route.url === this.$route.path);
      return route.url === this.$route.path;
    },
  },
};
</script> 

<style scoped>
.divtags {
  border: rgb(226, 226, 226) solid 1px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  height: 38px;
  background: rgba(240, 248, 255, 0);
}
.eltag {
  float: left;
  margin-left: 3px;
  margin: 3px;
  background: rgba(190, 190, 190, 0);
  cursor: pointer;
  /* color: aliceblue; */
}

.active {
  background: #ecf5ff57;
  border-color: coral;
}
</style>