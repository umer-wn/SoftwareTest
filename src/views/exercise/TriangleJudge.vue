<script setup lang="ts">
import type { ECOption } from '@/interface'
import * as echarts from 'echarts/core'
import TestPanel from '../../components/TestPanel.vue'
import { NSpace, NSpin } from 'naive-ui'

// 上下文
const context = 'triangleJudge'

// 测试用例集选项
const options = [
  {
    label: '边界值',
    value: 'boundary-value',
    children: [
      {
        label: '基本边界值',
        value: 'basic-boundary',
      },
      {
        label: '健壮边界值',
        value: 'robustness-boundary',
      },
    ]
  },
  {
    label: '等价类',
    value: 'equivalence',
    children: [
      {
        label: '弱一般等价类',
        value: 'weak-general-equivalent',
      },
      {
        label: '强一般等价类',
        value: 'strong-general-equivalent',
      },
      {
        label: '弱健壮等价类',
        value: 'weak-robustness-equivalent',
      },
      {
        label: '强健壮等价类',
        value: 'strong-robustness-equivalent',
      },
    ]
  }
]

// 实现代码
const code = `function triangleJudge(a: number, b: number, c: number): string {
  if (a <= 0 || b <= 0 || c <= 0 || a > 200 || b > 200 || c > 200) {
    return '边长数值越界'
  }
  if (
    a + b > c &&
    a + c > b &&
    b + c > a
  ) {
    if (a === b && a === c) {
      return '该三角形是等边三角形'
    } else if (a === b || a === c || b === c) {
      return '该三角形是等腰三角形'
    } else {
      return '该三角形是普通三角形'
    }
  } else {
    return '所给三边数据不能构成三角形'
  }
}

`

// 程序版本集
const versions = [
  {
    label: '0.0.0',
    value: '0.0.0'
  },
  {
    label: '0.1.0',
    value: '0.1.0'
  },
]

// ECharts 绘图选项
const ecOption: ECOption = {
  xAxis: {
    type: 'category',
    data: ['0.0.0版本', '0.1.0版本']
  },
  yAxis: [
    {
      type: 'value',
      name: '测试用例通过率',
      alignTicks: true,
      position: 'left',
      axisLabel: {
        formatter: '{value} %'
      }
    },
    {
      type: 'value',
      name: '测试用例通过数',
      position: 'right',
    }
  ],
  tooltip: {
    trigger: 'axis'
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      data: [
        {
          value: 32/36 * 100,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.8, color: "#188df0" },
              { offset: 1, color: "#188df0" },
            ]),
          }
        },
        {
          value: 100,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.8, color: "#188df0" },
              { offset: 1, color: "#188df0" },
            ]),
          }
        }
      ],
      type: 'bar',
      yAxisIndex: 0,
      name: '测试用例通过率',
      tooltip: {
        valueFormatter: (value) => value + ' %'
      }
    },
    {
      data: [
        {
          value: 32,
          itemStyle: {
            color: 'green'
          }
        },
        {
          value: 36,
          itemStyle: {
            color: 'green'
          }
        }
      ],
      type: 'line',
      yAxisIndex: 1,
      markPoint: {
        data: [
          { type: 'max', name: 'Max' }
        ]
      },
      name: '测试用例通过数',
      tooltip: {
        valueFormatter: (value) => value + ' 个'
      }
    }
  ]
}

// 代码版本迭代信息
const iteration = {
  columns: [{
    title: '版本号',
    key: 'version'
  }, {
    title: '测试数据集',
    key: 'dataset'
  }, {
    title: '测试情况',
    key: 'result'
  }, {
    title: '缺陷描述',
    key: 'bug'
  }],
  data: [{
    key: '0',
    version: '0.0.0',
    dataset: '强健壮等价类',
    result: '通过32/36',
    bug: '缺少边界值测试'
  }, {
    key: '1',
    version: '0.1.0',
    dataset: '强健壮等价类',
    result: '通过36/36',
    bug: '测试全部通过'
  }]
}
</script>

<template>
  <Suspense>
    <test-panel
      :context="context"
      :options="options"
      :code="code"
      :versions="versions"
      :ec-option="ecOption"
      :iteration="iteration"
    >
      <template #header>
        <h1>Question 01. 判断三角形类型</h1>
      </template>
      <template #subtitle-description>
        <h2>问题描述</h2>
      </template>
      <template #question-detail>
        判断三角形类型
      </template>
      <template #subtitle-agorithm>
        <h2>用例设计</h2>
      </template>
      <template #agorithm-detail >
        <div class="flex-container">
    <div class="flex-item">
      <b>边界值</b>
      <p>对本题的情况采用健壮性边界分析，基于单缺陷假设，对每一个输入变量，分别取其略小于最小值，最小值，比最小值大的值，正常值，比最大值小的值，最大值，略大于最大值的值，同时其余变量取正常值。按照该方法处理，则最终的测试用例数量应为6*n+1（n为变量个数）。</p>     
    </div>    
    <div class="flex-side">
      <p> </p>
    </div>
    <div class="flex-item">
      
      <b>等价类</b>
      <p>对本题采用等价类方法分析时，可以看到该问题的输出有四类，分别是等边三角形（Equilateral triangle），等腰三角形(Isosceles triangle)，不等边三角形(Normal triangle)与非三角形(Not triangle)。<br>
R1={&lt;a,b,c>:等边三角形}<br>
R2={&lt;a,b,c>:等腰三角形}<br>
R3={&lt;a,b,c>:不等边三角形}<br>
R4={&lt;a,b,c>:三条边不构成三角形}</p>

    </div>
  </div>
    </template>
    </test-panel>
    <template #fallback>
      <n-space
        class="spin-container"
        align="center"
        justify="center"
      >
        <n-spin size="large" />
      </n-space>
    </template>
  </Suspense>
</template>

<style>
.steps-ol {
  margin-top: .5em;
  padding-left: 2em;
}
.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-item {
  flex: 6;
}
.flex-side {
  flex: 1;
}
.responsive-image1 {
  max-width: 100%;
  height: auto;
}
.responsive-image2 {
  max-width: 200%;
}
</style>