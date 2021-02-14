<template>
  <div id="passenger-type">
    <input type="text" placeholder="select passengers" @click="onChange" />
    <ul>
      <li v-for="(passengertype, i) in passengertypes" :key="i">
        <span>{{ passengertype.typePassenger }}</span>

        <div class="passenger-count__container">
          <input
            type="number"
            min="0"
            :value="passengertypes[i].count"
            @input="updatePassangerType(i, $event.target.value)"
          />
        </div>
      </li>
    </ul>
    <button style="margin-top: 30px;">Done</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    passengertypes: {
      get() {
        return this.$store.state.passengertypes;
      },
      set(value) {
        this.$store.commit("updatePassengerTypes", value);
      },
    },
  },

  methods: {
    onChange() {
      this.isOpen = !this.isOpen;
    },

    updatePassangerType(i, value) {
      const newObject = [...this.passengertypes];
      console.log(newObject);
      newObject[i].count = parseInt(value); // value from input is always string
      // console.log(i, value);
      this.$store.commit("updatePassengerTypes", newObject);
      // or create a new mutation with (index, value) arguments
    },
  },
};
</script>

<style scoped></style>
