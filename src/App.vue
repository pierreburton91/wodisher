<template>
  <div class="app">
    <TopBar />
    <Placeholders v-if="!isPlaying" />
    <Results v-if="isPlaying" />
    <Controls
      :isPlaying="isPlaying"
      :isBadGambler="options.isBadGambler"
      @onRoll="roll()"
      @onShowOptions="toggleOptionsModal()"
    />
    <Footer />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import Placeholders from "@/components/Placeholders.vue";
import Results from "@/components/Results.vue";
import Controls from "@/components/Controls.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    TopBar,
    Placeholders,
    Results,
    Controls,
    Footer
  },
  data() {
    return {
      isPlaying: false,
      showOptionsModal: false,
      options: {
        isBadGambler: false
      }
    };
  },
  methods: {
    roll() {
      this.isPlaying = true;
    },
    toggleOptionsModal() {
      this.showOptionsModal = !this.showOptionsModal;
    }
  }
};
</script>

<style lang="scss">
.app {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>
