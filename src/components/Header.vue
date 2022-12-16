<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <NuxtLink to="/" class="header__logo"> NuxtUP </NuxtLink>

        <ul class="header__list">
          <li v-for="item in items" :key="item" class="header__list-item">
            <NuxtLink class="header__list-link" to="#">
              {{ item }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
  const items = ['Home', 'Garden', 'Pool', 'Valley'];
</script>
