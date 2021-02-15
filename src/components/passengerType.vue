<template>
  <div id="passenger-type">
    <input type="text" placeholder="select passengers" @click="onChange" />
    <ul>
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
    </ul>
    <button @click.prevent="modifiedPassengerTypes" style="margin-top: 30px;">
      Done
    </button>
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
  },

  methods: {
    onChange() {
      this.isOpen = !this.isOpen;
    },

    updatePassangerType(i, value) {
      const newPassengerTypes = [...this.passengertypes];
      newPassengerTypes[i].count = parseInt(value); // value from input is always string

      if ((newPassengerTypes[i].count = parseInt(value) >= 1)) {
        console.log(newPassengerTypes[i].typePassenger);
        console.log((newPassengerTypes[i].count = parseInt(value)));
      }
      this.$store.commit("updatePassengerTypes", newPassengerTypes);
    },

    modifiedPassengerTypes() {
      if (this.passengertypes.count >= 1) {
        console.log(this.passengertypes.typePassenger);
        console.log(this.passengertypes.count);
      }
    },
  },
};
</script>

<style scoped></style>
