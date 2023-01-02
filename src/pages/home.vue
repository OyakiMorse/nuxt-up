<template>
  <div class="welcome">
    <Header :isAuth="isAuth" />
    <div class="welcome__block">
      <h1 class="welcome__header">
        Welcome to NuxtUP: <span class="username"> {{ dataUser.name }} </span>
      </h1>

      <div class="welcome__links">
        <h2>Check my mini projects</h2>
      </div>
    </div>

    <section class="welcome__projects">
      <div class="project">
        <div class="project__desc">
          Landing page about solar-system with GSAP
        </div>
        <NuxtLink class="project__link" to="/solar-system">
          solar-system
        </NuxtLink>
      </div>

      <div class="project">
        <div class="project__desc">Voice speech</div>
        <NuxtLink class="project__link" to="/voice-speech">
          voice-speech
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
  const user = window.localStorage.getItem('credentials');
  const dataUser = JSON.parse(user);

  const isAuth = true;

  // definePageMeta({
  //   layout: 'starter',
  // });
</script>
