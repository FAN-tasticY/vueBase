//现在来实现我们的第一个自己的vue项目吧哈哈哈
import Vue from "vue";
import App from '@/App.vue'


//然后在这里再new一下那个vm
//哎呀我去 我真是一头雾水啊
new Vue({
    el:'#app',
    render:h=>h(App)
})