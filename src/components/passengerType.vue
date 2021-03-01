<template>
  <div class="passengers" id="passenger-type">
    <label class="passengers__label">Passengers</label>
    <ul v-if="updatePassengerTypes" class="passengers__selected">
      <li v-for="(a, i) in updatePassengerTypes" :key="i">
        {{ a.typePassenger }} x {{ a.count }},
      </li>
    </ul>

    <ul class="passenger__types">
      <li v-for="(passengertype, i) in passengertypes" :key="i">
        <span>{{ passengertype.typePassenger }}</span>

        <div class="passenger-count__container">
          <button
            @click.prevent="updatePassangerType(i, passengertypes[i].count - 1)"
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
            @click.prevent="updatePassangerType(i, passengertypes[i].count + 1)"
          >
            +
          </button>
        </div>
      </li>

      <li>
        <button
          @click.prevent="captureUpdatedPassengerTypes"
          style="margin-top: 30px;"
        >
          Done
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    passengertypes: {
      get() {
        return this.$store.state.passengertypes;
      },
      set(value) {
        this.$store.commit("updatePassengerTypes", value);
      },
    },

    updatePassengerTypes: {
      get() {
        return this.$store.state.updatePassengerTypes;
      },
      set(value) {
        this.$store.commit("updatePassengerTypes", value);
      },
    },
  },

  methods: {
    onChange() {
      this.isOpen = !this.isOpen;
    },

    updatePassangerType(i, value) {
      const newPassengerTypes = [...this.passengertypes];
      newPassengerTypes[i].count = parseInt(value); // value from input is always string
      this.$store.commit("updatePassengerTypes", newPassengerTypes);
    },

    captureUpdatedPassengerTypes() {
      console.log("captured");
    },
  },
};
</script>

<style scoped></style>
