<script lang="ts" setup>
import { NCard, NText, NA, NBlockquote, NH2, NImage, NUl, NLi } from 'naive-ui'

</script>

<template>
  <n-card class="unit-home-wrapper">
    <n-h2>系统测试</n-h2>
    <n-blockquote>
      在 Vue 环境下的单元与组件测试，都是在<strong>开发模式</strong>下进行的，在部署到生产时，对应用整体覆盖的能力有限。
    </n-blockquote>
    <n-h2>测试工具</n-h2>
    <n-text tag="div">
      本项目使用端到端测试框架seleniumIDE
    作为测试工具，
      它提供了最完整的端到端解决方案，其具有信息丰富的图形界面、出色的调试性、内置断言和存根、抗剥落性、并行化和快照等诸多特性。
      并且运行在真实的<strong>浏览器环境</strong>中。
    </n-text>
    <br>
    <n-text tag="div">
      同时作为现代测试框架，Cypress 还具备以下特点：
      <n-ul>
        <n-li>基于测试快照的时间旅行功能</n-li>
        <n-li>实时热更新，开箱即用的观察模式</n-li>
        <n-li>集成高度自动化的截屏与录屏功能 ……</n-li>
      </n-ul>
    </n-text>
  </n-card>
</template>

<style scoped>
.unit-home-wrapper {
  height: 41.5em;
  box-sizing: border-box;
}

.cypress-logo {
  height: 1.2em;
}
</style>