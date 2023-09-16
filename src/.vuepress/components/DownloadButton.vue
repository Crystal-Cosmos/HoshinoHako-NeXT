<template>
  <a-space>
    <a-button type="primary" :size="size">
      <template #icon>
        <DownloadOutlined />
      </template>
      下载
    </a-button>
  </a-space>
</template>
<script lang="ts" setup>
import { DownloadOutlined } from '@ant-design/icons-vue';
import type { SizeType } from 'ant-design-vue/es/config-provider';
import { ref } from 'vue';
const size = ref<SizeType>('large');
</script>

  