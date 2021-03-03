<template>
  <div class="passengers" id="passenger-type">
    <div class="passengers__decoration">
      <label class="passengers__label">Passengers</label>
      <ul
        v-show="updatePassengerTypes"
        class="passengers__selected"
        @click="isOpen = true"
        @input="isOpen = true"
      >
        <li v-for="(a, i) in updatePassengerTypes" :key="i">
          {{ a.typePassenger }} x {{ a.count }},
        </li>
      </ul>

      <ul class="passenger__types" v-if="isOpen">
        <li
          class="passenger"
          v-for="(passengertype, i) in passengertypes"
          :key="i"
        >
          <span>{{ passengertype.typePassenger }}</span>

          <div class="passenger-count__container">
            <button
              @click.prevent="
                updatePassangerType(i, passengertypes[i].count - 1)
              "
              :disabled="passengertypes[i].count === 0"
            >
              -
            </button>
            <input
              type="number"
              min="0"
              :value="passengertypes[i].count"
              @input="updatePassangerType(i, $event.target.value)"
            />
            <button
              @click.prevent="
                updatePassangerType(i, passengertypes[i].count + 1)
              "
            >
              +
            </button>
          </div>
        </li>

        <li>
          <button v-on:click="handlePassengerEvents()">
            Done
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    passengertypes: {
      get() {
        return this.$store.state.passengertypes;
      },
      set(value) {
        this.$store.commit("updatePassengerTypes", value);
      }
    },

    updatePassengerTypes: {
      get() {
        return this.$store.state.updatePassengerTypes;
      },
      set(value) {
        this.$store.commit("updatePassengerTypes", value);
      }
    },

    showTicketBar: {
      get() {
        return this.$store.state.showTicketBar;
      },
      set(value) {
        this.$store.commit("updateShowTicketBar", value);
      }
    }
  },

  methods: {
    onChange() {
      this.isOpen = !this.isOpen;
    },

    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
      }
    },
    handlePassengerEvents() {
      if (this.$store.state.updatePassengerTypes.length >= 1) {
        this.$store.commit("updateShowTicketBar");
      }
      this.isOpen = !this.isOpen;
    },

    updatePassangerType(i, value) {
      const newPassengerTypes = [...this.passengertypes];
      newPassengerTypes[i].count = parseInt(value); // value from input is always string
      this.$store.commit("updatePassengerTypes", newPassengerTypes);
    },

    captureUpdatedPassengerTypes() {
      console.log("captured");
    }
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>
