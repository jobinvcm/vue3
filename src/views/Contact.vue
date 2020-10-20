<template>
  <div>
    <div class="banner">
      <img
        src="https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
      <h2>SEND US A MESSAGE AND WE'LL GET IN TOUCH WITH YOU SHORTLY.</h2>
    </div>
    <div class="content">
      <h1>Contact Us</h1>
      <contact-form></contact-form>
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
h2 {
  color: #fff;
}
</style>