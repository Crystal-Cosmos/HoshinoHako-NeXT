<script setup lang="ts">
import { computed } from "vue";

type ButtonType = "primary" | "default" | "dashed" | "link" | "text";

const props = withDefaults(
  defineProps<{
    href: string;
    label?: string;
    newTab?: boolean;
    referrerPolicy?: string;
    type?: ButtonType;
    ghost?: boolean;
  }>(),
  {
    label: "下载",
    newTab: false,
    referrerPolicy: "origin",
    type: "primary",
    ghost: true,
  },
);

const target = computed(() => (props.newTab ? "_blank" : "_self"));
const rel = computed(() => (props.newTab ? "noopener noreferrer" : undefined));
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#ffb300',
      },
    }"
  >
    <a-space class="download-button-space" wrap>
      <a-button
        :type="type"
        :ghost="ghost"
        :href="href"
        :target="target"
        :rel="rel"
        :referrerpolicy="referrerPolicy"
      >
        {{ label }}
      </a-button>
    </a-space>
  </a-config-provider>
</template>

<style scoped>
.download-button-space :deep(.ant-btn),
.download-button-space :deep(.ant-btn span) {
  font-family: inherit;
}
</style>
