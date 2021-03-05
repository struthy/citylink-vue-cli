import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    journeypasses: ["10 Journey", "1 Week Pass", "3 Week Pass", "52 Week pass"],

    journeyroutes: [
      {
        route: "Route 1",
        routestart: "Harthill",
        routeend: "Edinburgh"
      },
      {
        route: "Route 2",
        routestart: "Glasgow",
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
    selectedJourneyType: "single / return",
    selectedLeavingDate: new Date().toISOString().slice(0, 10),
    selectedReturnDate: new Date().toISOString().slice(0, 10),
    updatePassengerTypes: [],
    searchJourneysOut: "",
    searchJourneysArrive: "",
    showTicketBar: false,
    showSecondBar: false
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
    }
  }
});
