<template>
  <div class="grid-level-3" v-if="selectedJourneyType == 'Redeem your pass' && showRedeemForm == true">
    <div class="widget__options widget__options--level-2">
      Form Stuff
    </div>
    <find-tickets
      v-if="selectedJourneyType == 'Multi journey' && showTicketBar == true"
    ></find-tickets>
  </div>
</template>

<script>
import FindTickets from "./multi/FindTickets.vue";
export default {
  components: {
    "find-tickets": FindTickets,
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
    },
    showRedeemForm: {
      get() {
        return this.$store.state.showRedeemForm;
      },
      set(value) {
        this.$store.commit("updateshowRedeemForm", value);
      }
    }
  },
  
};
</script>
