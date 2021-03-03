<template>
  <form
    class="widget__container"
    id="journey-details"
    @submit.prevent="processForm"
  >
    <!------------------------------ JOURNEY TYPE DROPDOWN ----------------------->

    <div class="widget__journey-type">
      <journey-type></journey-type>
    </div>

    <div
      class="widget__options widget__options--level-1"
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

    <!--------------------------------------------------------------------------->
    <!------------------------------ LEVEL 2 OF JOURNEY ------------------------->
    <!--------------------------------------------------------------------------->

    <div
      class="widget__options widget__options--level-2"
      v-if="selectedJourneyType == 'single / return'"
    >
      <div class="widget__level-2-center">
        <!------------------------------ RETURN DATE DROPDOWN ----------------------->
        <div class="datepicker__decoration datepicker__decoration--50 ">
          <datepicker
            v-model="selectedReturnDate"
            placeholder="Select Return Date"
            wrapper-class="datepicker"
          >
          </datepicker>
        </div>

        <!------------------------------ PASSENGER TYPE DROPDOWN ----------------------->

        <passenger-type></passenger-type>
      </div>
    </div>

    <!------------------------------ FIND TICKETS BAR ----------------------->

    <find-tickets
      v-if="selectedJourneyType == 'single / return'"
      @showTicketBar="findTickets = $event"
      :TicketsVisible="findTickets"
    ></find-tickets>

    <!------------------------------ other journeys ----------------------->
  </form>
</template>

<script>
import JourneyType from "./single/JourneyType.vue";
import PassengerType from "./single/PassengerType.vue";
import JourneysOut from "./single/JourneysOut.vue";
import JourneysArrive from "./single/JourneysArrive.vue";
import Datepicker from "vuejs-datepicker";
import FindTickets from "./single/FindTickets.vue";

export default {
  components: {
    "journey-type": JourneyType,
    "passenger-type": PassengerType,
    "journeys-out": JourneysOut,
    "journeys-arrive": JourneysArrive,
    "find-tickets": FindTickets,
    Datepicker,
  },

  data: function() {
    return {
      findTickets: false,
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
    // setTickerBar: function(x) {
    //   this.findTickets == x;
    //   console.log(this.findTickets);
    // },

    processForm: function() {
      console.log({
        selectedJourneyType: this.$store.state.selectedJourneyType,
        searchJourneysOut: this.$store.state.searchJourneysOut,
        searchJourneysArrive: this.$store.state.searchJourneysArrive,
        selectedLeavingDate: this.$store.state.selectedLeavingDate,
        selectedReturnDate: this.$store.state.selectedReturnDate,
        updatePassengerTypes: this.$store.state.updatePassengerTypes,
      });
    },
  },
};
</script>

<style scoped></style>
