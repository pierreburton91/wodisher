<template>
  <div
    class="options"
    :class="{ 'options--hidden': closing }"
    @click.self="close()"
  >
    <div
      class="options_container"
      :class="{ 'options_container--hidden': closing }"
    >
      <div class="container_header">
        <h2 class="container_title">Options</h2>
        <button class="button button--text" @click.self="close()">Close</button>
      </div>
      <div class="option">
        <div class="option_label">Challenger</div>
        <div class="option_control">
          <Switcher />
        </div>
      </div>
      <div class="option">
        <div class="option_label">Challenger</div>
        <div class="option_control">
          <Switcher />
        </div>
      </div>
      <div class="option">
        <div class="option_label">Challenger</div>
        <div class="option_control">
          <Switcher />
        </div>
      </div>
      <div class="option">
        <div class="option_label">Challenger</div>
        <div class="option_control">
          <Switcher />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switcher from "@/components/Switcher.vue";

export default {
  name: "Options",
  components: {
    Switcher
  },
  data() {
    return {
      closing: false
    };
  },
  methods: {
    close() {
      this.closing = true;
      setTimeout(() => this.$emit("onClose"), 500);
    }
  },
  computed: {},
  created() {}
};
</script>

<style lang="scss" scoped>
@import "@/shared/sass/_variables";

.options {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.5s ease forwards;
}
.options--hidden {
  animation: fadeOut 0.5s ease forwards;
}
.options_container {
  background-color: $dark;
  width: 100%;
  max-width: 480px;
  padding: 24px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  max-height: 100%;
  overflow-y: auto;
  animation: swipeUp 0.5s ease forwards;
}
.options_container--hidden {
  animation: swipeDown 0.5s ease forwards;
}
.container_header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.container_title {
  font-size: 24px;
  margin-bottom: 16px;
}
.option {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}
</style>
