<template>
  <div ref="main" class="inital">
    <div class="inital__bg">
      <img src="/img/bg3.png" alt="bg" class="inital__bg-img" />
    </div>

    <Header />

    <div class="container">
      <main class="inital__content">
        <div class="inital__card">
          <!-- <div class="tooltiptext">Data saved in localStorage</div> -->

          <h1 class="inital__card-title">Welcome to <span>NuxtUP</span></h1>
          <p class="inital__card-subtitle">Register for try my code</p>
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            v-slot="{ errors }"
            class="inital__form"
          >
            <div class="inital__form-inputs">
              <TextField
                name="name"
                type="text"
                label="Username"
                placeholder="Enter your name"
                :value="form.name"
                v-model="form.name"
                :errorClass="{ 'is-invalid': errors.name }"
              >
              </TextField>

              <TextField
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                :value="form.email"
                v-model="form.email"
                :errorClass="{ 'is-invalid': errors.email }"
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
                :errorClass="{ 'is-invalid': errors.password }"
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
                :errorClass="{ 'is-invalid': errors.password }"
              >
              </TextField>
            </div>

            <div class="inital__form-buttons">
              <button type="submit" class="inital__form-btn">Register</button>
            </div>
          </Form>
        </div>
      </main>

      <Notification />
    </div>
  </div>
</template>

<script setup>
  import { onMounted, computed, ref } from 'vue';
  import { Form, useForm, useIsFormValid } from 'vee-validate';
  import * as Yup from 'yup';
  import { useRouter, useRoute } from 'vue-router';
  import gsap from 'gsap';

  const { handleSubmit, isSubmitting } = useForm();

  const isValid = useIsFormValid();

  const isDisabled = computed(() => {
    console.log(!isValid.value);

    return !isValid.value;
  });

  onMounted(() => {
    gsap.to('span', {
      duration: 1,
      opacity: 0.25,
      repeat: 3,
      yoyo: true,
      ease: 'power1.inOut',
    });
  });

  const router = useRouter();

  function pushMe() {
    router.push('/home');
  }

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
  });

  const form = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  let isAuth = false;

  function onSubmit(values) {
    console.log('clicked', isValid.value);

    isAuth = true;
    const credentials = JSON.stringify(values);
    window.localStorage.setItem('credentials', credentials);
    pushMe();
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
