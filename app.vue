<script setup>
import './variables.css';
import { Site } from "@/variables"

const year = (new Date()).getFullYear()
</script>


<template>
  <header class="header">
    <a class="header__title" href="/">
      <img src="@/logo.png" alt="Logo" width="150" />
      <span style="color: #fff;
    margin-top: 4px;
    margin-left: 10px;
    position: absolute;" class="no-mobile">Articles</span>
    </a>
    <a href="https://paragon.red/contact" class="ai-search btn">Get started today</a>
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer class="footer">
    <p> © {{ year }} {{ Site.name }}. All Rights Reserved. Various
      trademarks held by their respective owners.
    </p>
  </footer>
</template>

<style>
.ai-search {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 25px;
  margin-right: 20px;
  color: #fff;
  text-decoration: none;
}

.header {
  display: flex;
  padding: 0 var(--space-1);
  border-bottom: 1px solid #ced2d9;
  width: calc(100% - 40px) !important;
  z-index: 10;
  background: var(--white);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  & .header__title {
    font-weight: 800;
    font-size: var(--font-size-3);
    line-height: var(--line-height-1);
    padding-left: var(--space-2);
    margin: var(--space-3) 0;
    text-decoration: none;
    color: var(--black);
  }
}

.footer {
  display: flex;
  color: #fff !important;
  justify-content: flex-end;
  padding: 0 var(--space-3);

  & .footer__text {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
    display: flex;
    align-items: center;
    gap: 2px;
  }
}

@media (min-width: 575px) {
  .container {
    max-width: 900px;
    padding: 0 var(--space-4);
  }

  main {
    margin-top: unset;
  }

  .header {
    position: unset;
    border-bottom: none;
    margin: var(--space-3) 0;
    padding: var(--space-2) 0;
    background: unset;

    & .header__title {
      margin: var(--space-3) 0 var(--space-2);
      font-size: var(--font-size-5);
    }
  }
}
</style>

<style>
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 20px;
  --space-5: 32px;
  --space-6: 52px;
  --space-7: 84px;
  --space-8: 136px;
  --space-9: 220px;

  --font-family-sans: Inter;
  --font-family-serif: PT Serif;
  --font-family-mono: IMB Plex Mono;

  --font-size-0: 12px;
  --font-size-1: 14px;
  --font-size-2: 16px;
  --font-size-3: 18px;
  --font-size-4: 20px;
  --font-size-5: 24px;
  --font-size-6: 30px;
  --font-size-7: 36px;
  --font-size-8: 48px;
  --font-size-9: 60px;
  --font-size-10: 72px;

  --line-height-0: 16px;
  --line-height-1: 20px;
  --line-height-2: 24px;
  --line-height-3: 28px;
  --line-height-4: 28px;
  --line-height-5: 32px;
  --line-height-6: 36px;
  --line-height-7: 40px;
  --line-height-8: 48px;
  --line-height-9: 60px;
  --line-height-10: 72px;
  --line-height-11: 96px;
  --line-height-12: 128px;

  --white: #fff;
  --black: #101112;
  --gray-200: #ced2d9;
  --gray-600: #6e7683;
  --blue-600: #1e61cd;
  --magenta-100: #f9d7eb;

  --max-width-0: 320px;
  --max-width-1: 768px;
}

html {
  background-color: var(--white);
  font-family: var(--font-family-sans), var(--font-family-serif), sans-serif;
  text-size-adjust: 100%;
}

body {
  margin: 0;
}
</style>
