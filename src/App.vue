<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <GsInput
      v-model:inputValue="inputValue"
      :input-placeholder="'Type some text here'"
    />
    <GsButton :button-text="'Click me!'" @gs-button-click="insertInputValue" />
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import GsInput from "@/components/GsInput.vue";
import GsButton from "@/components/GsButton.vue";

export default defineComponent({
  name: "App",
  components: {
    GsInput,
    GsButton,
  },
  setup() {
    const inputValue: Ref<string> = ref("Aloha!");
    return { inputValue };
  },
  methods: {
    insertInputValue() {
      this.inputValue = "Button is clicked";
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
</style>
