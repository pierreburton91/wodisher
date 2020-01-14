<template>
  <div class="section">
    <div class="results">
      <span class="results_number">{{ wodisher.reps }}</span
      ><span class="results_movement">{{ wodisher.movement }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["wodisher"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.results_number,
.results_movement {
  display: inline-block;
}
.results_number {
  font-size: 4rem;
  margin-right: 32px;
}
.results_movement {
  font-size: 2rem;
  opacity: 0.75;
  text-transform: uppercase;
  width: 100%;
}
@media screen and (min-width: 1024px) {
  .results {
    min-height: 192px;
  }
  .results_number {
    clear: none;
  }
  .results_movement {
    font-size: 4rem;
    width: auto;
  }
}
</style>
