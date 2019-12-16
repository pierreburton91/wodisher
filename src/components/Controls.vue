<template>
  <div class="section">
    <div>
      <button type="button" class="button is-primary is-large rollButton">
        Roll a workout
      </button>
      <button
        type="button"
        class="button is-primary is-large is-outlined has-text-white"
      >
        Options
      </button>
    </div>
    <Switcher
      class="bad-gambler-container"
      :isBadGambler="isBadGambler"
      @input="handleBadGamblerUpdate($event)"
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
  props: ["isBadGambler"],
  model: {
    prop: "isBadGambler",
    event: "onBadGamblerUpdate"
  },
  data() {
    return {};
  },
  methods: {
    handleBadGamblerUpdate(checked) {
      this.$emit("onBadGamblerUpdate", checked);
    }
  },
  computed: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.rollButton {
  width: 100%;
}

.bad-gambler-container {
  display: none;
}

@media screen and (min-width: 1024px) {
  .rollButton {
    width: auto;
    margin-right: 32px;
  }
  .button {
    min-width: 216px;
  }
  .bad-gambler-container {
    display: block;
    margin-top: 32px;
  }
}
</style>
