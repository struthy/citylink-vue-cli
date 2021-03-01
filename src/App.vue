<template>
  <div id="app" class="widget">
    <form
      class="widget__container"
      id="journey-details"
      @submit.prevent="processForm"
    >
      <div class="widget__type">
        <journey-type></journey-type>
      </div>

      <div
        class="widget__options widget__options--level-1"
        v-if="selectedJourneyType == 'single / return'"
        id="single-journey"
      >
        <journeys-out form-label="From" :items="this.journeystarts" />

        <journeys-arrive form-label="To" :items="this.journeydestinations" />
        <datepicker
          v-model="selectedLeavingDate"
          placeholder="Select Leaving Date"
          wrapper-class="datepicker"
        >
        </datepicker>
      </div>

      <div
        class="widget__options widget__options--level-2"
        v-if="selectedJourneyType == 'single / return'"
      >
        <div class="widget__level-2-center">
          <datepicker
            v-model="selectedReturnDate"
            placeholder="Select Return Date"
            wrapper-class="datepicker"
          >
          </datepicker>

          <passenger-type></passenger-type>
        </div>
      </div>

      <div
        class="widget__find-tickets widget__options--level-3"
        v-if="selectedJourneyType == 'single / return'"
      >
        <p>Find Tickets Text</p>
        <button type="submit" class="button is-danger">Submit</button>
      </div>
      <!-- other journeys -->
      <!-- other journeys -->
      <!-- other journeys -->
      <!-- other journeys -->
      <!-- other journeys -->
      <!-- other journeys -->
      <!-- other journeys -->
      <!-- other journeys -->
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
        searchJourneysOut: this.$store.state.searchJourneysOut,
        searchJourneysArrive: this.$store.state.searchJourneysArrive,
        selectedLeavingDate: this.$store.state.selectedLeavingDate,
        selectedReturnDate: this.$store.state.selectedReturnDate,
        updatePassengerTypes: this.$store.state.updatePassengerTypes,
      });
      alert("Processing! ");
    },
  },
};
</script>

<style scoped></style>
