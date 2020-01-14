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
      <label class="label">General</label>
      <div v-for="item of general" :key="item.label" class="option">
        <div class="option_label">
          {{ item.label }}
        </div>
        <div class="option_control">
          <Switcher
            :isChecked="item.value"
            @onChange="handleConfigUpdate('general', item.label, $event)"
          />
        </div>
      </div>
      <label class="label">Equipments</label>
      <div
        v-for="equipment of equipments"
        :key="equipment.label"
        class="option"
      >
        <div class="option_label">
          {{
            equipment.label.slice(0, 1).toUpperCase() + equipment.label.slice(1)
          }}
        </div>
        <div class="option_control">
          <Switcher
            :isChecked="equipment.value"
            @onChange="
              handleConfigUpdate('equipments', equipment.label, $event)
            "
          />
        </div>
      </div>
      <label class="label">Target muscles groups</label>
      <div
        v-for="muscleGroup of muscleGroups"
        :key="muscleGroup.label"
        class="option"
      >
        <div class="option_label">
          {{
            muscleGroup.label.slice(0, 1).toUpperCase() +
              muscleGroup.label.slice(1)
          }}
        </div>
        <div class="option_control">
          <Switcher
            :isChecked="muscleGroup.value"
            @onChange="
              handleConfigUpdate('muscleGroups', muscleGroup.label, $event)
            "
          />
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
  props: ["isChallengerMode", "general", "equipments", "muscleGroups"],
  data() {
    return {
      closing: false
    };
  },
  methods: {
    close() {
      this.closing = true;
      setTimeout(() => this.$emit("onClose"), 500);
    },
    handleConfigUpdate(section, label, checked) {
      this.$emit("onConfigUpdate", {
        section: section,
        label: label,
        checked: checked
      });
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
.option_label--disabled {
  opacity: 0.5;
}
.label {
  margin-bottom: 0;
  margin-top: 32px;
  &:first-of-type {
    margin-top: 16px;
  }
}
</style>
