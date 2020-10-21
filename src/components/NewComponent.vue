<template>
  <div>
    <input v-model="name" />
    <button @click="increment">Click count {{ count }}</button>
    <div>Name: {{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
    },
  },
  data: function() {
    return {
      count: 0,
      name: "",
    };
  },
  methods: {
    increment: function() {
      this.$emit("on-click", this.count);
      this.count++;
    },
  },
};
</script>
