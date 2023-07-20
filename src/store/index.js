import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./modules/moduleA"
import moduleB from "./modules/moduleB"

Vue.use(Vuex);

// Actions(行动): 处理交互行为，异步
const actions = {
    // 上下文、传递的参数
    updateInfoAction (context,payload) {
        console.log(payload)
        setTimeout(() => {
            context.commit('increaseCounter')
            console.log('修改成功')
        },1000)
    }
};

// Mutations(变化): (方法)修改 state 中的数据
const mutations = {
    increaseCounter (state) {
        state.counter ++
    },
    decreaseCounter (state) {
        state.counter --
    }
};

// State: 用于存储数据
const state = { 
    counter: 10,
    students: [
        {id:111,name: 'student01'},
        {id:112,name: 'student02'},
        {id:113,name: 'student03'},
    ]
 };

 // 类似于计算属性，在数据展示前进行一些变化处理，具有缓存功能，能够提高运行效率
 const getters = {
    squareCounter (state) {
        return state.counter * state.counter
    },
    squareCounterSize (state,getters) {
        return getters.squareCounter.length
    }
 }

 const modules = {
    moduleA: moduleA,
    moduleB: moduleB
 }

// 创建并导出 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
    modules
});
