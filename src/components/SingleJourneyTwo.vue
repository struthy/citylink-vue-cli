<template>
  <div class="grid-level-3">

    <div
      class="widget__options widget__options--level-2"
      v-if="selectedJourneyType == 'single / return' && showSecondBar == true"
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


    <find-tickets
      v-if="selectedJourneyType == 'single / return' && showTicketBar == true"
    ></find-tickets>

</div>
</template>

<script>

import PassengerType from "./single/PassengerType.vue";
import Datepicker from "vuejs-datepicker";
import FindTickets from "./single/FindTickets.vue";

export default {
  components: {
    "passenger-type": PassengerType,
    "find-tickets": FindTickets,
    Datepicker
  },

  data: function() {
    return {
      findTickets: false
    };
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
  }
};
</script>

<style scoped></style>
