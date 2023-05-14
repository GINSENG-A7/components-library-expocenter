<template>
  <button class="button">{{ buttonText }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GsButton",
  props: {
    buttonText: String,
  },
});
</script>

<style scoped>
.button {
  margin: 0;
  width: 100%;
  height: 34px;
  border: none;
  padding: 0;
  background-color: #009ee3;
  color: #fff;
}
.button:hover {
  background-color: #0070d2;
}
.button:active {
  background-color: #0050d2;
}
</style>
