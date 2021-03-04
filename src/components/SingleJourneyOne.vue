<template>
  <div class="widget__single-container grid-level-2">
    <div
      class="widget__options widget__options--level-1 "
      v-if="selectedJourneyType == 'single / return'"
      id="single-journey"
    >
      <!------------------------------ JOURNEY FROM DROPDOWN ----------------------->
      <journeys-out form-label="From" :items="this.journeystarts" />

      <!------------------------------ JOURNEY TO DROPDOWN ----------------------->
      <journeys-arrive form-label="To" :items="this.journeydestinations" />

      <!------------------------------ LEAVING DATE DROPDOWN ----------------------->
      <div class="datepicker__decoration">
        <datepicker
          v-model="selectedLeavingDate"
          placeholder="Select Leaving Date"
          wrapper-class="datepicker"
        >
        </datepicker>
      </div>
    </div>
</div>
</template>

<script>


import JourneysOut from "./single/JourneysOut.vue";
import JourneysArrive from "./single/JourneysArrive.vue";
import Datepicker from "vuejs-datepicker";


export default {
  components: {
    

    "journeys-out": JourneysOut,
    "journeys-arrive": JourneysArrive,
    Datepicker
  },

  data: function() {
    return {
      findTickets: false
    };
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
      }
    },

    selectedLeavingDate: {
      get() {
        return this.$store.state.selectedLeavingDate;
      },
      set(value) {
        this.$store.commit("updateSelectedLeavingDate", value);
      }
    },

    selectedReturnDate: {
      get() {
        return this.$store.state.selectedReturnDate;
      },
      set(value) {
        this.$store.commit("updateSelectedReturnDate", value);
      }
    },

    showTicketBar: {
      get() {
        return this.$store.state.showTicketBar;
      },
      set(value) {
        this.$store.commit("updateShowTicketBar", value);
      }
    },

    showSecondBar: {
      get() {
        return this.$store.state.showSecondBar;
      },
      set(value) {
        this.$store.commit("updateShowSecondBar", value);
      }
    }
  },

  methods: {
    processForm: function() {
      console.log({
        selectedJourneyType: this.$store.state.selectedJourneyType,
        searchJourneysOut: this.$store.state.searchJourneysOut,
        searchJourneysArrive: this.$store.state.searchJourneysArrive,
        selectedLeavingDate: this.$store.state.selectedLeavingDate,
        selectedReturnDate: this.$store.state.selectedReturnDate,
        updatePassengerTypes: this.$store.state.updatePassengerTypes
      });
    }
  }
};
</script>

<style scoped></style>
