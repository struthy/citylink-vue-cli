<template>
  <div id="app" class="widget">
    <form
      class="grid-container"
      id="journey-details"
      @submit.prevent="processForm"
    >
      <journey-type></journey-type>
      <single-journey-one></single-journey-one>
      <single-journey-two></single-journey-two>
      <multi-journey-one></multi-journey-one>
      <multi-journey-two></multi-journey-two>
      <explorer-journey-one></explorer-journey-one>
      <explorer-journey-two></explorer-journey-two>
      <redeem-journey-one></redeem-journey-one>
      <redeem-journey-two></redeem-journey-two>
    </form>
  </div>
</template>

<script>
import JourneyType from "./components/JourneyType.vue";
import SingleJourneyOne from "./components/SingleJourneyOne.vue";
import SingleJourneyTwo from "./components/SingleJourneyTwo.vue";
import MultiJourneyOne from "./components/MultiJourneyOne.vue";
import MultiJourneyTwo from "./components/MultiJourneyTwo.vue";
import ExplorerJourneyOne from "./components/ExplorerJourneyOne.vue";
import ExplorerJourneyTwo from "./components/ExplorerJourneyTwo.vue";
import RedeemJourneyOne from "./components/RedeemJourneyOne.vue";
import RedeemJourneyTwo from "./components/RedeemJourneyTwo.vue";

export default {
  name: "app",
  components: {
    "journey-type": JourneyType,
    "single-journey-one": SingleJourneyOne,
    "single-journey-two": SingleJourneyTwo,
    "multi-journey-one": MultiJourneyOne,
    "multi-journey-two": MultiJourneyTwo,
    "explorer-journey-one": ExplorerJourneyOne,
    "explorer-journey-two": ExplorerJourneyTwo,
    "redeem-journey-one": RedeemJourneyOne,
    "redeem-journey-two": RedeemJourneyTwo
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
    },
    showRedeemForm: {
      get() {
        return this.$store.state.showRedeemForm;
      },
      set(value) {
        this.$store.commit("updateshowRedeemForm", value);
      }
    }
  }
};
</script>
