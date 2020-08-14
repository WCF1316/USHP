import Vue from 'vue'
import router from 'vue-router'
Vue.use(router);

import login from '@/view/Login'
import Main from '@/view/Main'

import productIndex from '@/view/product/index'
import myProfileIndex from '@/view/myProfile/index'
import userProfileIndex from '@/view/userProfile/index'

const originalPush = router.prototype.push
router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


export default new router({
    mode: 'history',//去掉#号
    routes: [{
        path: "/",
        name: "login",
        redirect: "/login"
    }, {
        path: "/login",
        name: "",
        component: login
    }, {
        path: "/Main",
        name: "Main",
        component: Main,
        children: [
            {
                //主页默认加载页面
                path: "/Main",
                name: "main",
                redirect: "/view/product/index",
                meta: { title: '商品管理', icon: null, noCache: true,type:"" }

            },
            {
                path: "/view/product/index",
                name: "productIndex",
                component: productIndex,
                meta:{title:'商品管理', icon: null, noCache: true,type:"" }

            }, {
                path: "/view/userProfile/index",
                name: "userProfileIndex",
                component: userProfileIndex,
                meta:{title:'用户管理', icon: null, noCache: true,type:"" }

            },
            , {
                path: "/view/myProfile/index",
                name: "myProfileIndex",
                component: myProfileIndex,
                meta:{title:'我的信息', icon: null, noCache: true,type:"" }

            },{
                path: "", 
                meta:{title:'系统管理', icon: null, noCache: true,type:"" },
                children:[ {
                        path: "/view/userProfile/index",
                        name: "userProfileIndex",
                        component: userProfileIndex,
                        meta:{title:'选项2', icon: null, noCache: true ,type:""}
        
                    }, {
                        path: "/view/userProfile/index",
                        name: "userProfileIndex",
                        component: userProfileIndex,
                        meta:{title:'选项11', icon: null, noCache: true ,type:""}
        
                    }, {
                        path: "/view/userProfile/index",
                        name: "userProfileIndex",
                        component: userProfileIndex,
                        meta:{title:'选项12', icon: null, noCache: true ,type:""}
        
                    }
                ]
            }
        ]
    },{
        path:"",
        name:"404",
        redirect:"/404"
    }]
});
