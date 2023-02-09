import { createRouter, createWebHashHistory } from "vue-router"
import webgpu from "./branch/webgpu";
import webgl from "./branch/webgl";
import pmaoUI from "./branch/pmaoui";
import pmaoUIhome from "./branch/pmao-ui"
import game from "./branch/game"
import map from "./branch/map"
// import three from "./branch/three";

const routes = [
    {
        path: "/",
        component: () => import(/* webpackChunkName: "about" */ "../views/home/frontPage.vue"),
        name: "frontPage",
        meta: { hidden: false, title: "首屏" },
    },
    {
        path: "/dashboard",
        component: () => import(/* webpackChunkName: "about" */ "../views/home/home.vue"),
        name: "dashboard",
        redirect: '/map',
        // leaf: true,//只有一个节点
        children: [
            ...webgpu,
            ...webgl,
            ...pmaoUI,
            ...game,
            ...map
            // ...three,
        ],
        meta: { hidden: false, title: "首页" },
    },

    ...pmaoUIhome,
    // {
    //     path: "/visualLargeScreen2",
    //     component: () => import(/* webpackChunkName: "about" */ "../views/webgl/visualLargeScreen/index.vue"),
    //     name: "forzaHorizonScenes",
    //     // leaf: true,//只有一个节点
    //     meta: { hidden: false, title: "visualLargeScreen" },
    // },
    // {
    //     path: "/dashboard",
    //     component: () => import(/* webpackChunkName: "about" */ "../views/webgl/dashboard/index.vue"),
    //     name: "dashboard",
    //     // leaf: true,//只有一个节点
    //     meta: { hidden: false, title: "dashboard" },
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
