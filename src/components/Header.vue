<template>
  <header>
    <div class="branding">
      <router-link to="/"
        ><img
          src="https://icemedia.com.au/App_themes/Icemedia/assets/img/logos/icemedia-logo-typeface.svg"
      /></router-link>
    </div>
    <div class="main-menu">
      <nav class="main-menu--container" role="navigation" aria-label="Main">
        <ul class="main-menu--list">
          <li><router-link active-class="is-active"  to="/about">About</router-link></li>
          <li><router-link active-class="is-active"  to="/about">Services</router-link></li>
          <li><router-link active-class="is-active"  to="/about">Technology</router-link></li>
          <li><router-link active-class="is-active"  to="/about">Our Work</router-link></li>
          <li><router-link active-class="is-active"  to="/about">Careers</router-link></li>
          <li><router-link active-class="is-active" to="/contact">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background: darkgray;
}

.branding {
  display: inline-block;
  width: 20%;
}

.main-menu {
  display: inline-block;
  width: 80%;
}

.main-menu--list {
  list-style: none;
}

.main-menu--list li {
  display: inline-block;
}

.main-menu--list a {
  padding: 8px 16px;
  text-decoration: none;
}

.main-menu--list a:hover {
  background: lightblue;
  text-decoration: underline;
}

.main-menu--list a.is-active {
  color: black;
  border-bottom: 2px solid #fff;
}

</style>