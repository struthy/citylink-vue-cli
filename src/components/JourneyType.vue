<template>
  <div class="grid-level-1 flex grid-level-1__journey-type">
    <div class="journey-type">
      <div class="journey-type__decoration">
        <label class="journey-type__label">Type</label>
        <!-- <button @click.prevent="actionReset"> sda</button> -->
        <select class="journey-type__select" v-model="selectedJourneyType">
          <option
            v-for="(journeytype, i) in journeytypes"
            :key="'journeytypes' + i"
          >
            {{ journeytype.type }}
          </option>
        </select>
      </div>
    </div>
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
        this.$store.dispatch("clearState"); // this is a slight hack - prob needs done properlly uses https://github.com/huybuidac/vuex-extensions
        this.$store.commit("updateSelectedJourneyType", value);
      }
    }
  }
};
</script>
