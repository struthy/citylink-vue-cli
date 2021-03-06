<template>
  <div>
    <div class="widget__select">
      <div class="autocomplete">
        <h3>{{ formLabel }}</h3>
        <input
          type="text"
          @click="onChange"
          @input="onChange"
          v-model="searchAutocomplete"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp"
          @keydown.enter.prevent="onEnter"
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
  </div>
</template>
<script>
export default {
  props: {
    formLabel: String,
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      isOpen: false,
      results: [],
      isLoading: false,
      arrowCounter: 0
    };
  },

  computed: {
    searchAutocomplete: {
      get() {
        return this.$store.state.searchAutocomplete;
      },
      set(value) {
        this.$store.commit("updateJourneyStart", value);
      }
    }
  },

  methods: {
    onChange() {
      // Let's warn the parent that a change was made
      this.$emit("input", this.searchAutocomplete);

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
          item.toLowerCase().indexOf(this.searchAutocomplete.toLowerCase()) > -1
        );
      });
    },
    setResult(result) {
      this.searchAutocomplete = result;
      this.isOpen = false;
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.searchAutocomplete = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    }
  },
  watch: {
    items: function(val, oldValue) {
      // actually compare them
      if (val.length !== oldValue.length) {
        this.results = val;
        this.isLoading = false;
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

<style lang="scss">
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid $blue;
  height: 120px;
  overflow: auto;
  width: 100%;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: $blue;
  color: $blue;
}
</style>
