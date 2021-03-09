<template>
  <div class="grid-level-3" v-if="selectedJourneyType == 'Multi journey'">
    <div class="widget__options widget__options--level-2">
      <div class="widget__level-2-center">
        
        <journey-pass></journey-pass>

        <div class="passengers"></div>
      </div>
    </div>
  </div>
</template>

<script>
import JourneyPass from "./multi/JourneyPass.vue";
export default {
  components: {
    "journey-pass": JourneyPass,
  },

  computed: {
    selectedJourneyType: {
      get() {
        return this.$store.state.selectedJourneyType;
      },
      set(value) {
        this.$store.commit("updateSelectedJourneyType", value);
      }
    },
  }
};
</script>
