<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import IntegrationHomeVue from '../../components/integrationTesting/IntegrationHome.vue'

const tabs = [
  {
    name: 'home',
    tab: '集成测试',
  }
]
const reports =[
  {
    name: 'Backend-ITReport0.0',
    tab: 'Backend-ITReport0.0',
    testCase: '测试后端接口，发现Risk类的接口在前端传入错误输入时仍然能够正常处理，未能检测到错误。',
    html: '/ITReport-backend/index0.html'
  },
  {
    name: 'Backend-ITReport0.1',
    tab: 'Backend-ITReport0.1',
    testCase: '修改Risk类的接口，使其在前端传入错误输入时能够正常处理，测试通过。',
    html: '/ITReport-backend/index1.html'
  },
  {
    name: 'Unity-ITReport0.0',
    tab: 'Unity-ITReport0.0',
    testCase: '使用',
    html: '/ITReport-Unity/index.html'
  }
]

</script>

<template>
  <div class="root-wrapper">
    <div class="left-part">
      <n-tabs type="line" animated default-value="home">
        <n-tab-pane v-for="{name, tab} in tabs" :key="name" :name="name" :tab="tab">
          <integration-home-vue v-if="name === 'home'" />
        </n-tab-pane>
      </n-tabs>
    </div>
    <div class="right-part">
      <n-tabs type="line" animated default-value="Backend-ITReport0.0">
        <n-tab-pane v-for="{ name, tab, testCase, html } in reports" :key="name" :name="name" :tab="tab">
          <unit-panel-vue context="name">
            <div>
              <h2>{{ tab }}</h2>
            </div>
              <p>{{ testCase }}</p>
              <div class="iframe-container">
                <iframe v-if="html" :src="html" style="width: 100%; height: 500px;" frameborder="0"></iframe>
              </div>
          </unit-panel-vue>
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