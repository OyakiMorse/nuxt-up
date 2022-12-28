<template>
  <div class="inital__form-field">
    <label :for="name" class="inital__form-label">{{ label }}</label>
    <div class="inital__form-box">
      <input
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="inputValue"
        @blur.stop="handleBlur"
        @input.stop="handleChange"
        class="inital__form-input"
      />

      <button
        ref="btn"
        v-if="img"
        class="input__pswd-btn"
        @click="showHiddenPswd(img.src, type)"
      >
        <img :src="img.src" :alt="img.alt" class="icon-eye" />
      </button>
    </div>

    <span v-show="errorMessage" class="inital__form-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
  import { toRef, watch, reactive } from 'vue';
  import { useField } from 'vee-validate';

  const props = defineProps({
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    img: {
      type: Object,
      default: {},

      src: {
        type: String,
        default: '',
      },
      alt: {
        type: String,
        default: '',
      },
      action: {
        type: Function,
      },
    },
  });

  const inputData = reactive(props.img);
  const name = toRef(props, 'name');
  const typeInp = toRef(props, 'type');

  let {
    value: inputValue,
    type,
    errorMessage,
    handleBlur,
    handleChange,
  } = useField(name, undefined, {
    initialValue: props.value,
    type: typeInp,
  });

  function showHiddenPswd(inputIcon, currentType) {
    if (inputIcon === '/img/eye.svg') {
      inputData.src = inputIcon = '/img/eye-fill.svg';
    } else {
      inputData.src = inputIcon = '/img/eye.svg';
    }

    if (currentType == 'password') {
      type = currentType = 'text';
    } else {
      type = currentType = 'password';
    }
  }

  watch(
    () => props.type,
    (type) => {
      type = props.type;
    }
  );

  // function autoHidePswd(inputType, inputName) {
  // @focusout="autoHidePswd(type, name)"

  //   if (inputType === 'text' && inputName === 'password') {
  //     type = inputType = 'password';
  //     console.log(inputType);
  //   }
  // }
</script>
