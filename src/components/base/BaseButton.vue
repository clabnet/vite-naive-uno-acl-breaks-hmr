<script setup lang="ts">
  import { useAcl } from 'vue-simple-acl'

  import { useAttrs } from 'vue'
  const attrs = useAttrs()

  type Props = {
    label?: string
    icon?: object
    tip: string
    size?: string // tiny, small, medium, large
    rolesEnabled?: []
  }

  const props = withDefaults(defineProps<Props>(), { label: '', tip: '', size: '', rolesEnabled: undefined })

  let iconColor = 'var(--primary-color)'

  if (props.rolesEnabled !== undefined) {
    const acl = useAcl()
    // set icon color to gray-300 when disabled
    iconColor = acl.can.any(props.rolesEnabled) ? 'var(--primary-color)' : '#D1D5DB'
  }

  const emit = defineEmits(['click'])
</script>

<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <n-button v-role.disable="props.rolesEnabled" :size="props.size" aria-label="btn_{{ props.label }}" @click="emit('click')" v-bind="attrs">
        <template #icon>
          <n-icon size="22" :color="iconColor">
            <component :is="props.icon" />
          </n-icon>
        </template>
        <span text-3>{{ props.label }}</span>
      </n-button>
    </template>
    <span>{{ props.tip }}</span>
  </n-tooltip>
</template>
