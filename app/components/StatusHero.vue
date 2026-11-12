<script setup lang="ts">
import { LAST_CHECKED } from '~/data/status'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <p class="eyebrow hero-eyebrow">{{ t('hero.eyebrow') }}</p>
    <h1 class="hero-title">
      <span class="hero-dot" aria-hidden="true"></span>
      <span>{{ t('hero.title') }}</span>
    </h1>
    <p class="hero-sub">{{ t('hero.subtitle') }}</p>
    <p class="hero-meta mono">{{ t('hero.updated', { time: LAST_CHECKED }) }}</p>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 8px;
  animation: rise-in 0.55s ease both;
}

.hero-eyebrow {
  margin-bottom: 18px;
}

.hero-title {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: clamp(2rem, 5vw, 3.4rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.05;
}

.hero-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--ok);
  flex: none;
  animation: pulse-ring 2.6s ease-out infinite;
}

.hero-sub {
  margin-top: 18px;
  max-width: 60ch;
  font-size: 16px;
  color: var(--ink-soft);
}

.hero-meta {
  margin-top: 14px;
  font-size: 12px;
  color: var(--ink-faint);
}

@media (max-width: 560px) {
  .hero-title {
    gap: 12px;
  }

  .hero-dot {
    width: 10px;
    height: 10px;
  }
}
</style>
