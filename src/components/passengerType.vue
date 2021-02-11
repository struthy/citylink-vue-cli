<template>
  <div id="passenger-type">
    <input type="text" placeholder="select passengers" @click="onChange" />
    <ul>
      <li v-for="(passengertype, i) in passengertypes" :key="i">
        <span>{{ passengertype.type }}</span>
        <div class="passenger-count__container">
          <button
            @click.prevent="
              updatePassangerCount(i, selectedPassengerCount[i] - 1)
            "
            :disabled="selectedPassengerCount[i] === 1"
          >
            -
          </button>
          <input
            type="number"
            min="0"
            :value="selectedPassengerCount[i]"
            @input="updatePassangerCount(i, $event.target.value)"
          />
          <button
            @click.prevent="
              updatePassangerCount(i, selectedPassengerCount[i] + 1)
            "
          >
            +
          </button>
        </div>
      </li>
    </ul>
    <button style="margin-top: 30px;">Done</button>
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

    selectedPassengerCount: {
      get() {
        return this.$store.state.selectedPassengerCount;
      },
      set(value) {
        this.$store.commit("updateSelectedPassengerCount", value);
      },
    },
  },

  methods: {
    onChange() {
      this.isOpen = !this.isOpen;
    },

    updatePassangerCount(index, value) {
      const newArray = [...this.selectedPassengerCount];
      newArray[index] = parseInt(value); // value from input is always string
      this.$store.commit("updateSelectedPassengerCount", newArray);
      // or create a new mutation with (index, value) arguments
    },

    decrement() {},

    increment() {},
  },
};
</script>

<style scoped></style>
