<script setup lang="ts">
const { t } = useI18n()

const disclaimer =
  'All systems are operational. None of them exist. Status page is a parody. Uptime figures are hardcoded. No SLAs, express or implied, are offered or honored.'
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <svg class="footer-mark" viewBox="0 0 48 48" aria-hidden="true">
            <path
              d="M24 4c8 0 14.5 11.8 14.5 21.2S32 44 24 44 9.5 34.7 9.5 25.2 16 4 24 4Z"
              fill="var(--bg-elevated)"
              stroke="var(--ink)"
              stroke-width="2.6"
            />
            <circle cx="24" cy="25.5" r="7.2" fill="var(--yolk)" />
          </svg>
          <div>
            <p class="footer-name">{{ t('brand.name') }}</p>
            <p class="footer-tagline">{{ t('footer.tagline') }}</p>
          </div>
        </div>

        <nav class="footer-links" :aria-label="t('footer.linksLabel')">
          <a href="https://github.com/free-egg-token" target="_blank" rel="noopener noreferrer">
            {{ t('footer.organization') }}
          </a>
          <a href="https://github.com/free-egg-token/free-egg" target="_blank" rel="noopener noreferrer">
            {{ t('footer.project') }}
          </a>
          <a href="https://github.com/free-egg-token/status" target="_blank" rel="noopener noreferrer">
            {{ t('footer.thisStatusPage') }}
          </a>
        </nav>
      </div>

      <p class="footer-notice">{{ t('footer.parodyNotice') }}</p>
      <p class="footer-copy">{{ t('footer.copyright') }}</p>
      <p class="footer-disclaimer">{{ disclaimer }}</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  background: var(--bg-sunken);
  padding: 44px 0 48px;
}

.footer-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-mark {
  width: 30px;
  height: 30px;
  flex: none;
}

.footer-name {
  font-size: 14px;
  font-weight: 700;
}

.footer-tagline {
  margin-top: 2px;
  font-size: 12px;
  color: var(--ink-faint);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  font-size: 12.5px;
  font-weight: 500;
}

.footer-links a {
  color: var(--ink-soft);
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--ink);
  text-decoration: underline;
}

.footer-notice {
  margin-top: 28px;
  font-size: 12.5px;
  color: var(--ink-soft);
}

.footer-copy {
  margin-top: 6px;
  font-size: 11.5px;
  color: var(--ink-faint);
}

.footer-disclaimer {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px dashed var(--line-strong);
  max-width: 92ch;
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.7;
  color: var(--ink-faint);
}

@media (max-width: 640px) {
  .site-footer {
    padding: 36px 0 40px;
  }

  .footer-top {
    flex-direction: column;
    gap: 18px;
  }
}
</style>
