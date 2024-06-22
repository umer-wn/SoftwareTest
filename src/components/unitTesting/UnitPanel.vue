<script lang="ts" setup>
import { NCard, NText, NH2, NDataTable, type DataTableColumns } from 'naive-ui'
const pagination = {
  pageSize: 10
}
</script>

<template>
  <n-card class="unit-panel-wrapper">
    <n-h2>
      <slot name="title" />
    </n-h2>
    <n-text tag="div">
      <slot name="test-case" />
    </n-text>
    <br>
    <n-data-table
      size="small"
      :max-height="40000"
      :bordered="true"
      :pagination="pagination"
    />
  </n-card>
</template>

<style scoped>
.unit-panel-wrapper {
  box-sizing: border-box;
  height: 41.5em;
}
</style>