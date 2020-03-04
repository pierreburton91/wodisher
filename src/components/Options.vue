<template>
  <div
    class="options"
    :class="{ 'options--hidden': closing }"
    @click.self="close()"
  >
    <div
      class="options_container"
      :class="{ 'options_container--hidden': closing }"
    >
      <div class="container_header">
        <h2 class="container_title">Options</h2>
        <button class="button button--text" @click.self="close()">Close</button>
      </div>
      <div v-if="showiOSInstallPrompt" class="install-prompt">
        <label class="install-prompt_label">
          <svg
            class="label_svg"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <path
              d="M336,192h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V232a40,40,0,0,1,40-40h40"
              style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
            />
            <polyline
              points="336 128 256 48 176 128"
              style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
            />
            <line
              x1="256"
              y1="321"
              x2="256"
              y2="48"
              style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
            />
          </svg>
          Add it to your homescreen !</label
        >
        <div class="install-prompt_text">
          Enjoy Wodisher like any other app by adding it to your homescreen.
        </div>
      </div>
      <label class="label">General</label>
      <div v-for="item of general" :key="item.label" class="option">
        <div class="option_label">
          {{ item.label }}<br /><span class="is-text-small is-muted"
            >Increase the min and max rep count<br />from 10-60 to 30-120</span
          >
        </div>
        <div class="option_control">
          <Switcher
            :isChecked="item.value"
            @onChange="handleConfigUpdate('general', item.label, $event)"
          />
        </div>
      </div>
      <label class="label">Equipments</label>
      <div
        v-for="equipment of equipments"
        :key="equipment.label"
        class="option"
      >
        <div class="option_label">
          {{
            equipment.label.slice(0, 1).toUpperCase() + equipment.label.slice(1)
          }}
        </div>
        <div class="option_control">
          <Switcher
            :isChecked="equipment.value"
            @onChange="
              handleConfigUpdate('equipments', equipment.label, $event)
            "
          />
        </div>
      </div>
      <label class="label">Target muscles groups</label>
      <div
        v-for="muscleGroup of muscleGroups"
        :key="muscleGroup.label"
        class="option"
      >
        <div class="option_label">
          {{
            muscleGroup.label.slice(0, 1).toUpperCase() +
              muscleGroup.label.slice(1)
          }}
        </div>
        <div class="option_control">
          <Switcher
            :isChecked="muscleGroup.value"
            @onChange="
              handleConfigUpdate('muscleGroups', muscleGroup.label, $event)
            "
          />
        </div>
      </div>
      <div class="about">
        <label class="label">About</label>
        <div class="option">
          <div class="option_label">
            Made with 💪 by
          </div>
          <div class="option_control">
            <a href="https://pierre-burton.be" target="_blank">Pierre Burton</a>
          </div>
        </div>
        <div class="option">
          <div class="option_label">
            Spread the love
          </div>
          <div class="option_control">
            <button type="button" class="icon-button" @click="share()">
              <svg
                class="share"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                />
              </svg>
            </button>
          </div>
        </div>
        <img class="about_logo" src="../assets/logo.svg" />
        <div class="about_version">
          v{{ version }}
          <br />
          &#169; {{ year }}, Wodisher
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switcher from "@/components/Switcher.vue";
const pckg = require("../../package.json");

export default {
  name: "Options",
  components: {
    Switcher
  },
  props: ["isChallengerMode", "general", "equipments", "muscleGroups"],
  data() {
    return {
      closing: false,
      version: pckg.version
    };
  },
  methods: {
    close() {
      this.closing = true;
      setTimeout(() => this.$emit("onClose"), 500);
    },
    handleConfigUpdate(section, label, checked) {
      this.$emit("onConfigUpdate", {
        section: section,
        label: label,
        checked: checked
      });
    },
    async share() {
      if (navigator.share) {
        await navigator.share({
          title: "Wodisher - It's time to throw you down !",
          url: location.href
        });
      } else {
        const el = document.createElement("textarea");
        el.value = location.href;
        document.body.appendChild(el);
        el.select();
        el.setSelectionRange(0, 9999999);
        document.execCommand("copy");
        document.body.removeChild(el);
        this.$emit("onShare", "Link copied in clipboard !");
      }
    }
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
    isShareAvailable() {
      return !!navigator.share;
    },
    showiOSInstallPrompt() {
      const isIos = /iphone|ipad|ipod/.test(
        window.navigator.userAgent.toLowerCase()
      );
      const isInStandaloneMode =
        "standalone" in window.navigator && window.navigator.standalone;

      return isIos && !isInStandaloneMode;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/shared/sass/_variables";

.options {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.5s ease forwards;
}
.options--hidden {
  animation: fadeOut 0.5s ease forwards;
}
.options_container {
  background-color: $dark;
  width: 100%;
  max-width: 480px;
  padding: 24px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  max-height: 100%;
  overflow-y: auto;
  animation: swipeUp 0.5s ease forwards;
}
@supports (-webkit-overflow-scrolling: touch) {
  .options_container {
    -webkit-overflow-scrolling: touch;
  }
}
.options_container--hidden {
  animation: swipeDown 0.5s ease forwards;
}
.container_header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.container_title {
  font-size: 24px;
  margin-bottom: 16px;
}
.option {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}
.option_label--disabled {
  opacity: 0.5;
}
.label {
  margin-bottom: 0;
  margin-top: 32px;
  &:first-of-type {
    margin-top: 16px;
  }
}

.about {
  margin-top: 40px;
}
.about_logo {
  max-height: 32px;
  margin-top: 32px;
}
.about_version {
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.5;
}

.icon-button {
  border: none;
  outline: none;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.share {
  height: 24px;
}
.share path {
  fill: $primary;
  box-shadow: 0 3px 6px rgba($primary, 0.3);
}
.icon-button:hover,
.icon-button:active {
  & .share path {
    fill: $primary-dark;
  }
}

.install-prompt {
  padding: 1rem;
  background-color: #650cc7;
  border-radius: 16px;
}
.install-prompt_label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.label_svg {
  stroke: currentColor;
  width: 2rem;
  height: 2rem;
  margin-right: 8px;
}
.install-prompt_text {
  font-size: 0.75rem;
  opacity: 0.75;
  margin-top: 8px;
}
</style>
