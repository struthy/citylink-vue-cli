<template>
  <div class="datepicker__decoration datepicker__decoration--50">
    <label class="journey-type__label">Duration</label>
    <select class="journey-type__select" v-model="selectedJourneyPass">
      <option
        v-for="(journeypass, i) in journeypasses"
        :key="'journeypass' + i"
      >
        {{ journeypass }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    journeypasses() {
      return this.$store.state.journeypasses;
    },

    selectedJourneyPass: {
      get() {
        return this.$store.state.selectedJourneyPass;
      },
      set(value) {
        this.$store.commit("updateSelectedJourneyPass", value);
      }
    }
  }
};
</script>
