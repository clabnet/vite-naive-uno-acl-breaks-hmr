<script setup lang="ts">
  import { useMessage } from 'naive-ui'
  import { useClipboard } from '@vueuse/core'
  import { Copy } from '@vicons/carbon'

  const message = useMessage()
  const source = ref('Hello')
  const { copy, isSupported } = useClipboard({ source })

  type Props = {
    label: string
    value: string
  }

  withDefaults(defineProps<Props>(), { label: 'ID', value: '' })

  const copyToClipboard = (value: string) => {
    copy(value)
    message.success('Copied to clipboard')
  }
</script>

<template>
  <div class="-mt-6">
    <div flex>
      <span type="text" class="text-xs text-gray-300">{{ label }} : {{ value }} </span>
      <n-button v-if="isSupported" text @click="copyToClipboard(value)">
        <n-tooltip placement="bottom" trigger="hover">
          <template #trigger>
            <n-icon ml-2 size="15" :depth="3">
              <Copy />
            </n-icon>
          </template>
          <span>Copy {{ label }}</span>
        </n-tooltip>
      </n-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .copy-button {
    color: var(--select-text-color);
  }
</style>
