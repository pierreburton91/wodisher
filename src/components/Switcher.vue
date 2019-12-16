<template>
  <div class="switch-container">
    <label class="switch">
      Bad gambler
      <input
        type="checkbox"
        :checked="value"
        @change="onChange($event.target.checked)"
      />
      <div class="switch-control"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: "Switcher",
  props: ["value"],
  methods: {
    onChange(checked) {
      this.$emit("input", checked);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/shared/sass/_variables";

.switch {
  position: relative;
  cursor: pointer;
  & > input {
    display: none;
  }
  & > .switch-control:before {
    content: "";
    display: block;
    position: absolute;
    right: -56px;
    top: 4px;
    width: 36px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    transition: all 0.2s ease-out;
  }
  & > .switch-control:after {
    content: "";
    display: block;
    position: absolute;
    right: -40px;
    top: 0;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 50px;
    transition: all 0.2s ease-out;
  }
  & > input:checked ~ .switch-control:before {
    background-color: rgba($primary, 0.5);
  }
  & > input:checked ~ .switch-control:after {
    background-color: $primary;
    transform: translateX(24px);
  }
}
</style>
