<script setup lang="ts">
import { METRIC_IDS } from '~/data/status'

const { t } = useI18n()
</script>

<template>
  <section class="metric-grid" :aria-label="t('metrics.label')">
    <article
      v-for="(id, index) in METRIC_IDS"
      :key="id"
      class="metric-card"
      :style="{ '--delay': `${120 + index * 60}ms` }"
    >
      <p class="metric-label">{{ t(`metrics.${id}.label`) }}</p>
      <p class="metric-value mono">{{ t(`metrics.${id}.value`) }}</p>
      <p class="metric-note">{{ t(`metrics.${id}.note`) }}</p>
    </article>
  </section>
</template>

<style scoped>
.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 42px;
}

.metric-card {
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 253, 248, 0.82);
  animation: rise-in 0.55s ease both;
  animation-delay: var(--delay);
}

.metric-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ink-soft);
}

.metric-value {
  margin-top: 8px;
  font-size: 29px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.metric-note {
  margin-top: 6px;
  font-size: 11.5px;
  color: var(--ink-faint);
}

@media (max-width: 880px) {
  .metric-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .metric-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
