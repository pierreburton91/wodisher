<template>
  <div class="snackbar">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "SnackBar",
  props: ["message"],
  mounted() {
    setTimeout(() => this.$emit("onHide"), 3000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/shared/sass/_variables";

.snackbar {
  position: fixed;
  z-index: 9999999;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 8px;
  background-color: $primary;
  text-align: center;
  animation: fadeInOut 3s ease-in-out forwards;
}

@keyframes fadeInOut {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
