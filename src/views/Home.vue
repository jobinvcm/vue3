<template>
  <div>
    <new-component @on-click="onClick"></new-component>
  </div>
</template>

<script>
import NewComponent from '../components/NewComponent';
  export default {
    name: 'Home',
    components: {
      NewComponent
    },
    methods: {
      onClick: function() {

        console.log('clicked')
      }
    }
  }
</script>