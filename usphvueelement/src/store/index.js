import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//store 全局状态管理--状态树
export default new Vuex.Store({
    //存储数据
    state: {
        thisMenuIndex: "/view/product/index",//控制菜单的高亮
        isCollapse: false,//决定左侧导航栏是否默认展开
        width: "200px",//决定左侧导航栏收缩时底层的aside默认为300px的问题
        currentMenu: null,
        tagList: [
            {
                icon: "",
                menuName: "首页",
                url: "/view/product/index",
            }
        ]
    },
    //调用方法
    mutations: {
        collapseMenu(state) {
            !state.isCollapse ? (state.width = "65px") : (state.width = "200px");
            console.log(state.width);
            state.isCollapse = !state.isCollapse;
        },

        //选择标签或者选择面包屑
        selectMenu(state, val) {
            if (val.url === '/view/product/index') {
                state.currentMenu = null;
                state.thisMenuIndex = val.url;
            } else {
                state.currentMenu = val;
                state.thisMenuIndex = val.url;
                //如果等于-1说明tagList不存在那么插入，否则什么都不做
                let result = state.tagList.findIndex(item => item.url === val.url);
                result === -1 ? state.tagList.push(val) : '';
            }
        },
        //关闭标签
        closeTab(state, val) {
            let thisIndex = state.tagList.findIndex(item => item.menuName === val.menuName) 
            //关闭当前标签
            if(state.thisMenuIndex===val.url){
                if(thisIndex===state.tagList.length-1){
                    if(thisIndex===1){
                        //关闭当前tag为第二个时清空面包屑属性值
                        state.currentMenu = null;
                    }else{
                        state.currentMenu = state.tagList[thisIndex-1];
                    }
                    state.thisMenuIndex = state.tagList[thisIndex-1].url;
                }else{
                    state.currentMenu = state.tagList[thisIndex+1];
                    state.thisMenuIndex = state.tagList[thisIndex+1].url;
                }
            }
            state.tagList.splice(thisIndex, 1)
        },
        //由header组件调用的方法
        changeCollapse() {
            !state.isCollapse ? (state.width = "65px") : (state.width = "200px");
            // 更改左侧导航栏展示状态
            state.isCollapse = !tstatehis.isCollapse;
        },
        clickBreadcrumbHome(state) { 
            state.currentMenu = null;
            state.thisMenuIndex = "/view/product/index"
        }
    },
})
 