<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import UnitHomeVue from '../../components/unitTesting/UnitHome.vue'

const tabs = [
  {
    name: 'home',
    tab: '单元测试',
  }
]
const reports =[
  {
    name: 'Unity-UTReport0.0',
    tab: 'Unity-UTReport0.0',
    testCase: '使用强健壮等价类设计测试用例,选取了unity端38个类中的6个类进行测试，代码覆盖率36.4%，方法覆盖率39.7%',
    html: '/UTReport-unity1/Report/index.html',
    defect: '暂无',
  },
  {
    name: 'Backend-UTReport0.0',
    tab: 'Backend-UTReport0.0',
    testCase: '使用强健壮等价类设计测试用例,选取了springboot端16个类中的11个类进行测试，代码覆盖率32.7%，方法覆盖率30.4%',
    html: '/UTReport-backend/index.html',
    defect: '暂无',
  },
]

</script>

<template>
  <div class="root-wrapper">
    <div class="left-part">
      <n-tabs type="line" animated default-value="home">
        <n-tab-pane v-for="{name, tab} in tabs" :key="name" :name="name" :tab="tab">
          <unit-home-vue v-if="name === 'home'" />
        </n-tab-pane>
      </n-tabs>
    </div>
    <div class="right-part">
      <n-tabs type="line" animated default-value="Backend-UTReport0.0">
        <n-tab-pane v-for="{ name, tab, testCase, html,defect } in reports" :key="name" :name="name" :tab="tab">
          <unit-panel-vue context="name">
            <div>
              <h2>{{ tab }}</h2>
            </div>
              <p>{{ testCase }}</p>
              <!--defevt为代码块-->
              <div>
                <pre><code>{{ "function sayHello() {\n  console.log(\"Hello, world!\")\;\n}" }}</code></pre> </div>
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