<template>
  <div>
    <input
      type="text"
      id="acinput"
      name="acinput"
      @keyup="fetchData()"
      @keydown="setFocus"
      @focus="inputFocus(true)"
      @blur="inputFocus(false)"
      v-model="inputtext"
    />
    <li :fetchedData="acdata"></li>
  </div>
</template>
<script>
export default {
  props: ["minInput", "urlDataSource"],
  computed: {
    acdata() {
      if (this.isFocus) {
        return this.$store.state.journeystarts;
      } else {
        return [];
      }
    },
    inputtext: {
      get() {
        return this.$store.state.inputData;
      },
      set(value) {
        this.$store.dispatch("changeInput", value);
      },
    },
    isFocus() {
      return this.$store.state.inputFocus;
    },
  },
  data: function() {
    return {};
  },
  methods: {
    fetchData: function() {
      if (this.inputtext.length >= this.minInput && this.isFocus) {
        this.$store.dispatch("searchData", this.inputtext);
      } else {
        this.$store.dispatch("resetData");
      }
    },
    setFocus: function(e) {
      var keycode = e.keyCode;
      var listLn = this.acdata.length;

      if (listLn == 0) return;
      switch (keycode) {
        case 40:
          this.$store.dispatch("focusChange", 1);
          break;
        case 38:
          this.$store.dispatch("focusChange", -1);
          break;
        case 13:
          this.$store.dispatch(
            "optionPicked",
            this.acdata[this.$store.state.focusIndex]
          );
          e.target.blur();
          //this.$store.dispatch('inputFocus',false);
          break;
        case 27:
          e.target.blur();
          this.$store.dispatch("resetData");
          break;
      }
    },
    inputFocus: function(val) {
      this.$store.dispatch("inputFocus", val);
    },
  },
};
</script>

<style scoped></style>
