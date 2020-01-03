<template>
  <div class="switch-container">
    <label class="switch">
      <span v-if="label" class="switch_label">{{ label }}</span>
      <input
        type="checkbox"
        :checked="isChecked"
        @change="onChange($event.target.checked)"
      />
      <div class="switch_control"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: "Switcher",
  props: ["isChecked", "label"],
  methods: {
    onChange(checked) {
      this.$emit("onChange", checked);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/shared/sass/_variables";

.switch {
  position: relative;
  cursor: pointer;
  width: 48px;
  height: 24px;
  display: flex;
  & .switch_label {
    margin-right: 16px;
  }
  & > input {
    display: none;
  }
  & > .switch_control {
    position: relative;
    height: inherit;
  }
  & > .switch_control:before {
    content: "";
    display: block;
    position: absolute;
    left: 6px;
    top: 4px;
    width: 36px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    transition: all 0.2s ease-out;
  }
  & > .switch_control:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 50px;
    transition: all 0.2s ease-out;
  }
  & > input:checked ~ .switch_control:before {
    background-color: rgba($primary, 0.5);
  }
  & > input:checked ~ .switch_control:after {
    background-color: $primary;
    transform: translateX(24px);
  }
}
</style>
