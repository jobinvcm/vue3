<template>
  <div class="container">
    <form>
      <form-input id="contactform.name" placeholder="Company Name">
      </form-input>
      <form-input id="contactform.email" type="email" placeholder="Email">
      </form-input>
      <form-input id="contactform.mobile" type="mobile" placeholder="Mobile">
      </form-input>
      <Button type="submit" label="Button"></Button>
    </form>
  </div>
</template>

<script>
import FormInput from "./FormComponents/FormInput.vue";
import Button from "./FormComponents/Button.vue";

export default {
  components: {
    FormInput,
    Button,
  },
};
</script>

<style scoped>
</style>