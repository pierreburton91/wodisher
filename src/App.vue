<template>
  <div id="app" class="app">
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
      timer: null,
      throtle: null
    };
  },
  methods: {
    roll() {
      clearTimeout(this.throtle);
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
      const reps =
        Math.floor(Math.random() * (this.max - this.min) + this.min) * 10;
      const availableMovements = this.movements.filter(el => {
        return (
          (!el.equipment.length &&
            el.muscleGroup.some(entry =>
              targetedMuscleGroups.includes(entry)
            )) ||
          (el.equipment.some(entry => availableEquipment.includes(entry)) &&
            el.muscleGroup.some(entry => targetedMuscleGroups.includes(entry)))
        );
      });
      const movement =
        availableMovements[
          Math.floor(Math.random() * availableMovements.length)
        ];
      this.throtle = setTimeout(
        () => this.setWodisher(reps, movement.name),
        500
      );
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
      return this.config.general[0].value ? 13 : 7;
    },
    min() {
      return this.config.general[0].value ? 3 : 1;
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
  padding: calc(0.5em - 1px);
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

.is-text-small {
  font-size: 0.75em;
}

.is-muted {
  opacity: 0.5;
}

[data-tooltip] {
  position: relative;
  &:hover:after {
    pointer-events: none;
    position: absolute;
    display: block;
    content: attr(data-tooltip);
    top: 24px;
    margin-top: 8px;
    max-width: 240px;
    margin-bottom: auto;
    background-color: $darkLight;
    font-size: 0.75em;
    padding: 8px 12px;
    border-radius: 4px;
  }
  &:hover:before {
    pointer-events: none;
    content: "";
    position: absolute;
    border-color: transparent transparent $darkLight transparent;
    border-style: solid;
    border-width: 6px;
    top: 20px;
    left: 48px;
  }
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
