<template>
  <div class="container">
    <form>
      <form-input
        id="contactform.name"
        @on-change="updateValue"
        name="name"
        placeholder="Company Name"
      >
      </form-input>
      <form-input
        id="contactform.email"
        @on-change="updateValue"
        name="email"
        type="email"
        placeholder="Email"
      >
      </form-input>
      <form-input
        id="contactform.mobile"
        @on-change="updateValue"
        name="mobile"
        type="mobile"
        placeholder="Mobile"
      >
      </form-input>
      <Button type="submit" @on-click="onSubmit" label="Button"></Button>
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
  data: function() {
    return {
      name: "",
      email: "",
      mobile: "",
    };
  },
  methods: {
    updateValue: function(value, name) {
      this[name] = value;
    },
    onSubmit: function(e) {
      e.preventDefault();

      e.stopPropagation();
      console.log(this.name + this.email + this.mobile);
    },
  },
};
</script>

<style scoped></style>
