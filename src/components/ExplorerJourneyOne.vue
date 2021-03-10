<template>
  <div class="grid-level-2">
    <div
      class="widget__options widget__options--level-1"
      v-if="selectedJourneyType == 'Explorer passes'"
      id="explorer-journey"
    >
      <h3>Unlimited travel over a period of your choice</h3>
      <a href="#">Learn More</a>
    </div>
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

<style scoped></style>
