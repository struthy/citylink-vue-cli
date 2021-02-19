<template>
  <div id="app">
    <form id="journey-details" @submit.prevent="processForm">
      <journey-type></journey-type>
      <hr />

      <div v-if="selectedJourneyType == 'single / return'" id="single-journey">
        <journeys-out form-label="From" :items="this.journeystarts" />

        <hr />

        <journeys-arrive form-label="To" :items="this.journeydestinations" />

        <hr />

        <datepicker
          v-model="selectedLeavingDate"
          placeholder="Select Leaving Date"
          wrapper-class="custom-css"
        >
        </datepicker>

        <hr />

        <passenger-type></passenger-type>

        <hr />

        <datepicker
          v-model="selectedReturnDate"
          placeholder="Select Return Date"
          wrapper-class="custom-css"
        >
        </datepicker>

        <hr />

        <div class="find-tickets">
          <p>Find Tickets Text</p>
          <button type="submit" class="button is-danger">Submit</button>
        </div>

        <hr />
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
import JourneysOut from "./components/JourneysOut.vue";
import JourneysArrive from "./components/JourneysArrive.vue";
import Datepicker from "vuejs-datepicker";

export default {
  name: "app",
  components: {
    "journey-type": JourneyType,
    "passenger-type": passengerType,
    "journeys-out": JourneysOut,
    "journeys-arrive": JourneysArrive,
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

    selectedLeavingDate: {
      get() {
        return this.$store.state.selectedLeavingDate;
      },
      set(value) {
        this.$store.commit("updateSelectedLeavingDate", value);
      },
    },

    selectedReturnDate: {
      get() {
        return this.$store.state.selectedReturnDate;
      },
      set(value) {
        this.$store.commit("updateSelectedReturnDate", value);
      },
    },
  },

  methods: {
    processForm: function() {
      console.log({
        selectedJourneyType: this.$store.state.selectedJourneyType,
        selectedReturnDate: this.$store.state.selectedReturnDate,
        selectedLeavingDate: this.$store.state.selectedLeavingDate,
        updatePassengerTypes: this.$store.state.updatePassengerTypes,
      });
      alert("Processing! ");
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
