<template>
  <div id="app">
    <div class="module-wrapper">
      <ul class="module-list">
        <li class="module-li" v-for="item in modules" :key="item.name" :title="item.description">
          <a :href="item.url">
            <div class="name">{{ item.name }}</div>
            <div class="description">{{ item.description }}</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="star1"></div>
    <div class="star2"></div>
    <div class="star3"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modules: [
        {
          name: 'xe-ajax',
          url: 'https://github.com/xuliangzhan/xe-ajax',
          description: '✈ js 异步请求库，用于浏览器和 nodejs 的 HTTP 客户端'
        },
        {
          name: 'xe-utils',
          url: '/xe-utils/index.html',
          description: '🌵 js 函数库、工具类'
        },
        {
          name: 'xe-clipboard',
          url: '/xe-clipboard/index.html',
          description: '😮 js 复制文本到剪贴板，支持IE、Chrome、Firefox、Opera、Safari、IOS、Android'
        },
        {
          name: 'vxe-table',
          url: '/vxe-table/index.html',
          description: '🐬 一个功能齐全的 Vue 表组件，与任意组件库完美兼容'
        }
      ]
    }
  }
}
</script>
