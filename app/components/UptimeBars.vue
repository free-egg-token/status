<script setup lang="ts">
import type { UptimeDay } from '~/data/status'

const props = defineProps<{
  days: UptimeDay[]
  serviceName: string
}>()

const { t, locale } = useI18n()

const dateFormatter = computed(
  () =>
    new Intl.DateTimeFormat(locale.value, {
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    }),
)

const formatDate = (iso: string) => dateFormatter.value.format(new Date(`${iso}T00:00:00Z`))

const tooltip = (day: UptimeDay) =>
  t('uptime.tooltip', {
    date: formatDate(day.date),
    value: day.uptime.toFixed(1),
  })
</script>

<template>
  <div class="uptime-bars" role="img" :aria-label="t('uptime.aria', { service: props.serviceName })">
    <span
      v-for="(day, index) in props.days"
      :key="day.date"
      class="uptime-bar"
      :class="{ 'is-dip': day.uptime < 100 }"
      :style="{ '--index': index }"
      :title="tooltip(day)"
      aria-hidden="true"
    ></span>
  </div>
</template>

<style scoped>
.uptime-bars {
  display: flex;
  align-items: stretch;
  gap: 2px;
  height: 26px;
}

.uptime-bar {
  flex: 1 1 0;
  min-width: 0;
  border-radius: 2px;
  background: var(--ok);
  opacity: 0.82;
  transform-origin: bottom;
  animation: bar-in 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) backwards;
  animation-delay: calc(var(--index) * 6ms);
  transition: opacity 0.12s ease;
}

.uptime-bar:hover {
  opacity: 1;
}

.uptime-bar.is-dip {
  background: var(--yolk-deep);
  opacity: 0.9;
}

@media (max-width: 640px) {
  .uptime-bars {
    gap: 1px;
    height: 22px;
  }
}
</style>
