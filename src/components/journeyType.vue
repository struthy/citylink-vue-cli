<template>
  <div class="widget__select">
    <label class="widget__select--label">Type</label>
    <select v-model="selectedJourneyType">
      <option
        v-for="(journeytype, i) in journeytypes"
        :key="'journeytypes' + i"
      >
        {{ journeytype.type }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },

  computed: {
    journeytypes() {
      return this.$store.state.journeytypes;
    },

    selectedJourneyType: {
      get() {
        return this.$store.state.selectedJourneyType;
      },
      set(value) {
        this.$store.commit("updateSelectedJourneyType", value);
      },
    },
  },

  methods: {},
};
</script>

<style scoped>
.widget__select {
}

.widget__select--label {
}
</style>
