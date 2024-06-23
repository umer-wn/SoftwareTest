<script lang="ts" setup>
import { NCard, NText, NA, NBlockquote, NH2, NImage, NUl, NLi } from 'naive-ui'

</script>

<template>
  <n-card class="unit-home-wrapper">
    <n-h2>系统测试</n-h2>
    <n-blockquote>
      在 Vue 环境下的单元与组件测试，都是在<strong>开发模式</strong>下进行的，在部署到生产时，对应用整体覆盖的能力有限。因此需要使用系统测试来保证测试的全面性。
    </n-blockquote>
      对整个软件系统进行测试，以验证软件系统是否满足规定的需求，确保软件的质量。系统测试的目标是确保软件的功能、性能、安全性、兼容性等方面都符合预期的要求，并且能够在各种实际环境中稳定运行。
    <n-h2>测试工具</n-h2>
    <n-text tag="div">
      本项目使用端到端测试框架seleniumIDE作为测试工具，这是一款浏览器插件，结合浏览器提供脚本的录制、回放以、编辑脚本功能、以及元素的定位，
      可以使用selenium IDE将录制的脚本生成相应的带单元测试框架的自动化测试脚本。
    </n-text>
    <n-h2>测试对象</n-h2>
    <n-text tag="div">
      本项目的测试对象是整个软件系统，项目前端为<n-a
        href="https://github.com/kylin370370/CurtainWall"
        target="_blank"
      >CurtainWall
      </n-a>
      ，项目后端为<n-a
        href="https://github.com/kylin370370/3DBackEnd"
        target="_blank"
      >3DBackEnd
      </n-a>
    </n-text>
  </n-card>
</template>

<style scoped>
.unit-home-wrapper {
  height: 41.5em;
  box-sizing: border-box;
  overflow-y: auto; /* 添加这一行 */
}

.cypress-logo {
  height: 1.2em;
}
</style>