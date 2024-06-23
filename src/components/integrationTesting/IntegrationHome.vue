<script lang="ts" setup>
import { NCard, NText, NA, NBlockquote, NH2 } from 'naive-ui'

</script>

<template>
  <n-card class="unit-home-wrapper">
    <n-h2>集成测试</n-h2>

    - 对MarkerGeneration模块内集成，由于hideLineAndUAV、highlightLine、resetLine接口只调用一层函数甚至不调用，因此只测试generateLineAndUAV、DeriveUAVLocation这2个接口。使用等价类的方法对generateLineAndUAV、DeriveUAVLocation这2个接口设计测试用例
- 在前端和MarkerGeneration模块进行的集成测试中，对于displayDots、hideDots、highlightDots这三个接口，从输入域和输出域覆盖上进行测试用例的设计，同时考虑接口功能的完整性
- 参考等价类划分方法
- 参考边界值分析方法
- 参考使用错误猜测方法



    <n-blockquote>
        集成测试是将单元测试过的模块组装在一起，测试它们在一起工作是否正常,目的是发现模块间的接口错误。
    </n-blockquote>
    <n-h2>测试工具</n-h2>
    <n-text tag="div">
      本项目测试使用Unity Test Runner、JUnit、unittest对unity端组件及springboot端组件进行集成测试。
    </n-text>
    <n-h2>测试依据</n-h2>
    <n-text tag="div">
      集成测试的依据是概要设计规约。被测对象包括<br>
      被测系统的前端和后端接口、前端和Unity接口、Unity类方法之间的接口、后端类方法之间的接口及与第三方系统的接口。
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