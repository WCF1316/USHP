<template>
      <el-menu-item :v-for="(item,index) in navigationList" :key="index"  index="item.url">
          <i class="item.icon"></i>
          <span slot="title">{{item.menuName}}</span>
        </el-menu-item>
</template>
<script>
export default {
    name:"menu-item",
    data(){
        return{
            navigationList:[]
        }
    },
    beforeCreate(){
      //进入页面之前加载菜单数据
        this.aoxis.get('../testData/menu.json').then((res)=>{
            console.log(res.data)
            this.navigationList=res.data;
        })
    },

    methods:{
        //进入页面之前加载数据
        function (params) {
            
        }
    }
}
</script>