<template>
  <footer class="level">
    <div class="level-left">
      <div class="level-item">Copyright 2019</div>
      <div class="level-item">
        <a href="https://pierre-burton.be" target="_blank">Pierre Burton</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
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
