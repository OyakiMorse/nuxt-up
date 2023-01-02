<template>
  <div class="home">
    <div class="home__bg">
      <!-- <img :src="mainSrc" alt="img.alt" /> -->
    </div>

    <div class="home__drk"></div>
  </div>
</template>

<script setup>
  // const images = [
  //   {
  //     src: '/img/p00.png',
  //     alt: 'cosmo',
  //   },
  //   {
  //     src: '/img/p0.jpg',
  //     alt: 'cos',
  //   },
  // ];

  const images = ['/img/p00.png', '/img/p0.jpg'];
</script>

<style>
  .home {
    position: relative;
  }
  .home__drk {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 360px;
    background: linear-gradient(
      180deg,
      rgba(21, 22, 21, 0) 0%,
      rgba(21, 22, 21, 0.8) 67.19%
    );
  }
</style>
