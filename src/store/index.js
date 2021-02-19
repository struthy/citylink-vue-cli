import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export const store = new Vuex.Store({
  
  state: {
    journeytypes: [
      {
        type: "single / return",
        price: 25
      },
      {
        type: "Multi journey",
        price: 20
      },
      {
        type: "Explorer passes",
        price: 15
      },
      {
        type: "Redeem your pass",
        price: 10
      }
    ],
    journeystarts: ["Glasgow Airport", "Glasgow Anniesland", "Glasgow Buchanan Bus Station", "Glasgow Cathedral Steet", "ect...."],
    journeydestinations: ["Inverness Montague Road", "Inverness Tomnahurich", "Inverary", "Inveraray Brae", "ect...."],
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
 
  },
  getters: {

  },
  mutations: {
    updateSelectedJourneyType(state, selectedJourneyType) {
      state.selectedJourneyType = selectedJourneyType;
    },

    updateSelectedLeavingDate(state, selectedReturnDate) {
      state.selectedReturnDate = selectedReturnDate;
    },

    updateSelectedReturnDate(state, selectedReturnDate) {
      state.selectedReturnDate = selectedReturnDate;
    },

    updatePassengerTypes(state, updatePassengerTypes) {
      state.updatePassengerTypes = updatePassengerTypes.filter((x) => x.count >= 1);
    },

    updateJourneyStart(state, searchJourneysOut) {
      state.searchJourneysOut = searchJourneysOut;
    },

    updateJourneyDestination(state, searchJourneysArrive) {
      state.searchJourneysArrive = searchJourneysArrive;
    }
  },


});