# Libre Testing

## 简介

同济大学软件学院 2024 软件测试课设，一个**自动化测试平台**。
项目来源[libre-test](https://github.com/3fuyang/libre-testing)

> 集成测试与系统测试使用的项目：
[前端](https://github.com/kylin370370/CurtainWall)
[后端](https://github.com/kylin370370/3DBackEnd)
unity端未上传

## 使用说明

### How to Run

Make sure [Node.js (`>20.x.x`)](https://nodejs.org/en) is available on your device.

```bash
# Enable package manager
corepack enable

# Install dependencies
pnpm i

# Run dev server
pnpm dev

# Build
pnpm build
```

### 平时练习

包含判断三角形类型、万年历问题、电信收费、电脑销售系统共四个题目。

**使用方法：**

+ **使用自带用例集**：在右边栏选择**版本号**和**用例类型**后，点击"**开始测试**"按钮即可；
+ **上传用例集**：注意，上传用例集功能要求用例集遵循一定的**格式**，具体可参考 `/public/testUsecases/*.csv`

### 项目测试

包括单元测试、集成测试（组件测试）和系统测试（测试）

单元测试使用工具:
    springboot:Junit/动态、UnityEngineAnalyzer/静态
    Unity:  Unity Test Runner/动态、UnityEngineAnalyzer/静态
集成测试使用工具:
    springboot:Junit
    Unity:  Unity Test Runner、Code Coverage、unittest
系统测试使用工具:
    seleniumIDE

最终测试报告以html的格式展示在前端

## One More Thing

从来不写前端的人学了很多，感谢前辈，完整模板的应用是头一次接触
