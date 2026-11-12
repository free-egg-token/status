<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const labels: Record<string, string> = {
  en: 'EN',
  'zh-CN': '简',
  'zh-TW': '繁',
}

const options = computed(() =>
  locales.value.map((item) => {
    const code = typeof item === 'string' ? item : item.code
    return { code, label: labels[code] ?? code }
  }),
)
</script>

<template>
  <nav class="locale-switcher" :aria-label="t('localeSwitcher.label')">
    <NuxtLink
      v-for="option in options"
      :key="option.code"
      :to="switchLocalePath(option.code)"
      class="locale-option"
      :class="{ 'is-active': option.code === locale }"
      :aria-current="option.code === locale ? 'true' : undefined"
    >
      {{ option.label }}
    </NuxtLink>
  </nav>
</template>

<style scoped>
.locale-switcher {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--bg-elevated);
}

.locale-option {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 24px;
  padding: 0 6px;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  color: var(--ink-faint);
  text-decoration: none;
  transition: color 0.15s ease, background 0.15s ease;
}

.locale-option:hover {
  color: var(--ink);
}

.locale-option.is-active {
  background: var(--ink);
  color: var(--bg);
}
</style>
