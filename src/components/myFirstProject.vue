<template>
    <div>
        <h1>我爱你杨帆</h1>
        <button @click="count++" >爱了{{count}}次</button>
    </div>
</template>

<script>
export default {
    //不是这里暴露的是什么啊 我搞不懂了
    //是不是这里暴露的是这个整体
    //哈哈哈可以啊小子 这里暴露的就是这个整体 底层代码做了处理
    //可以看成暴露的是一个配置文件 暴露的是配置文件
    //定义带注册 那个组件里面什么都有 模板数据都是一体的 定义带注册完事之后就得使用这个组件了
    data(){
        return {
            count:0
        }
    }
}
</script>

<style scoped>
    /* 这里写样式必须要加上scoped这么个属性 */
    h1{
        color:rebeccapurple
    }
</style>