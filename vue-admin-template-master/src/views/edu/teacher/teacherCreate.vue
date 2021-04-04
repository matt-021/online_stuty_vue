<template>
  <div class="app-container">
    创建讲师
  </div>
</template>

<script>
import teacher from '@/api/edu/teacher'
export default {

  data() {// 定义数据
      return {}
  },
    
  created() { // 当页面加载时获取数据
    this.fetchData()
  },
    
  methods: {
    fetchData() { // 调用api层获取数据库中的数据
      console.log('加载列表')
    }
  }
}
</script>