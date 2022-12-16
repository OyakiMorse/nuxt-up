<template>
  <div class="inital">
    <div class="inital__bg">
      <img src="../public/img/bg3.png" alt="bg" class="inital__bg-img" />
    </div>

    <Header />

    <div class="container">
      <main class="inital__content">
        <div class="inital__card">
          <h1 class="inital__card-title">Welcome to <span>NuxtUP</span></h1>
          <p class="inital__card-subtitle">Register for try my code</p>

          <form action="" class="inital__form">
            <div class="inital__form-inputs">
              <div class="inital__form-field">
                <label for="email" class="inital__form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  class="inital__form-input"
                  placeholder="Enter your email"
                  required
                  id="userEmail"
                />
                <span class="inital__form-error">Error</span>
              </div>

              <div class="inital__form-field">
                <label for="password" class="inital__form-label">
                  Password
                </label>

                <div class="inital__form-box">
                  <input
                    type="password"
                    name="password"
                    class="inital__form-input"
                    placeholder="Enter your password"
                    required
                    id="userPswd"
                    ref="inputPswd"
                  />
                  <img
                    @click="showHiddenPswd(inputPswd, inputIconEye)"
                    src="../public/img/eye.svg"
                    alt="eye"
                    class="icon-eye"
                    id="input-icon"
                    ref="inputIconEye"
                  />
                </div>

                <span class="inital__form-error">Error</span>
              </div>

              <div class="inital__form-buttons">
                <button @submit.prevent="submitForm" class="inital__form-btn">
                  Register
                </button>
                <button
                  @click="notSupportMsg"
                  class="inital__form-btn inital__form-btn--light"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const inputIconEye = ref(null);
  const inputPswd = ref(null);

  const form = {
    email: '',
    password: '',
    agreeConfirm: [],
  };

  const showHiddenPswd = (inputPswd, inputIcon) => {
    if (inputPswd.type === 'password') {
      if (inputPswd.value !== '') {
        inputPswd.type = 'text';
        inputIcon.src = '_nuxt/public/img/eye-fill.svg';
      }
    } else {
      inputPswd.type = 'password';
      inputIcon.src = '_nuxt/public/img/eye.svg';
    }
  };

  function notSupportMsg() {
    alert('This feature unavailable now');
  }
</script>
