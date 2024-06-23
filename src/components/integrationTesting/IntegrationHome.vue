<script lang="ts" setup>
import { NCard, NText, NA, NBlockquote, NH2 } from 'naive-ui'

</script>

<template>
  <n-card class="unit-home-wrapper">
    <n-h2>集成测试</n-h2>
    <n-blockquote>
        集成测试是将单元测试过的模块组装在一起，测试它们在一起工作是否正常,目的是发现模块间的接口错误。
    </n-blockquote>
    <n-text tag="div">
      由于多数接口只调用一层函数甚至不调用，因此unity端只测试generateLineAndUAV、DeriveUAVLocation这2个接口。使用等价类的方法对这2个接口设计测试用例
    </n-text> 
      <n-h2>测试工具</n-h2>
    <n-text tag="div">
      本项目测试使用<n-a
        href="https://docs.unity.cn/cn/2019.1/Manual/PlaymodeTestFramework.html"
        target="_blank"
      >Unity Test Runner
      </n-a>、<n-a
        href="https://www.bing.com/search?q=JUnit&form=ANNTH1&refig=b610e89fc9c34fc4a57760944a0702c5&pc=HCTS&adppc=EDGEESS"
        target="_blank"
      >JUnit
      </n-a>、<n-a
        href="https://docs.python.org/3/library/unittest.html"
        target="_blank"
      >unittest
      </n-a>对unity端组件及springboot端组件进行集成测试。
    </n-text>
    <n-h2>测试对象</n-h2>
    <n-text tag="div">
      集成测试的依据是概要设计规约。被测对象包括<br>
      被测系统的前端和后端接口、前端和Unity接口、Unity类方法之间的接口、后端类方法之间的接口及与第三方系统的接口。
      使用方法包括：·等价类划分方法 · 边界值分析方法 · 使用错误猜测方法
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