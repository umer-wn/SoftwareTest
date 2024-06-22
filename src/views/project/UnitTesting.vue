<script setup lang="ts">
import { ref } from 'vue'
import { NTabs, NTabPane } from 'naive-ui'
import UnitPanelVue from '../../components/unitTesting/UnitPanel.vue'
import UnitHomeVue from '../../components/unitTesting/UnitHome.vue'

const tabs = [
  {
    name: 'home',
    tab: '单元测试',
  },
  {
    name: 'unity-system',
    tab: 'unity模块',
    testCase: '使用强健壮等价类设计测试用例,包含选点模块和相机模块。该单元测试使用unity test runner实现,选取了unity端38个类中的6个类进行测试，代码覆盖率36.4%，方法覆盖率39.7%',
    html: '/UTReport-unity1/Report/index.html'
  },
  {
    name: 'springboot-backend',
    tab: '后端模块',
    testCase: '使用强一般等价类设计测试用例。',
    html: '/UTReport-backend/index1.html'
  },
]

const versions = ref([
  { label: 'version0', value: '/UTReport-backend/index0.html' },
  { label: 'version1', value: '/UTReport-backend/index1.html' },
])

const version = ref('/UTReport-backend/index0.html')

</script>

<template>
  <n-tabs type="line" animated default-value="home">
    <n-tab-pane v-for="{ name, tab, testCase, html} in tabs" :key="name" :name="name" :tab="tab">
      <unit-home-vue v-if="name === 'home'" />
      <unit-panel-vue v-else :context="name">
        <template #title>
          <h2>{{ tab }}</h2>
        </template>
        <template #test-case>
          <p>{{ testCase }}</p>
          <div v-if="name === 'springboot-backend'">
            <select v-model="version" style="margin-bottom: 100em;width: auto;">
              <option v-for="item in versions" :key="item.value" :value="item.value">{{ item.label }}</option>
            </select>
            <iframe :src=version style="width: 100%; height: 500px;" frameborder="0"></iframe>
          </div>
          <div v-else class="iframe-container">
            <iframe v-if="html" :src="html" style="width: 100%; height: 500px;" frameborder="0"></iframe>
          </div>
        </template>
      </unit-panel-vue>
    </n-tab-pane>
  </n-tabs>
</template>


<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
}
.left-part {
  width: 20em;
}
.right-part {
  box-sizing: border-box;
  width: 100em;
}

.iframe-container {
  overflow-y: auto; /* 添加滚动条 */
  max-height: 100%; /* 或者根据需要设置一个具体的最大高度 */
}
</style>