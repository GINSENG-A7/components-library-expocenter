<template>
  <input
    :value="inputValue"
    :placeholder="inputPlaceholder"
    ref="gsInput"
    type="text"
    class="input"
    @input="(v) => insertInputValue(v.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GsInput",
  props: {
    inputValue: String,
    inputPlaceholder: String,
  },
  emits: ["update:inputValue"],
  methods: {
    insertInputValue(newValue: string) {
      this.$emit("update:inputValue", newValue);
    },
  },
});
</script>

<style scoped>
.input {
  margin: 0;
  padding: 1rem 1rem;
  width: 100%;
  height: 20px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #009ee3;
  box-sizing: border-box;
}
.input:focus {
  border: 1px solid #0070d2;
  outline: 1px solid #0070d2;
}
</style>
