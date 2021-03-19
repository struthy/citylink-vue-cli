import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex-extensions";

Vue.use(Vuex);

export const store = new createStore(Vuex.Store, {
  state: {
    journeypasses: ["10 Journey", "1 Week Pass", "3 Week Pass", "52 Week pass"],
    journeyroutes: [
      {
        route: "Route 1",
        routestart: "Glasgow",
        routeend: "Edinburgh"
      },
      {
        route: "Route 2",
        routestart: "Harthill",
        routeend: "Edinburgh"
      },
      {
        route: "Route 3",
        routestart: "Harthill",
        routeend: "Glasgow"
      },
      {
        route: "Route 4",
        routestart: "Edinburgh",
        routeend: "Stirling"
      }
    ],
    journeyroutestext: [
      {
        name: "Please choose"
      }
    ],
    journeytypes: [
      {
        type: "single / return"
      },
      {
        type: "Multi journey"
      },
      {
        type: "Explorer passes"
      },
      {
        type: "Redeem your pass"
      }
    ],
    journeystarts: [
      "Glasgow Airport",
      "Glasgow Anniesland",
      "Glasgow Buchanan Bus Station",
      "Glasgow Cathedral Steet",
      "ect...."
    ],
    journeydestinations: [
      "Inverness Montague Road",
      "Inverness Tomnahurich",
      "Inverary",
      "Inveraray Brae",
      "ect...."
    ],
    passengertypes: [
      {
        typePassenger: "Adult",
        count: 0
      },
      {
        typePassenger: "Child",
        count: 0
      },
      {
        typePassenger: "60+ / Disabled NEC",
        count: 0
      },
      {
        typePassenger: "Student",
        count: 0
      },
      {
        typePassenger: "Young Scot 16-18 years",
        count: 0
      },
      {
        typePassenger: "Young Scot 19-25 years",
        count: 0
      },
      {
        typePassenger: "GCU Studentult",
        count: 0
      },
      {
        typePassenger: "Comp",
        count: 0
      }
    ],
    durations: [
      "3 days travel - valid for 5 days",
      "5 days travel - valid for 10 dayss",
      "8 days travel - valid for 16 days"
    ],
    passNumberInput: "",
    passNumbers: [
      { pass: "EXP123456789CA" },
      { pass: "EXP123456789CB" },
      { pass: "EXP123456789CC" }
    ],
    selectedJourneyType: "single / return",
    selectedLeavingDate: new Date().toISOString().slice(0, 10),
    selectedReturnDate: new Date().toISOString().slice(0, 10),
    selectedJourneyPass: "10 Journey",
    selectedpassNumbers: [],
    selectedJourneyroute: [],
    selectedJourneyrouteText: "Please choose",
    selectedDuration: "3 days travel - valid for 5 days",
    updatePassengerTypes: [],
    searchJourneysOut: "",
    searchJourneysArrive: "",
    showTicketBar: false,
    showSecondBar: false,
    showRedeemForm: false,
    progressSingle: 40,
  },

  mutations: {
    updateSelectedJourneyType(state, selectedJourneyType) {
      state.selectedJourneyType = selectedJourneyType;
    },

    updateSelectedLeavingDate(state, selectedLeavingDate) {
      state.selectedLeavingDate = selectedLeavingDate;
    },

    updateSelectedReturnDate(state, selectedReturnDate) {
      state.selectedReturnDate = selectedReturnDate;
    },

    updatePassengerTypes(state, updatePassengerTypes) {
      state.updatePassengerTypes = updatePassengerTypes.filter(
        x => x.count >= 1
      );
    },

    updateJourneyStart(state, searchJourneysOut) {
      state.searchJourneysOut = searchJourneysOut;
    },

    updateJourneyDestination(state, searchJourneysArrive) {
      state.searchJourneysArrive = searchJourneysArrive;
    },

    updateShowTicketBar(state, showTicketBar) {
      showTicketBar = true;
      state.showTicketBar = showTicketBar;
    },

    updateShowSecondBar(state, showSecondBar) {
      showSecondBar = true;
      state.showSecondBar = showSecondBar;
    },

    updateSelectedJourneyPass(state, selectedJourneyPass) {
      state.selectedJourneyPass = selectedJourneyPass;
    },

    updateSelectedJourneyRoutes(state, selectedJourneyroute) {
      state.selectedJourneyroute = selectedJourneyroute;
    },
    updateSelectedJourneyRoutesText(state, selectedJourneyrouteText) {
      state.selectedJourneyrouteText = selectedJourneyrouteText;
    },
    updateSelectedDurations(state, selectedDuration) {
      state.selectedDuration = selectedDuration;
    },
    updateshowRedeemForm(state, showRedeemForm) {
      showRedeemForm = true;
      state.showRedeemForm = showRedeemForm;
    },
    updatePassNumbers(state, selectedpassNumbers) {
      state.selectedpassNumbers = selectedpassNumbers;
    },
    updatePassInput(state, selectedpassNumbers) {
      state.selectedpassNumbers = selectedpassNumbers;
    },

    updateProgressSingle(state, updatedProgressSingle) {
      state.progressSingle = updatedProgressSingle;
    },
  },
  actions: {
    clearState() {
      this.reset();
    }
  }
});
