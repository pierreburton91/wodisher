<template>
  <footer>
    <div class="level-left">
      <div class="level-item">&#169; {{ year }}, Wodisher</div>
      <div class="level-item">
        <a href="https://pierre-burton.be" target="_blank">Pierre Burton</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  display: none;
  padding: 24px;
  opacity: 0.5;
}

@media screen and (min-width: 1024px) {
  footer {
    display: block;
  }
}
</style>
