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
    journeystarts: [
      {
        leavingFrom: "Glasgow Airport"
      },
      {
        leavingFrom: "Glasgow Anniesland"
      },
      {
        leavingFrom: "Glasgow Buchanan Bus Station"
      },
      {
        leavingFrom: "Glasgow Cathedral Steet"
      },
      {
        leavingFrom: "ect...."
      }
    ],
    journeydestinations: [
      {
        arrivingAt: "Inverness Montague Road"
      },
      {
        arrivingAt: "Inverness Tomnahurich"
      },
      {
        arrivingAt: "Inverary"
      },
      {
        arrivingAt: "Inveraray Brae"
      },
      {
        arrivingAt: "ect...."
      }
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
    selectedDate: new Date().toISOString().slice(0, 10),
    displayedPassengerTypes: []

  },
  getters: {

  },
  mutations: {
    updateSelectedJourneyType(state, selectedJourneyType) {
      state.selectedJourneyType = selectedJourneyType;
    },

    updateSelectedDate(state, selectedDate) {
      state.selectedDate = selectedDate;
    },

    updatePassengerTypes(state, passengertypes) {
      state.passengertypes = passengertypes;
    },

    captureUpdatedPassengerTypes(state, updatePassengerTypes) {
      let filtered = state.updatePassengerTypes = updatePassengerTypes.filter(x => x.count >= 1);
      return filtered;
      // console.log(filtered)
    },

    displayedPassengerTypes(state, captureUpdatedPassengerTypes) {
      let display = state.captureUpdatedPassengerTypes = captureUpdatedPassengerTypes;
      console.log(display)
    }
  }
});