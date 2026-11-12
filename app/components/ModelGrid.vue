<script setup lang="ts">
import { MODELS } from '~/data/status'

const { t } = useI18n()
</script>

<template>
  <section class="section">
    <header class="section-head">
      <div>
        <p class="eyebrow">{{ t('models.eyebrow') }}</p>
        <h2>{{ t('models.title') }}</h2>
        <p class="section-sub">{{ t('models.subtitle') }}</p>
      </div>
    </header>

    <div class="model-grid">
      <article v-for="model in MODELS" :key="model.id" class="model-card">
        <div class="model-head">
          <code class="model-id">{{ model.id }}</code>
          <span class="pill pill--ok pill--sm">
            <span class="dot" aria-hidden="true"></span>
            {{ t('models.operational') }}
          </span>
        </div>
        <div class="model-meta">
          <span class="model-note">{{ t(`models.notes.${model.noteKey}`) }}</span>
          <span class="model-context mono">{{ t('models.context') }} {{ model.context }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(238px, 1fr));
  gap: 12px;
}

.model-card {
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 253, 248, 0.82);
  transition: border-color 0.15s ease;
}

.model-card:hover {
  border-color: var(--line-strong);
}

.model-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.model-id {
  font-size: 12.5px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.model-meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-top: 10px;
  font-size: 11.5px;
  color: var(--ink-faint);
}

.model-note {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.model-context {
  flex: none;
  font-size: 11px;
}
</style>
