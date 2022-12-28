<template>
  <ul class="notifications">
    <li
      v-for="notify in notifyArray"
      :key="notify"
      :ref="setItemRef"
      :id="notificationData.success.id"
      :class="notificationData.success.class"
      class="notification"
    >
      <div class="notification__column">
        <img
          src="/img/check-circle-solid-24.png"
          alt="icon"
          class="notification__icon"
        />
        <span class="notification__info">Success</span>
      </div>

      <img
        src="/img/x-regular-24.png"
        alt="icon-close"
        class="notification__close"
      />
    </li>

    <button @click="setItemRef">Click me</button>
  </ul>
</template>

<script setup>
  import { ref, onBeforeUpdate, onUpdated } from 'vue';

  const notificationData = {
    success: {
      id: 'success',
      class: 'success',
      text: 'Success registration',
      icon: '',
    },
    error: {
      id: 'error',
      class: 'error',
      text: 'Error registration',
      icon: '',
    },
    timer: 1000,
  };

  const notify = ref('');
  let notifyArray = [];

  const setItemRef = (el) => {
    if (el) {
      notifyArray.push(el);
    }
    console.log(notifyArray);
  };
  onBeforeUpdate(() => {
    notifyArray = [];
  });
  onUpdated(() => {
    console.log(notifyArray);
  });

  const addNotify = (el) => {
    notifyArray.push(el);
    console.log(notifyArray);
  };

  function removeNotify(notify) {}

  const createNotify = (id) => {
    // const { icon, text } = notificationData[id];

    setTimeout(() => removeNotify(notify), notificationData.timer);
  };
</script>

<style lang="scss">
  .notifications {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    bottom: 30px;
    right: 20px;
  }
  .notification {
    display: flex;
    position: relative;
    width: 400px;
    border-radius: 4px;
    padding: 16px;
    background-color: beige;
    justify-content: space-between;
    box-shadow: 0px 20px 55px -16px rgba(0, 0, 0, 0.79);
    overflow: hidden;
    animation: show_notify 0.3s forwards;

    &::before {
      position: absolute;
      content: '';
      height: 3px;
      width: 100%;
      bottom: 0;
      left: 0;
      background: rgb(2, 202, 2);
      animation: progress_notify 5s linear forwards;
    }

    &,
    &__column {
      display: flex;
      align-items: center;
    }

    &__column {
      gap: 10px;
    }

    &__icon {
    }

    &__info {
      font-weight: 500;
    }

    &__close {
      cursor: pointer;
    }
  }

  .success {
    background: rgb(237, 255, 209);
  }

  @keyframes show_notify {
    0% {
      transform: translateX(100%);
    }
    40% {
      transform: translateX(-5%);
    }
    80% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-10px);
    }
  }

  @keyframes progress_notify {
    100% {
      width: 0%;
    }
  }
</style>
