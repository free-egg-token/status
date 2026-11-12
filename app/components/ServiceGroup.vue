<script setup lang="ts">
import type { Service, ServiceGroupId } from '~/data/status'

defineProps<{
  groupId: ServiceGroupId
  services: Service[]
}>()

const { t } = useI18n()
</script>

<template>
  <section class="service-group">
    <header class="service-group-head">
      <h3>{{ t(`services.groups.${groupId}`) }}</h3>
      <span class="group-count mono">{{ services.length }}</span>
    </header>
    <ServiceRow v-for="service in services" :key="service.id" :service="service" />
  </section>
</template>

<style scoped>
.service-group {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 253, 248, 0.82);
  overflow: hidden;
}

.service-group-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: 1px solid var(--line);
  background: rgba(246, 241, 230, 0.6);
}

.service-group-head h3 {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.group-count {
  font-size: 11px;
  color: var(--ink-faint);
}

.service-group :deep(.service-row + .service-row) {
  border-top: 1px solid var(--line);
}

@media (max-width: 560px) {
  .service-group-head {
    padding: 10px 16px;
  }
}
</style>
