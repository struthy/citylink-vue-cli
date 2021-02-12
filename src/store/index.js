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
        type: "Adult",
        count: 0
      },
      {
        type: "Child",
        count: 0
      },
      {
        type: "60+ / Disabled NEC",
        count: 0
      },
      {
        type: "Student",
        count: 0
      },
      {
        type: "Young Scot 16-18 years",
        count: 0
      },
      {
        type: "Young Scot 19-25 years",
        count: 0
      },
      {
        type: "GCU Studentult",
        count: 0
      },
      {
        type: "Comp",
        count: 0
      }
    ],

    selectedJourneyType: "single / return",
    selectedDate: new Date().toISOString().slice(0, 10),
    selectedPassengerCount: [0, 0, 0, 0, 0, 0, 0, 0],
    selectedPassengerType: []

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

    updateSelectedPassengerCount(state, selectedPassengerCount) {
      state.selectedPassengerCount = selectedPassengerCount;
    },

    addSelectedPassengerCount(state, selectedPassengerCount) {
      state.selectedPassengerCount = selectedPassengerCount;
    },

    updatePassengerTypes(state, selectedPassengerType) {
      state.selectedPassengerType = selectedPassengerType;
    },

    dummy: state => {
      state.passengertypes.forEach((passengertype) => {
        passengertype.count++;
      });
    }
  }
});
