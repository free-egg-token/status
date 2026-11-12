<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink :to="localePath('/')" class="brand" :aria-label="t('brand.homeLabel')">
        <svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
          <path
            d="M24 4c8 0 14.5 11.8 14.5 21.2S32 44 24 44 9.5 34.7 9.5 25.2 16 4 24 4Z"
            fill="var(--bg-elevated)"
            stroke="var(--ink)"
            stroke-width="2.6"
          />
          <circle cx="24" cy="25.5" r="7.2" fill="var(--yolk)" />
        </svg>
        <span class="brand-text">
          <span class="brand-name">{{ t('brand.name') }}</span>
          <span class="brand-status">{{ t('brand.status') }}</span>
        </span>
      </NuxtLink>

      <div class="header-actions">
        <LocaleSwitcher />
        <a
          class="github-link"
          href="https://github.com/free-egg-token"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="t('nav.githubLabel')"
        >
          <svg class="github-mark" viewBox="0 0 16 16" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
            />
          </svg>
          <span class="github-label">{{ t('nav.github') }}</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid var(--line);
  background: rgba(251, 248, 241, 0.86);
  backdrop-filter: blur(12px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 68px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand-mark {
  width: 34px;
  height: 34px;
  flex: none;
}

.brand-text {
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand-name {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.brand-status {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  padding: 2px 6px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 8px;
  transition: color 0.15s ease, background 0.15s ease;
}

.github-link:hover {
  color: var(--ink);
  background: rgba(231, 224, 210, 0.6);
}

.github-mark {
  width: 15px;
  height: 15px;
}

@media (max-width: 560px) {
  .brand-status,
  .github-label {
    display: none;
  }

  .header-inner {
    height: 60px;
  }
}
</style>
