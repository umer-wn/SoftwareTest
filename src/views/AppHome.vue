<script setup lang="ts">
import { NIcon, NCard, NSpace, NP, NDivider } from 'naive-ui'
import { AddSharp, LogoCss3 } from '@vicons/ionicons5'
import IconNaiveUi from '../components/icons/IconNaiveUI.vue'
import IconVite from '../components/icons/IconVite.vue'
import IconVue from '../components/icons/IconVue.vue'

</script>

<template>
  <n-card
    class="home-box"
    content-style="padding-bottom: 0;"
    footer-style="margin-bottom: 0;padding-bottom: 0;"
  >

  </n-card>
</template>

<style scoped>

.home-box {
  
  width: 100%;
  height: 88vh;
  overflow: auto;
  color: #207883;
}

.css3-logo {
  margin: .4em 0 .1em 0;
}

.project-title {
  font-size: 2.4em;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.divider {
  width: 60%;
  margin: .8em auto;
}

.tech-stack {
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: .8em;
}

.vue-logo {
  padding-top: .05em;
}

.intro {
  margin-top: .8em;
  font-size: 1.2em;
  font-weight: 510;
}

.try {
  font-size: 1.2em;
  font-weight: 500;
  margin: .8em 0 3.6em 0;
}

.flex-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  padding: .5rem;
}

.icp {
  color: #7d7d7d;
  margin: 0;
  padding: 0;
  overflow: auto;
}

.icp:link {
  text-decoration: none;
}

.icp:visited {
  color: #777;
  text-decoration: underline;
}

.icp:hover {
  color: #207883;
  text-decoration: underline;
}

icp:active {
  color: #2988fc;
  text-decoration: underline;
}
</style>