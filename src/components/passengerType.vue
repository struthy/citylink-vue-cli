<template>
  <div id="passenger-type">
    <input type="text" placeholder="select passengers" @click="onChange" />
    <ul>
      <li v-for="(passengertype, i) in passengertypes" :key="i">
        <span>{{ passengertype.type }}</span>
        <div class="passenger-count__container">
          <button>-</button>
          <input type="number" min="1" v-model="selectedPassengerCount[i]" />
          <button>+</button>
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
  },
};
</script>
