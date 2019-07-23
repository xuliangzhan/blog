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
          description: '✈ JavaScript 异步请求库，用于浏览器和 node.js 的 HTTP 客户端'
        },
        {
          name: 'xe-utils',
          url: '/xe-utils/index.html',
          description: '🌵 JavaScript 函数库、工具类'
        },
        {
          name: 'xe-clipboard',
          url: 'https://github.com/xuliangzhan/xe-clipboard',
          description: '😮 JavaScript 实现复制文本到剪贴板，支持主流 H5 浏览器'
        },
        {
          name: 'vxe-table',
          url: '/vxe-table/index.html',
          description: '🐬 一个全功能的 Vue 表格组件，满足绝大部分对 Table 的一切需求'
        }
      ]
    }
  }
}
</script>
