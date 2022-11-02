
<template>
  <project></project>
</template>

<script>
  //然后这里引入那个组件 并且在这里使用那个组件
  //然后将这个使用完的组件的页面 整个再暴露出去 对不对是不是这样的？
  import myFirstProject from '@/components/myFirstProject.vue'
  export default {
      components:{
          //这里是什么定义带注册组件 
          //啥意思啊 为什么这里还需要暴露出去啊
          // 现在就是再这里使用这个组件了
          project:myFirstProject
      }
  }
</script>

<style>

</style>