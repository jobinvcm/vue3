<template>
  <button :type="type">{{label}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      default: 'submit',
      type: String
    },
    label: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style scoped>
button {
  display: block;
  padding: 0.75rem 0.5rem;
  background-color: #373a36;
  background-image: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  height: 3rem;
  width: 100%;
  margin: 0 auto;
  border: 0;
  outline: 0;
  border-radius: 4px;
  cursor: pointer;
}
</style>