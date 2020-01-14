<template>
  <div class="app">
    <TopBar @onToggleOptionsModal="toggleOptionsModal()" />
    <Placeholders v-if="!isPlaying" />
    <Results v-if="isPlaying" :wodisher="wodisher" />
    <Controls
      :isPlaying="isPlaying"
      :challengerMode="config.general[0]"
      @onRoll="roll()"
      @onShowOptions="toggleOptionsModal()"
      @onConfigUpdate="handleConfigUpdate($event)"
    />
    <Footer />
    <Options
      v-if="showOptionsModal"
      @onClose="toggleOptionsModal()"
      @onConfigUpdate="handleConfigUpdate($event)"
      :general="config.general"
      :equipments="config.equipments"
      :muscleGroups="config.muscleGroups"
    />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import Placeholders from "@/components/Placeholders.vue";
import Results from "@/components/Results.vue";
import Controls from "@/components/Controls.vue";
import Footer from "@/components/Footer.vue";
import Options from "@/components/Options.vue";
import movements from "@/data/movements";

export default {
  name: "app",
  components: {
    TopBar,
    Placeholders,
    Results,
    Controls,
    Footer,
    Options
  },
  data() {
    return {
      isPlaying: false,
      showOptionsModal: false,
      config: {
        general: [
          {
            label: "Challenger mode",
            value: false
          }
        ],
        equipments: [],
        muscleGroups: []
      },
      movements,
      wodisher: {
        reps: null,
        movement: null
      },
      timer: null
    };
  },
  methods: {
    roll() {
      this.setWodisher();
      const availableEquipment = [
        ...new Set(
          this.config.equipments
            .filter(el => el.value)
            .map(item => item.label)
            .flat()
        )
      ];
      const targetedMuscleGroups = [
        ...new Set(
          this.config.muscleGroups
            .filter(el => el.value)
            .map(item => item.label)
            .flat()
        )
      ];
      console.log(
        this.movements.filter(el => {
          return (
            el.equipment.some(entry => availableEquipment.includes(entry)) &&
            el.muscleGroup.some(entry => targetedMuscleGroups.includes(entry))
          );
        })
      );
      const reps =
        Math.floor(Math.random() * (this.max - this.min) + this.min) * 10;
      const movement = this.movements[
        Math.floor(Math.random() * this.movements.length)
      ];
      this.setWodisher(reps, movement.name);
      this.isPlaying = true;
    },
    setWodisher(reps = null, movement = null) {
      this.wodisher.reps = reps;
      this.wodisher.movement = movement;
    },
    toggleOptionsModal() {
      this.showOptionsModal = !this.showOptionsModal;
    },
    setDefaultConfig() {
      this.equipments.forEach(value => {
        this.config.equipments.push({ label: value, value: true });
      });
      this.muscleGroups.forEach(value => {
        this.config.muscleGroups.push({ label: value, value: true });
      });
      this.saveConfig();
    },
    saveConfig() {
      localStorage.setItem("config", JSON.stringify(this.config));
    },
    getConfig() {
      this.config = JSON.parse(localStorage.getItem("config"));
    },
    handleConfigUpdate({ section, label, checked }) {
      const configObj = this.config[section].find(el => el.label === label);
      configObj.value = checked;
      this.saveConfig();
    }
  },
  computed: {
    max() {
      return this.config.isChallengerMode ? 13 : 7;
    },
    min() {
      return this.config.isChallengerMode ? 3 : 1;
    },
    equipments() {
      return [...new Set(this.movements.map(item => item.equipment).flat())];
    },
    muscleGroups() {
      return [...new Set(this.movements.map(item => item.muscleGroup).flat())];
    }
  },
  watch: {
    isPlaying(val) {
      if (val) {
        this.timer = setTimeout(() => (this.isPlaying = false), 300000);
      } else {
        clearTimeout(this.timer);
      }
    }
  },
  created() {
    if (localStorage.getItem("config")) {
      this.getConfig();
    } else {
      this.setDefaultConfig();
    }
  }
};
</script>

<style lang="scss">
@import "@/shared/sass/_variables";

.app {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

.section {
  padding: 1.5rem;
}

.button {
  -webkit-tap-highlight-color: transparent;
}
.button--text {
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  color: $primary;
}
.button--text:hover,
.button--text.is-hovered,
.button--text:active,
.button--text.is-active,
.button--text:focus,
.button--text.is-focus {
  border: none;
  color: $primary-dark;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes swipeUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes swipeDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

@media screen and (min-width: 1024px) {
  .section {
    padding: 3rem 1.5rem;
  }
}
</style>
