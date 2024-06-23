<script lang="ts" setup>
import { NCard, NText, NA, NBlockquote, NH2, NUl, NLi } from 'naive-ui'
</script>

<template>
  <n-card class="unit-home-wrapper">
    <n-h2>单元测试</n-h2>
    <n-blockquote>
      单元测试（Unit Testing），是指对软件中的最小可测试单元进行检查和验证。
    </n-blockquote>
    <n-text tag="div">
      单元测试通常适用于独立的业务逻辑、组件、类、模块或函数，不涉及 UI 渲染、网络请求或其他环境问题。
    </n-text>
    <br>
    <n-text tag="div">
      这些通常是与 Vue 无关的纯 JavaScript/TypeScript 模块。一般来说，在 Vue 应用中为业务逻辑编写单元测试与使用其他框架的应用没有明显区别。<br>
      本项目中的测试对象为unity内各组件，测试脚本使用C#与java实现，使用Unity Test Runner进行动态测试。
    </n-text>
    <n-h2>测试工具</n-h2>
    <n-text tag="div">
      本项目使用unity自带的单元测试工具进行测试，
      <n-a
        href="https://docs.unity.cn/cn/2019.1/Manual/PlaymodeTestFramework.html"
        target="_blank"
      >Unity Test Runner
      </n-a>
      Unity Test Runner是Unity的一个内置测试框架，用于在编辑器中运行测试。
    </n-text>
    <br>
    <n-text tag="div">
      通过编写测试脚本与设计测试用例，该测试项目实现了:<br>
      该unity的两个主要类：LoadMatchCSV和CameraSystem<br>
      后端springboot的主要类：<br>
      <n-ul>
        <n-li>LoadMatchCSV：通过临近匹配算法，实现用户点击返回最近图片位点</n-li>
        <n-li>CameraSystem：通过读取用户键盘鼠标句柄，实现对视角的调整</n-li>
      </n-ul>
    </n-text>
  </n-card>
</template>

<style scoped>
.unit-home-wrapper {
  height: 41.5em;
  box-sizing: border-box;
}

.vitest-logo {
  width: 1.4em;
  height: 1.4em;
}
</style>