<template>
  <div id="passenger-type">
    <input type="text" placeholder="select passengers" @click="onChange" />
    <ul>
      <li v-for="(passengertype, i) in passengertypes" :key="i">
        <span>{{ passengertype.type }}</span>
        <div class="passenger-count__container">
          <button
            @click.prevent="updatePassangerCount(i, $event.target.value--)"
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
            @click.prevent="updatePassangerCount(i, $event.target.value++)"
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
  components: {},
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    passengertypes() {
      return this.$store.state.passengertypes;
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

    updatePassangerCount(i, value) {
      const newArray = [...this.selectedPassengerCount];
      newArray[i] = parseInt(value); // value from input is always string
      this.$store.commit("updateSelectedPassengerCount", newArray);
      // or create a new mutation with (index, value) arguments
    },

    passengerCountPlus(i, value) {
      const newArray = [...this.selectedPassengerCount];
      newArray[i] = parseInt(value); // value from input is always string
      this.$store.commit("updateSelectedPassengerCount", newArray);
    },
  },
};
</script>
