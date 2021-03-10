<template>
  <div class="dropdown" id="passenger-type">
    <div class="dropdown__decoration">
      <label class="dropdown__label">Route</label>
      <ul
        v-show="selectedJourneyroutes"
        class="dropdown__selected"
        @click="isOpen = true"
        @input="isOpen = true"
      >
        <li>{{ selectedJourneyroutesText }}</li>
      </ul>

      <ul class="dropdown__types dropdown__types--z1" v-if="isOpen">
        <li
          class="dropdown__li"
          v-for="(journeyroute, i) in journeyroutes"
          :key="i"
        >
          <div
            class="dropdown__route-container"
            @click="getRoute(i, $event.target.innerText)"
          >
            <span>{{ journeyroute.route }}</span>
            <span>{{ journeyroute.routestart }}</span>
            <span>{{ journeyroute.routeend }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    journeyroutes: {
      get() {
        return this.$store.state.journeyroutes;
      },
      set(value) {
        this.$store.commit("selectedJourneyroute", value);
      }
    },

    journeyroutesText: {
      get() {
        return this.$store.state.journeyroutestext;
      },
      set(value) {
        this.$store.commit("selectedJourneyrouteText", value);
      }
    },

    selectedJourneyroutes: {
      get() {
        return this.$store.state.selectedJourneyroute;
      },
      set(value) {
        this.$store.commit("selectedJourneyroute", value);
      }
    },

    selectedJourneyroutesText: {
      get() {
        return this.$store.state.selectedJourneyrouteText;
      },
      set(value) {
        this.$store.commit("selectedJourneyroute", value);
      }
    }
  },

  methods: {
    onChange() {
      this.isOpen = !this.isOpen;
    },

    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
      }
    },

    getRoute(i, textContent) {
      this.isOpen = false;
      const newJourneyRoutes = [...this.journeyroutes];
      let newJourneyRouteText = this.journeyroutestext;
      newJourneyRoutes[i];
      newJourneyRouteText = textContent.replace(/\n/g, " ");
      console.log(newJourneyRouteText);
      this.$store.commit("updateSelectedJourneyRoutes", newJourneyRoutes);
      this.$store.commit(
        "updateSelectedJourneyRoutesText",
        newJourneyRouteText
      );
    }
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>
