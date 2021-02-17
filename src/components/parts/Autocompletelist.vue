<template>
  <div>
    <div class="" v-if="fetchedData.length > 0">
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="checkSelected(index)"
          v-for="(dt, index) in fetchedData"
          @mousemove="mouseHover(index)"
          @mousedown="selectMe(index)"
          :key="index + 'a'"
        >
          {{ dt }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    journeystarts() {
      return this.$store.state.journeystarts;
    },
  },
  props: ["fetchedData"],
  methods: {
    selectMe: function(idx) {
      this.$store.dispatch("optionPicked", this.fetchedData[idx]);
    },
    checkSelected: function(idx) {
      return {
        selected: idx == this.$store.state.focusIndex,
      };
    },
    mouseHover: function(idx) {
      this.$store.dispatch("setFocus", idx);
    },


  },


  const dummysearch = function(seacrhText){
      var ListData = ["Louise", "Albert","Marion","Brandon", "Patricia", "Alan", "Barbara", "Roger", "Rachel", "Joseph", "Mary", "Kathy", "Paul", "Craig", "Jack", "Russell", "Donald", "Daniel", "Alanis", "Wanda"]
      return ListData.filter(function(item){
        return item.toLowerCase().indexOf(seacrhText.toLowerCase()) > -1;
      })
}
};
</script>
