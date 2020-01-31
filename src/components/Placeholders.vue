<template>
  <div class="section">
    <div class="placeholder" v-html="quotes[index]"></div>
  </div>
</template>

<script>
export default {
  name: "Placeholders",
  data() {
    return {
      quotes: [
        "<span class='fade-in-out'>Si vis pacem, para bellum.</span>",
        "<span class='fade-in-out'>I've no idea how things will end up.</span>",
        "<span class='fade-in-out'>My favorite sound in the world is the silence after the first gunshot.</span>",
        "<span class='fade-in-out'>People think that torture is pain. It's not pain, it's time.</span>",
        "<span class='fade-in-out'>Happy is a kick in the balls waiting to happen.</span>"
      ],
      index: 0,
      interval: null
    };
  },
  created() {
    this.interval = setInterval(() => {
      this.index = this.index < this.quotes.length - 1 ? this.index + 1 : 0;
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss">
.placeholder {
  font-size: 2.5rem;
}
.fade-in-out {
  opacity: 0;
  animation: fadeInOut 10s ease forwards;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (min-width: 1024px) {
  .placeholder {
    font-size: 4rem;
    min-height: 192px;
  }
}
</style>
