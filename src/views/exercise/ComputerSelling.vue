<script setup lang="ts">
import * as echarts from 'echarts/core'
import TestPanel from '../../components/TestPanel.vue'
import type { ECOption } from '@/interface'
import { NSpace, NSpin } from 'naive-ui'

// 上下文
const context = 'computerSelling'

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
      }
    ]
  }
]

// 实现代码
const code = `function computerSelling(host: number, monitor: number, peripheral: number): string {
  if (host == -1) {
    return "系统开始统计月度销售额"
  }
  if (host <= 0 || monitor <= 0 || peripheral <= 0) {
    return "数据非法，各部件销售数量不能小于1"
  }
  if (host > 70) {
    return "数据非法，主机销售数量不能超过70"
  }
  if (monitor > 80) {
    return "数据非法，显示器销售数量不能超过80"
  }
  if (peripheral > 90) {
    return "数据非法，外设销售数量不能超过90"
  }

  const totalSales: number = host * 25 + monitor * 30 + peripheral * 45;
  if (totalSales <= 1000) {
    return String(totalSales * 0.1)
  } else if (totalSales <= 1800) {
    return String(totalSales * 0.15)
  } else {
    return String(totalSales * 0.2)
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
    label: '0.0.1',
    value: '0.0.1'
  },
]

// ECharts 绘图选项
const ecOption: ECOption = {
  xAxis: {
    type: 'category',
    data: ['0.0.0版本','0.0.1版本']
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
          value: 19/20*100,
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
          value: 19,
          itemStyle: {
            color: 'green'
          }
        },
        {
          value: 20,
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
  data: [
    {
    key: '0',
    version: '0.0.0',
    dataset: '健壮边界值',
    result: '通过19/20',
    bug: '忽略了主机位-1的情况'
  },
  {
    key: '1',
    version: '0.0.0',
    dataset: '健壮边界值',
    result: '通过20/20',
    bug: '全部通过'
  }
]
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
        <h1>Question 03. 电脑销售问题</h1>
      </template>
      <template #subtitle-description>
        <h2>问题描述</h2>
      </template>
      
      <template #question-detail>
        电脑销售员定价如下：主机25r/台，最多出售70台；显示器r/台，最多出售80台，外设45r/台，最多出售90台。
        每个销售员每月至少销售一台完整的机器，当销售额小于等于1000时按照10%提佣金；当销售额在1000-1800之间时按照15%提佣金；当销售额大于1800时按照20%提佣金。
        计算销售员的佣金。
      </template>

      <template #subtitle-agorithm>
        <h2>用例设计</h2>
      </template>

      <template #agorithm-detail>
        在本题中，测试用例的输入变量有主机销售量(1<=x<=70)、显示器销售量(1<=y<=80)、外设销售量(1<=z<=90)，输出变量是员工销售总额（sum>=100)和员工佣金。
        其中主机销售数量、显示器销售数量、外设销售数量相互独立，员工佣金取决于员工销售总额。采用边界值分析，对其分别取min，min+，normal，max-，max。<br>
        &nbsp;&nbsp;&nbsp;x∈{1，2，35，69，70}&nbsp;&nbsp;&nbsp;y∈{1，2，40，79，80}&nbsp;&nbsp;&nbsp;z∈{1，2，45，89，90}<br>
        再增加健壮性分析：每个集合再分别增加min-,max+的取值。<br>
        &nbsp;&nbsp;&nbsp;x∈{0，1，2，35，69，70，71}&nbsp;&nbsp;&nbsp;y∈{0，1，40，40，79，80，81}&nbsp;&nbsp;&nbsp;z∈{0，1，2，45，89，90，91}<br>
        当x=-1时输出员工当月销售总额。
        共有6*3+1+1=20个测试用例
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
</style>