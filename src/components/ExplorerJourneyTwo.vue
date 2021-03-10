<template>
  <div class="grid-level-3" v-if="selectedJourneyType == 'Explorer passes'">
    <div class="widget__options widget__options--level-2">
      <div class="widget__level-2-center">
        <duration></duration>

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
      v-if="selectedJourneyType == 'Explorer passes' && showTicketBar == true"
    ></find-tickets>
  </div>
</template>

<script>
import Duration from "./explorer/Duration.vue";
import PassengerType from "./explorer/PassengerType.vue";
import FindTickets from "./explorer/FindTickets.vue";
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    duration: Duration,
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
