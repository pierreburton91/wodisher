<template>
  <div class="section">
    <div class="is-size-1">{{ quotes[index] }}</div>
  </div>
</template>

<script>
export default {
  name: "Placeholders",
  data() {
    return {
      quotes: [
        "Si vis pacem, para bellum.",
        "I've no idea how things will end up.",
        "My favorite sound in the world is the silence after the first gunshot."
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

<style lang="scss" scoped></style>
