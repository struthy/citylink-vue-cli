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
        <li v-for="(a, i) in selectedJourneyroutes" :key="i">
          {{ a.route }}
        </li>
      </ul>

      <ul class="dropdown__types" v-if="isOpen">
        <li
          class="dropdown__li"
          v-for="(journeyroute, i) in journeyroutes"
          :key="i"
        >
            <div class="dropdown__route-container" @click="getRoute(i, $event.target.innertext)">
                <div class="dropdown__route-detail">
                    <span>{{ journeyroute.route }}</span>
                </div>
                <div class="dropdown__route-detail">
                    <span>{{ journeyroute.routestart }}</span>
                </div>
                <div class="dropdown__route-detail">
                    <span>{{ journeyroute.routeend }}</span>
                </div>
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

    selectedJourneyroutes: {
      get() {
        return this.$store.state.selectedJourneyroute;
      },
      set(value) {
        this.$store.commit("selectedJourneyroute", value);
      }
    },

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

    getRoute(i) {
        const newJourneyRoutes = [...this.journeyroutes];
        newJourneyRoutes[i]
        this.$store.commit("updateSelectedJourneyRoutes", newJourneyRoutes);
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
