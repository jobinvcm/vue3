<template>
  <nav>
    <ul class="footer-links">
      <li><img src="https://icemedia.com.au/App_themes/Icemedia/assets/img/icons/phone.svg" /><a href="tel:+611300400423">1300 400 ICE</a></li>
      <li><img src="https://icemedia.com.au/App_themes/Icemedia/assets/img/icons/location.svg"><span>144 Montague Road, South Brisbane QLD 4101</span></li>
      <li><img src="https://icemedia.com.au/App_themes/Icemedia/assets/img/logos/linkedin.svg" /><a href="https://www.linkedin.com/company/icemedia/">Linkedin</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'FooterContacts'
  }
</script>

<style scoped>
  .footer-links img {
    height: 1rem;
    display: inline-block;
    padding-right: 12px;
    
  }

  .footer-links {
    list-style:none;
    color: #fff;
    text-align: left;
  }

  .footer-links span,
  .footer-links a {
    color: #fff;
    font-size: 16px;
  }
</style>