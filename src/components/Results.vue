<template>
  <div class="section">
    <div class="results">
      <span class="results_number" :class="{ 'results_number--show': hasWodisher }">{{ wodisher.reps }}</span
      ><span class="results_movement" :class="{ 'results_movement--show': hasWodisher }">{{ wodisher.movement }}</span>
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
  computed: {
    hasWodisher() {
      return !!this.wodisher.reps && !!this.wodisher.movement;
    }
  },
  watch: {
    wodisher: {
      handler(val) {
        console.log(val);
      },
      deep: true
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.results_number,
.results_movement {
  display: inline-block;
  opacity: 0;
  transform-origin: left;
}
.results_number {
  font-size: 4rem;
  margin-right: 32px;
}
.results_movement {
  font-size: 2rem;
  text-transform: uppercase;
  width: 100%;
}
.results_number--show {
  animation: number .16s ease-in-out forwards;
}
.results_movement--show {
  animation: movement .16s .16s ease-in-out forwards;
}

@keyframes number {
  from {
    transform: scale(2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes movement {
  from {
    transform: scale(2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 0.75;
  }
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
