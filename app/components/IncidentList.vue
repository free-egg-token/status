<script setup lang="ts">
import { INCIDENTS } from '~/data/status'

const { t, locale } = useI18n()

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`))
</script>

<template>
  <section class="section">
    <header class="section-head">
      <div>
        <p class="eyebrow">{{ t('incidents.eyebrow') }}</p>
        <h2>{{ t('incidents.title') }}</h2>
        <p class="section-sub">{{ t('incidents.subtitle') }}</p>
      </div>
    </header>

    <div class="incident-list">
      <article v-for="incident in INCIDENTS" :key="incident.id" class="incident">
        <div class="incident-head">
          <span class="incident-date mono">{{ formatDate(incident.date) }}</span>
          <span class="pill pill--ok pill--sm">
            <span class="dot" aria-hidden="true"></span>
            {{ t('incidents.resolved') }}
          </span>
        </div>
        <h3 class="incident-title">{{ t(`incidents.items.${incident.id}.title`) }}</h3>
        <p class="incident-summary">{{ t(`incidents.items.${incident.id}.summary`) }}</p>
        <p class="incident-meta mono">
          <span>{{ t('incidents.duration', { minutes: incident.durationMinutes }) }}</span>
          <span aria-hidden="true">·</span>
          <span>{{ t('incidents.affected', { service: t(`services.items.${incident.serviceId}.name`) }) }}</span>
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.incident-list {
  display: grid;
  gap: 12px;
}

.incident {
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-left: 3px solid var(--ok-line);
  border-radius: 14px;
  background: rgba(255, 253, 248, 0.82);
}

.incident-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.incident-date {
  font-size: 11.5px;
  color: var(--ink-faint);
}

.incident-title {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
}

.incident-summary {
  margin-top: 6px;
  max-width: 78ch;
  font-size: 13.5px;
  color: var(--ink-soft);
}

.incident-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  font-size: 11px;
  color: var(--ink-faint);
}

@media (max-width: 560px) {
  .incident {
    padding: 16px;
  }
}
</style>
