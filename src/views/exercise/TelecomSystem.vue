<script setup lang="ts">
import * as echarts from 'echarts/core'
import TestPanel from '../../components/TestPanel.vue'
import type { ECOption } from '@/interface'
import { NSpace, NSpin, c } from 'naive-ui'


// 上下文
const context = 'telecomSystem'

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
      {
        label: '最坏边界值',
        value: 'worst-boundary',
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
  },
  {
    label: '决策表',
    value: 'decision',
    children: [
      {
        label: '决策表',
        value: 'decision-table',
      }
    ]
  }
]

// 实现代码
const code = `function telecomSystem(callingTime: number, count: number): string {
  if (callingTime < 0 || callingTime > 31 * 24 * 60) {
    return "通话时长数值越界"
  }
  if (count < 0 || count > 11) {
    return "未按时缴费次数越界"
  }

  const maxNum: number[] = [1, 2, 3, 3, 6]
  const level: number = getLevel(callingTime)
  if (count <= maxNum[level - 1]) {
    return String(Math.round((25 + 0.15 * callingTime * (1 - (level + 1) * 0.005)) * 100) / 100)
  } else {
    return String(Math.round((25 + 0.15 * callingTime) * 100) / 100)
  }
}

function getLevel(time: number): number {
  if (time > 0 && time <= 60)
    return 1
  else if (time > 60 && time <= 120)
    return 2
  else if (time > 120 && time <= 180)
    return 3
  else if (time > 180 && time <= 300)
    return 4
  else
    return 5
}`

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
          value: 79.6,
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
          value: 46,
          itemStyle: {
            color: 'green'
          }
        },
        {
          value: 49,
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
    result: '通过39/49',
    bug: '获取最大允许未按时缴费次数时索引值有误'
  }, {
    key: '1',
    version: '0.1.0',
    dataset: '强健壮等价类',
    result: '通过46/49',
    bug: '测试全部通过'
  }]
}

import { ref } from 'vue';

let imagePath1 = ref('../public/equalclass.png');
let imagePath2 = ref('../public/decisiontable.png');
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
        <h1>Question 04. 电信收费问题</h1>
      </template>
      <template #subtitle-description>
        <h2>问题描述</h2>
      </template>
      
      <template #question-detail>
        A.每月的电话总费用=基本月租费+通话费，若未折扣则按实际通话费计算，基本月租费为25元，每分钟通话费为0.15元。<br>
        B.实际通话费是否有折扣与当月的通话时间（分钟）和本年度至本月的累计未按时缴费的次数有关。<br>
        C.当月的通话分钟数和折扣比例与未按时缴费次数之间有直接的对应关系，若未按时缴费的次数超过对应的容许值则免于折扣。<br>
        <table>
          <thead>
            <tr>
              <th>通话分钟数</th>
              <th>未按时缴费次数</th>
              <th>折扣比例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0＜通话时间≤60</td>
              <td>1</td>
              <td>1.0%</td>
            </tr>
            <tr>
              <td>0＜通话时间≤60</td>
              <td>1</td>
              <td>1.0%</td>
            </tr>
            <tr>
              <td>60＜ 通话时间≤120</td>
              <td>2</td>
              <td>1.5%</td>
            </tr>
            <tr>
              <td>120＜ 通话时间≤180</td>
              <td>3</td>
              <td>2.0%</td>
            </tr>
            <tr>
              <td>180＜ 通话时间≤300</td>
              <td>3</td>
              <td>2.5%</td>
            </tr>
            <tr>
              <td>300＜ 通话时间</td>
              <td>6</td>
              <td>3.0%</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #subtitle-agorithm>
        <h2>用例设计</h2>
      </template>
      <template #agorithm-detail >
        <div class="flex-container">
    <div class="flex-item">
      <b>边界值</b>
      <p>对于当月通话的分钟数，最小值为0，考虑到有31天的月份，该变量最大值可为44640（即60×24×31）。略小于最小值取-1，略大于最小值取1，略小于最大值取44639，略大于最大值取44641.
        对于本年度未按时缴费次数，最小值为0，考虑到一年12个月，该变量最大值为11。画出如下图所示的强健壮等价类测试用例分布。其中1到25（绿色部分）是强一般等价类的测试用例，26到49是额外强健壮部分的测试用例。</p>
        <img :src="imagePath1" alt="Equal Class" class="responsive-image1">
      
    </div>
    
    <div class="flex-side">
      <p> </p>
    </div>
    <div class="flex-item">
<b>决策表</b>
      <p>需要使用拓展条目决策表。为简化表述，分别使用N和M来表示当月通话的分钟数和本年度未按时缴费次数这两个条件变量。条件变量N的取值范围有：<br>
       N1={N&lt;0}、N2={0≤N≤60}、N3={60&lt;N≤120}、N4={120&lt;N≤180}、N5={180&lt;N≤300}、N6={300&lt;N≤44640}、N7={N&gt;44640}<br>
       条件变量M的取值范围有：<br>
       M1={M&lt;0}、M2={0,1}、M3={2}、M4={3}、M5={4,5,6}、M6={7,8,9,10,11}、M7={M&gt;11}
       </p>
       <img :src="imagePath2" alt="decision table" class="responsive-image2">    
</div>
    
    <div class="flex-side"><p> </p></div>
    <div class="flex-item">
      
      <b>等价类</b>
      <p>对于当月通话的分钟数，有效等价类有[0,60]，(60,120]，(120,180]，(180,300]，(180,44640]，无效等价类有(-∞,0)和(44640,+∞)。
对于本年度未按时缴费次数，有效等价类有{0,1}，{2}，{3}，{4,5,6}，{7,8,9,10,11}，无效等价类有{n|n<0}和{n|n>11}。</p>

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

<style scoped>
table {
  border-collapse: collapse; /* 合并边框 */
  margin: 200 auto; /* 让表格居中 */
}

td, th {
  border: 1px solid black; /* 给单元格添加框线 */
  text-align: center; /* 让单元格的内容居中 */
  width: 240px; /* 设置单元格的宽度 */
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
