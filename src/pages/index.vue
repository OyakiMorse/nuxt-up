<template>
  <div class="inital">
    <div class="inital__bg">
      <img src="/img/bg3.png" alt="bg" class="inital__bg-img" />
    </div>

    <Header />

    <div class="container">
      <main class="inital__content">
        <div class="inital__card">
          <h1 class="inital__card-title">Welcome to <span>NuxtUP</span></h1>
          <p class="inital__card-subtitle">Register for try my code</p>
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            class="inital__form"
          >
            <div class="inital__form-inputs">
              <TextField
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                :value="form.email"
                v-model="form.email"
              >
              </TextField>

              <TextField
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                v-model.trim="form.password"
                :value="form.password"
                :img="iconPswd"
              >
              </TextField>

              <TextField
                name="confirm_password"
                type="password"
                label="Confirm password"
                placeholder="Enter your password again"
                v-model.trim="form.confirmPassword"
                :value="form.confirmPassword"
                :img="iconPswdConfirm"
              >
              </TextField>

              <div class="inital__form-buttons">
                <button
                  type="submit"
                  @click.prevent="onSubmit(form)"
                  class="inital__form-btn"
                >
                  Register
                </button>
              </div>
            </div>
          </Form>
        </div>
      </main>

      <Notification />
    </div>
  </div>
</template>

<script setup>
  import { Form } from 'vee-validate';
  import * as Yup from 'yup';

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
  });

  const form = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  function onSubmit(values) {
    console.log(JSON.stringify(values));
  }

  const iconPswd = {
    src: '/img/eye.svg',
    alt: 'eye',
  };

  const iconPswdConfirm = {
    src: '/img/eye.svg',
    alt: 'eye',
  };
</script>
