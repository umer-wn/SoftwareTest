<script setup lang="ts">
import * as echarts from 'echarts/core'
import TestPanel from "../../components/TestPanel.vue"
import type { ECOption } from '@/interface'
import { type CascaderOption, NSpin, NSpace } from 'naive-ui';

// 上下文
const context = "calendarProblem"

// 测试用例集选项
const options: CascaderOption[] = [
  {
    label: "边界值",
    value: "boundary-value",
    children: [
      {
        label: "基本边界值",
        value: "basic-boundary",
      },
      {
        label: "健壮边界值",
        value: "robustness-boundary",
      },
    ],
  },
  {
    label: "等价类",
    value: "equivalence",
    children: [
      {
        label: "强一般等价类",
        value: "strong-general-equivalent",
      },
      {
        label: "强健壮等价类",
        value: "strong-robustness-equivalent",
      },
    ],
  },
  {
    label: "决策表",
    value: "decision",
    children: [
      {
        label: "决策表",
        value: "decision-table",
      },
    ],
  },
];

// 实现代码
const code = `def is_leap_year(year):
    #判断闰年
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def validate_date(year, month, day):
    #验证输入的日期是否合法
    if year < 1 or month < 1 or month > 12:
        return False, "年份和月份必须为正整数，且月份在1到12之间。"
    if month in [1, 3, 5, 7, 8, 10, 12]:
        if day < 1 or day > 31:
            return False, "该月份的天数应在1到31之间。"
    elif month in [4, 6, 9, 11]:
        if day < 1 or day > 30:
            return False, "该月份的天数应在1到30之间。"
    elif month == 2:
        if is_leap_year(year):
            if day < 1 or day > 29:
                return False, "该月份为闰年的2月，天数应在1到29之间。"
        else:
            if day < 1 or day > 28:
                return False, "该月份为平年的2月，天数应在1到28之间。"
    return True, ""

def next_day(year, month, day):
    if validate_date(year, month, day)[0]:
        if month in [1, 3, 5, 7, 8, 10]:
            if day == 31:
                return year, month + 1, 1
            else:
                return year, month, day + 1
        elif month == 12:
            if day == 31:
                return year + 1, 1, 1
            else:
                return year, month, day + 1
        elif month == 2:
            if is_leap_year(year):
                if day == 29:
                    return year, month + 1, 1
                else:
                    return year, month, day + 1
            else:
                if day == 28:
                    return year, month + 1, 1
                else:
                    return year, month, day + 1
        else:
            if day == 30:
                return year, month + 1, 1
            else:
                return year, month, day + 1
    else:
        return None

def main():
    while True:
        try:
            year = int(input("请输入年份："))
            month = int(input("请输入月份："))
            day = int(input("请输入日期："))
            valid, reason = validate_date(year, month, day)
            if valid:
                next_year, next_month, next_day = next_day(year, month, day)
                print("下一天的日期是：{}年{}月{}日".format(next_year, next_month, next_day))
                break
            else:
                print("输入的日期不合法：", reason)
        except ValueError:
            print("请输入有效的整数。")

if __name__ == "__main__":
    main()

`

// 程序版本集
const versions = [
  {
    label: "0.0.0",
    value: "0.0.0",
  },
  {
    label: "0.1.0",
    value: "0.1.0",
  },
  {
    label: "0.2.0",
    value: "0.2.0",
  },
]

// ECharts 绘图选项
const ecOption: ECOption = {
  xAxis: {
    type: "category",
    data: ["0.0.0版本", "0.1.0版本", "0.2.0版本"],
  },
  yAxis: [
    {
      type: "value",
      name: "测试用例通过率",
      alignTicks: true,
      position: "left",
      axisLabel: {
        formatter: "{value} %",
      },
    },
    {
      type: "value",
      name: "测试用例通过数",
      position: "right",
    },
  ],
  tooltip: {
    trigger: "axis",
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      data: [
        {
          value: 124/131*100,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.8, color: "#188df0" },
              { offset: 1, color: "#188df0" },
            ]),
          },
        },
        {
          value: 129/131*100,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.8, color: "#188df0" },
              { offset: 1, color: "#188df0" },
            ]),
          },
        },
        {
          value: 100,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.8, color: "#188df0" },
              { offset: 1, color: "#188df0" },
            ]),
          },
        },
      ],
      type: "bar",
      yAxisIndex: 0,
      name: "测试用例通过率",
      tooltip: {
        valueFormatter: (value) => value + " %",
      },
    },
    {
      data: [
        {
          value: 124,
          itemStyle: {
            color: "green",
          },
        },
        {
          value: 129,
          itemStyle: {
            color: "green",
          },
        },
        {
          value: 131,
          itemStyle: {
            color: "green",
          },
        },
      ],
      type: "line",
      yAxisIndex: 1,
      markPoint: {
        data: [{ type: "max", name: "Max" }],
      },
      name: "测试用例通过数",
      tooltip: {
        valueFormatter: (value) => value + " 个",
      },
    },
  ],
}

// 代码版本迭代信息
const iteration = {
  columns: [
    {
      title: '版本号',
      key: 'version'
    },
    {
      title: '测试数据集',
      key: 'dataset'
    },
    {
      title: '测试情况',
      key: 'result'
    },
    {
      title: '缺陷描述',
      key: 'bug'
    }
  ],
  data: [
    {
      key: '0',
      version: '0.0.0',
      dataset: '强健壮等价类',
      result: '通过124/131',
      bug: '当处于当月最后一天、当月为12月时的年月计算逻辑有误'
    },
    {
      key: '1',
      version: '0.1.0',
      dataset: '强健壮等价类',
      result: '通过129/131',
      bug: '闰年判断逻辑有误，整百年的特殊情况误判'
    },
    {
      key: '2',
      version: '0.2.0',
      dataset: '强健壮等价类',
      result: '通过131/131',
      bug: '测试全部通过'
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
        <h1>Question 02. 万年历问题</h1>
      </template>
      <template #subtitle-description>
        <h2>问题描述</h2>
      </template>
      <template #question-detail>
        输入年份、月份、日期三个数值，计算下一天的日期。
        如果输入的日期不合法，输出具体的错误信息。
      </template>
      <template #subtitle-agorithm>
        <h2>算法思想</h2>
      </template>
      <template #agorithm-detail>
        本问题输入变量为年份、月份、日期三个，首先需要对输入的日期进行合法性判断，确定输入日期符合规范后再进行计算下一天的日期。
        <ol class="steps-ol">
          <li>程序分为两个模块，分别是输入判断与输出处理：</li>
          <li>输入判断通过计算边界值、闰年平年等特殊情况做错误提示；</li>
          <li>确认输入日期合法后，计算下一天的日期。</li>
          <li>如果出现跨年、跨月的情况，需要特殊处理。</li> 
        </ol>
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
.spin-container {
  height: calc(100vh - 5rem);
}
</style>