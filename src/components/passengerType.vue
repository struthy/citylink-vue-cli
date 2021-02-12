<template>
  <div id="passenger-type">
    <input type="text" placeholder="select passengers" @click="onChange" />
    <ul>
      <li v-for="(passengertype, i) in passengertypes" :key="i">
        <span>{{ passengertype.type }}</span> /
        <span>count is {{ passengertype.count }}</span>
        <div class="passenger-count__container">
          <!-- <button
            @click.prevent="
              updatePassangerCount(i, selectedPassengerCount[i] - 1)
            "
            :disabled="selectedPassengerCount[i] === 0"
          >
            -
          </button> -->
          <!-- <input
            type="number"
            min="0"
            :value="selectedPassengerCount[i]"
            @input="updatePassangerCount(i, $event.target.value)"
          /> -->

          <input
            type="number"
            min="0"
            @input="updatePassangerType(i, $event.target.value)"
            :value="passengertypes[i].count"
          />
          <!-- <button
            @click.prevent="
              updatePassangerCount(i, selectedPassengerCount[i] + 1)
            "
          >
            +
          </button> -->
        </div>
      </li>

      <button @click.prevent="dummy">add 1</button>
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
        let payload = {
          count: value,
          type: this.type,
        };
        this.$store.commit("updatePassengerTypes", payload);
      },
    },

    // selectedPassengerCount: {
    //   get() {
    //     return this.$store.state.selectedPassengerCount;
    //   },
    //   set(value) {
    //     this.$store.commit("updateSelectedPassengerCount", value);
    //   },
    // },

    // selectedPassengerType: {
    //   get() {
    //     return this.$store.state.selectedPassengerType;
    //   },
    //   set(value) {
    //     this.$store.commit("updateSelectedPassengerType", value);
    //   },
    // },
  },

  methods: {
    onChange() {
      this.isOpen = !this.isOpen;
    },

    updatePassangerType(index, value) {
      const newArray = [...this.passengertypes];
      newArray[index] = parseInt(value); // value from input is always string
      this.$store.commit("updatePassengerTypes", newArray);
      // or create a new mutation with (index, value) arguments
    },

    dummy: function() {
      this.$store.commit("dummy");
    },

    decrement() {},

    increment() {},
  },
};
</script>

<style scoped></style>
