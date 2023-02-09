//1.定义容器
import { defineStore } from 'pinia'
//参数1：容器的ID，必须唯一，将来Pinia会把所有的容器挂载到根容器
export const useStore = defineStore('main', {
    /***
     *类似于组件的 data数据的 ,用来存储全局状态的
     * 1、必须是箭头函数
     */
    state: () => {
        return {
            count: 0,
        }
    },

    /***
     *类似于组件的计算属性computed，有缓存的功能
     */
    getters: {
        //函数接受一个可选参数：state状态对象
        //每次调用state10,都会让count+10 并且返回结果
        count10(state) {
            console.log('count10 调用了')
            return state.count + 10
        },

        //如果在getters中使用了this，必须手动指定返回值的类型，否则类型推导不出来
        // count110():number{
        //     console.log('count10 调用了')
        //     return this.count +10
        // }
    },

    /***
     *封装处理数据的函数（业务逻辑)：修改数据
     */
    actions: {
        //aciton中不能使用箭头函数，因为箭头函数绑定外部的 this
        changeState() {
            // this.count++
            // this.foo = "hello"
            // this.arr.push(4)
            // this.$pathc

            //建议使用
            // this.$patch(state => {

            // })
        }
    },
})


//2.修改容器中的 state

//3.修改 state

//4. 容器中的 action 的使用
