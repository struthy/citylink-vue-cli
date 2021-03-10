<template>
  <div class="grid-level-3" v-if="selectedJourneyType == 'Multi journey'">
    <div class="widget__options widget__options--level-2">
      <div class="widget__level-2-center widget__pb">
        <journey-pass></journey-pass>
        <journey-route></journey-route>
      </div>
      <div class="widget__level-2-center">
        <div class="datepicker__decoration datepicker__decoration--50">
          <datepicker
            v-model="selectedLeavingDate"
            placeholder="Select Leaving Date"
            wrapper-class="datepicker"
          >
          </datepicker>
        </div>
        <passenger-type></passenger-type>
      </div>
    </div>
    <find-tickets
      v-if="selectedJourneyType == 'Multi journey' && showTicketBar == true"
    ></find-tickets>
  </div>
</template>

<script>
import JourneyPass from "./multi/JourneyPass.vue";
import JourneyRoute from "./multi/JourneyRoute.vue";
import PassengerType from "./multi/PassengerType.vue";
import FindTickets from "./multi/FindTickets.vue";

import Datepicker from "vuejs-datepicker";
export default {
  components: {
    "journey-pass": JourneyPass,
    "journey-route": JourneyRoute,
    "passenger-type": PassengerType,
    "find-tickets": FindTickets,
    Datepicker
  },

  computed: {
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
    showTicketBar: {
      get() {
        return this.$store.state.showTicketBar;
      },
      set(value) {
        this.$store.commit("updateShowTicketBar", value);
      }
    }
  }
};
</script>
