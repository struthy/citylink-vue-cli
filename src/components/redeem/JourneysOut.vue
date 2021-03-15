<template>
  <div class="autocomplete">
    <div class="autocomplete__decoration">
      <label class="autocomplete__label">{{ formLabel }}</label>
      <input
        class="autocomplete__input"
        type="text"
        @click="onChange"
        @input="onChange"
        v-model="searchJourneysOut"
        @keydown.down="onArrowDown"
        @keydown.up="onArrowUp"
        @keydown.enter.prevent="onEnter"
        placeholder="seach..."
      />
      <ul
        id="autocomplete-results"
        v-show="isOpen"
        class="autocomplete-results"
      >
        <li class="loading" v-if="isLoading">
          Loading results...
        </li>
        <li
          v-else
          v-for="(result, i) in results"
          :key="i"
          @click="setResult(result)"
          class="autocomplete-result"
          :class="{ 'is-active': i === arrowCounter }"
        >
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import autocompleteMixin from "../../mixins/autocompleteMixin";
export default {
  mixins: [autocompleteMixin],

  computed: {
    journeystarts() {
      return this.$store.state.journeystarts;
    },

    journeydestinations() {
      return this.$store.state.journeydestinations;
    },
    searchJourneysOut: {
      get() {
        return this.$store.state.searchJourneysOut;
      },
      set(value) {
        this.$store.commit("updateJourneyStart", value);
      }
    }
  },

  methods: {
    onChange() {
      // Let's warn the parent that a change was made
      this.$emit("input", this.searchJourneysOut);
      this.$store.commit("updateShowSecondBar");

      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isLoading = true;
      } else {
        // Let's  our flat array
        this.filterResults();
        this.isOpen = true;
      }
    },

    filterResults() {
      // first uncapitalize all the things
      this.results = this.items.filter(item => {
        return (
          item.toLowerCase().indexOf(this.searchJourneysOut.toLowerCase()) > -1
        );
      });
    },
    setResult(result) {
      this.searchJourneysOut = result;
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
.autocomplete {
}
</style>
