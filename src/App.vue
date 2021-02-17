<template>
  <div id="app">
    <form id="journey-details">
      <journey-type></journey-type>
      <hr />

      <div v-if="selectedJourneyType == 'single / return'" id="single-journey">
        <auto-complete form-label="From" :items="this.journeystarts" />
        <hr />
        <auto-complete form-label="To" :items="this.journeydestinations" />
        <hr />
        <datepicker
          v-model="selectedDate"
          placeholder="Select Date"
          wrapper-class="custom-css"
        >
        </datepicker>
        <hr />
        <passenger-type></passenger-type>
      </div>

      <div v-if="selectedJourneyType == 'Multi journey'" id="multi-journey">
        <h3>Multi Journey</h3>
      </div>

      <div v-if="selectedJourneyType == 'Explorer passes'" id="explorer-pass">
        <h3>explorer pass</h3>
      </div>
    </form>
  </div>
</template>

<script>
import JourneyType from "./components/journeyType.vue";
import passengerType from "./components/passengerType.vue";
import autocomplete from "./components/Autocomplete.vue";
import Datepicker from "vuejs-datepicker";

export default {
  name: "app",
  components: {
    "journey-type": JourneyType,
    "passenger-type": passengerType,
    "auto-complete": autocomplete,
    Datepicker,
  },

  data: function() {
    return {};
  },

  computed: {
    journeystarts() {
      return this.$store.state.journeystarts;
    },

    journeydestinations() {
      return this.$store.state.journeydestinations;
    },

    selectedJourneyType: {
      get() {
        return this.$store.state.selectedJourneyType;
      },
      set(value) {
        this.$store.commit("updateSelectedJourneyType", value);
      },
    },

    selectedDate: {
      get() {
        return this.$store.state.selectedDate;
      },
      set(value) {
        this.$store.commit("updateSelectedDate", value);
      },
    },
  },
};
</script>

<style scoped>
.widget__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1 1 100%;
}
</style>
