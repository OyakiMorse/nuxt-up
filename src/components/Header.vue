<template>
  <header class="header" :class="{ 'header--logged': isAuth }">
    <div class="container">
      <div class="header__content">
        <NuxtLink to="/" class="header__logo"> NuxtUP </NuxtLink>

        <ul
          v-if="isAuth"
          class="header__list"
          :class="{
            'header__list--hide': !isAuth,
          }"
        >
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
  const props = defineProps({
    isAuth: {
      type: Boolean,
      default: false,
    },
  });
  const items = ['Home', 'Garden', 'Pool', 'Valley'];
</script>
