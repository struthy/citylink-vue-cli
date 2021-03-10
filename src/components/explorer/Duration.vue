<template>
  <div class="datepicker__decoration datepicker__decoration--50">
    <label class="journey-type__label">Duration</label>
    <select class="journey-type__select" v-model="selectedDuration">
      <option
        v-for="(duration, i) in durations"
        :key="'duration' + i"
      >
        {{ duration }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    durations() {
      return this.$store.state.durations;
    },

    selectedDuration: {
      get() {
        return this.$store.state.selectedDuration;
      },
      set(value) {
        this.$store.commit("updateSelectedDurations", value);
      }
    }
  }
};
</script>
