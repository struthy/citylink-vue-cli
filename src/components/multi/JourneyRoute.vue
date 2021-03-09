<template>
  <div class="passengers" id="passenger-type">
    <div class="passengers__decoration">
      <label class="passengers__label">Route</label>
      <ul
        v-show="selectedJourneyroutes"
        class="passengers__selected"
        @click="isOpen = true"
        @input="isOpen = true"
      >
        <li v-for="(a, i) in selectedJourneyroutes" :key="i">
          {{ a.typePassenger }} x {{ a.routestart }}
        </li>
      </ul>

      <ul class="passenger__types" v-if="isOpen">
        <li
          class="passenger"
          v-for="(journeyroute, i) in journeyroutes"
          :key="i"
        >
          <div class="passenger-count__container">
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
        this.$store.commit("selectedJourneyroutes", value);
      }
    },

    selectedJourneyroutes: {
      get() {
        return this.$store.state.selectedJourneyroutes;
      },
      set(value) {
        this.$store.commit("selectedJourneyroutes", value);
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
