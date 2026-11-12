<script setup lang="ts">
import { SERVICE_GROUPS } from '~/data/status'

const { t, locale } = useI18n()

useHead({
  htmlAttrs: { lang: () => locale.value },
})

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogType: 'website',
  twitterCard: 'summary',
})
</script>

<template>
  <div class="home">
    <StatusHero />
    <MetricGrid />

    <section class="section services">
      <header class="section-head">
        <div>
          <p class="eyebrow">{{ t('services.eyebrow') }}</p>
          <h2>{{ t('services.title') }}</h2>
          <p class="section-sub">{{ t('services.subtitle') }}</p>
        </div>
        <p class="uptime-window mono">{{ t('services.window', { days: 90 }) }}</p>
      </header>

      <ServiceGroup
        v-for="group in SERVICE_GROUPS"
        :key="group.id"
        :group-id="group.id"
        :services="group.services"
      />
    </section>

    <ModelGrid />
    <IncidentList />
  </div>
</template>

<style scoped>
.uptime-window {
  font-size: 11px;
  color: var(--ink-faint);
  white-space: nowrap;
  padding-bottom: 4px;
}

.services :deep(.service-group + .service-group) {
  margin-top: 14px;
}

@media (max-width: 640px) {
  .uptime-window {
    padding-bottom: 0;
  }
}
</style>
