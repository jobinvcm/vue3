<template>
  <footer>
    <div class="container">
      <div class="footer-left">
        <Providers />
      </div>

      <div class="footer-right">
        <FooterContacts />
      </div>


      <div class="divider"></div>

      <div class="copyrights">
        © 2020 ICEMEDIA. All rights reserved.
      </div>
      
    </div>

  </footer>
</template>

<script>
import FooterContacts from './FooterComponents/ContactUs';
import Providers from './FooterComponents/Providers';

  export default {
    name: 'footer',
    components: {
      FooterContacts,
      Providers
    }
  }
</script>

<style>
  footer {
    background: #373a36;
    padding-top: 48px;
    color: #fff;
    padding-bottom: 48px;
  }

  footer .footer-left,
  footer .footer-right {
    display: inline-block;
    text-align: left;
    width: 50%;
  }

  
</style>