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
      在该项目中对Springboot后端以及Unity端的几个主要类通过模拟调用进行单元测试。
    </n-text>
    <n-h2>测试工具</n-h2>
    <n-text tag="div">
      Unity开发使用的静态测试工具为<n-a
        href="https://github.com/vad710/UnityEngineAnalyzer"
        target="_blank"
      >UnityEngineAnalyzer
      </n-a>，动态测试工具为
      <n-a
        href="https://docs.unity.cn/cn/2019.1/Manual/PlaymodeTestFramework.html"
        target="_blank"
      >Unity Test Runner
      </n-a>；<br>
      Java开发的后端使用的静态测试工具为
      <n-a
        href="https://checkstyle.org/"
        target="_blank"
      >Checkstyle
      </n-a>，动态测试工具为
      <n-a
        href="https://www.bing.com/search?q=JUnit&form=ANNTH1&refig=b610e89fc9c34fc4a57760944a0702c5&pc=HCTS&adppc=EDGEESS"
        target="_blank"
      >JUnit
      </n-a>。
    </n-text>    
    <n-h2>测试对象</n-h2>
    <n-text tag="div">
      通过编写测试脚本与设计测试用例，该测试项目实现了对以下类的测试:<br>
      该unity的两个主要类：LoadMatchCSV和CameraSystem<br>
      后端springboot的三个主要类：UrlService、ColorService、RiskSerive<br>
    </n-text>
  </n-card>
</template>

<style scoped>
.unit-home-wrapper {
  height: 41.5em;
  box-sizing: border-box;
  overflow-y: auto; /* 添加这一行 */
}

.vitest-logo {
  width: 1.4em;
  height: 1.4em;
}
</style>