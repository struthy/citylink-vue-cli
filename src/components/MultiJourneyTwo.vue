<template>
  <div class="grid-level-3" v-if="selectedJourneyType == 'Multi journey'">
    <h3>level Two of Multijourney</h3>
  </div>
</template>

<script>
export default {
  computed: {
    selectedJourneyType: {
      get() {
        return this.$store.state.selectedJourneyType;
      },
      set(value) {
        this.$store.commit("updateSelectedJourneyType", value);
      }
    }
  }
};
</script>
