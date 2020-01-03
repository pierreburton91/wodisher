<template>
  <div class="section">
    <div class="results">
      <span id="number">{{ wodisher.reps }}</span
      ><span id="movement" class="movement">{{ wodisher.movement }}</span>
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
.results {
  font-size: 2rem;
}
.movement {
  opacity: 0.75;
  margin-left: 32px;
  text-transform: uppercase;
}
@media screen and (min-width: 1024px) {
  .results {
    font-size: 3rem;
  }
}
</style>
