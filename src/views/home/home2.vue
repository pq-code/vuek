<template>
    <div class="honeContainer">
        <div class="homeHeard">
            <div class="homeHeard-left">

            </div>
            <div class="homeHeard-right">
                <div class="homeHeard-icon">
                    <i class="iconfont icon-quanping"
                       @click="screen" />
                </div>
                <div class="user-info">

                </div>
            </div>
        </div>
        <div class="homeCenter">
            <div class="hemeLeft">
                <homeSidebar />
            </div>
            <div id="main"
                 class="hemeMain">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '../../store/index';
import { ArrowLeft } from '@element-plus/icons-vue';
import homeSidebar from './homeSidebar.vue';
import screenfull from 'screenfull';

const mainStore = useStore();
const { count } = storeToRefs(mainStore);
console.log(count.value);

const screen = function () {
    if (screenfull.isEnabled) {
        const element: any = document.getElementById('main');
        screenfull.request(element);
    }
};

const goBack = () => {
    console.log('go back');
};
</script>

<style lang="less" scoped>
.honeContainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .homeHeard {
        width: 100%;
        height: 56px;
        z-index: 10;
        border-bottom: 1px solid #eeeff1;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        // display: flex;
        // flex: 1 0 50px;
        // width: 100%;
        // background-color: #ffffff;
        // z-index: 1001;
        // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

        .homeHeard-left {
            width: 100%;
        }

        .homeHeard-right {
            display: flex;
            float: right;
            line-height: 50px;

            .user-info {
                margin: 7px 10px 0 10px;
                height: 36px;
                width: 36px;
                border-radius: 50%;
                background-color: #0077aa;
                cursor: pointer;
            }

            .homeHeard-icon {
                width: 50px;
                height: 50px;
                cursor: pointer;
                text-align: center;

                .iconfont {
                    font-size: 26px;
                }
            }
        }
    }

    .homeCenter {
        width: 100%;
        height: calc(100% - 50px);
        display: flex;
        flex-direction: row;

        .hemeLeft {
            display: flex;
            min-height: 100%;
            border-right: 1px solid #e4e4e5;

            display: -webkit-box;
            display: -ms-flexbox;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            background-color: #f2f3f5;
            position: relative;
            // flex: 0 0 220px;
            // width: 160px;
            // height: 100%;
            // z-index: 1000;
            // overflow: hidden;
            // background-color: #ffffff;
            // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            // border-right: 1px solid #ffffff;
        }

        .hemeMain {
            //width: 100%;
            //height: 100%;
            flex: 1;
        }
    }
}
</style>
