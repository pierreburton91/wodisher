<template>
  <div class="section">
    <div>
      <button
        type="button"
        class="button is-primary is-large rollButton"
        @click="roll()"
      >
        {{ playingLabel }}
      </button>
      <button
        type="button"
        class="button is-primary is-large is-outlined has-text-white optionsButton"
        @click="showOptions()"
      >
        Options
      </button>
    </div>
    <Switcher
      class="challenger-mode-container"
      :isChecked="challengerMode.value"
      :label="challengerMode.label"
      data-tooltip="Increase the min and max rep count from 10-60 to 30-120"
      @onChange="handleConfigUpdate('general', challengerMode.label, $event)"
    />
  </div>
</template>

<script>
import Switcher from "@/components/Switcher.vue";

export default {
  name: "Controls",
  components: {
    Switcher
  },
  props: ["challengerMode", "isPlaying"],
  data() {
    return {};
  },
  methods: {
    handleConfigUpdate(section, label, checked) {
      this.$emit("onConfigUpdate", {
        section: section,
        label: label,
        checked: checked
      });
    },
    roll() {
      this.$emit("onRoll");
    },
    showOptions() {
      this.$emit("onShowOptions");
    }
  },
  computed: {
    playingLabel() {
      return this.isPlaying ? "Reroll" : "Roll a workout";
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.rollButton {
  width: 100%;
}
.optionsButton {
  display: none;
}

.challenger-mode-container {
  display: none;
}

@media screen and (min-width: 1024px) {
  .rollButton {
    width: auto;
    margin-right: 32px;
  }
  .optionsButton {
    display: inline-block;
  }
  .button {
    min-width: 216px;
  }
  .challenger-mode-container {
    display: block;
    margin-top: 32px;
    max-width: 200px;
  }
}
</style>
