<template>
  <div class="form-input">
    <input
      :type="inputType"
      @input="(e) => $emit('update:modelValue', e.target.value)"
      :id="id"
      :placeholder="placeholder"
    />
    <label :for="id">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    inputType: { type: String, default: "text" },
    placeholder: { type: String, default: "Placeholder Here" },
    id: {type: String}
  },
};
</script>

<style scoped>
.form-input {
  position: relative;
  margin-bottom: 1rem;
}

input {
  top: 0;
  width: 100%;
  color: #373a36;
  font-size: 1rem;
  position: relative;
  border: none;
  background: none;
  z-index: 100;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #5c656c;
  border-radius: 4px;
  box-sizing: border-box;
}

input ~ label {
  display: block;
  position: absolute;
  z-index: 200;
  top: 1rem;
  left: 1rem;
  transition: all 0.2s;
  opacity: 0;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  font-size: 10px;
  top: 5px;
  color: #00aeef;
  opacity: 1;
}
</style>
