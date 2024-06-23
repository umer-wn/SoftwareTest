<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import SystemHomeVue from '../../components/systemTesting/SystemHome.vue'

const tabs = [
  {
    name: 'home',
    tab: '集成测试',
  }
]
const reports =[
  {
    name: 'System-STReport0.0',
    tab: 'System-STReport0.0',
    testCase: '使用seleniumIDE进行系统测试，针对系统业务功能设计6组设计用例；针对系统业务流设计5组测试用例，统一使用seleniumIDE模拟用户输入实现',
    html: '/STReport/report.html'
  }
]

</script>

<template>
  <div class="root-wrapper">
    <div class="left-part">
      <n-tabs type="line" animated default-value="home">
        <n-tab-pane v-for="{name, tab} in tabs" :key="name" :name="name" :tab="tab">
          <System-home-vue v-if="name === 'home'" />
        </n-tab-pane>
      </n-tabs>
    </div>
    <div class="right-part">
      <n-tabs type="line" animated default-value="System-STReport0.0">
        <n-tab-pane v-for="{ name, tab, testCase, html } in reports" :key="name" :name="name" :tab="tab">
          <system-panel-vue context="name">
            <div>
              <h2>{{ tab }}</h2>
            </div>
              <p>{{ testCase }}</p>
              <div class="iframe-container">
                <iframe v-if="html" :src="html" style="width: 100%; height: 500px;" frameborder="0"></iframe>
              </div>
          </system-panel-vue>
        </n-tab-pane>
      </n-tabs>
  </div>
  </div>  
</template>

<style scoped>
.root-wrapper {
  display: flex;
  gap: .5em;
  font-size: 1rem;
}
.left-part {
  width: 16em;
}
.iframe-container {
  overflow-y: auto; /* 添加滚动条 */
  max-height: 100%; /* 或者根据需要设置一个具体的最大高度 */
}
.right-part {
  box-sizing: border-box;
  width: 70em;
}
</style>