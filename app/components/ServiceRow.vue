<script setup lang="ts">
import type { Service } from '~/data/status'

const props = defineProps<{
  service: Service
}>()

const { t } = useI18n()

const name = computed(() => t(`services.items.${props.service.id}.name`))
</script>

<template>
  <article class="service-row">
    <div class="service-main">
      <div class="service-identity">
        <h4 class="service-name">{{ name }}</h4>
        <p class="service-endpoint mono">{{ props.service.endpoint }}</p>
      </div>
      <div class="service-state">
        <span class="pill pill--ok">
          <span class="dot" aria-hidden="true"></span>
          {{ t('uptime.operational') }}
        </span>
        <span class="service-uptime mono">{{ props.service.uptime.toFixed(2) }}%</span>
      </div>
    </div>
    <UptimeBars :days="props.service.days" :service-name="name" />
  </article>
</template>

<style scoped>
.service-row {
  padding: 18px 20px;
}

.service-main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 14px;
}

.service-name {
  font-size: 15px;
  font-weight: 600;
}

.service-endpoint {
  margin-top: 3px;
  font-size: 11.5px;
  color: var(--ink-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 52ch;
}

.service-state {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: none;
}

.service-uptime {
  font-size: 12px;
  color: var(--ink-soft);
}

@media (max-width: 560px) {
  .service-row {
    padding: 16px;
  }

  .service-main {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 12px;
  }

  .service-state {
    gap: 10px;
  }
}
</style>
