<template>
  <div class="grid-level-2">
    <div
      class="widget__options widget__options--level-1"
      v-if="selectedJourneyType == 'Redeem your pass'"
      id="single-journey"
    >
      <label
        >Explorer pass number e.g. EXP123456789CA
        <span v-if="nonValidTicket" style="color: #fff; font-size: 12px;"
          >please enter a valid pass number
        </span></label
      >
      <input
        type="text"
        placeholder="EXP123456789CA"
        v-model="passNumberInput"
      />
      <button @click.prevent="handleRedeemForm">Find my Pass</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      nonValidTicket: false
    };
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

    passNumberInput: {
      get() {
        return this.$store.state.passNumberInput;
      },
      set(value) {
        this.$store.commit("updatePassInput", value);
      }
    },

    passnumbers: {
      get() {
        return this.$store.state.passNumbers;
      },
      set(value) {
        this.$store.commit("updatePassNumbers", value);
      }
    },

    showRedeemForm: {
      get() {
        return this.$store.state.showRedeemForm;
      },
      set(value) {
        this.$store.commit("updateshowRedeemForm", value);
      }
    }
  },

  methods: {
    handleRedeemForm() {
      if (
        this.$store.state.passNumbers.find(
          x => x.pass === this.$store.state.selectedpassNumbers
        )
      ) {
        this.$store.commit("updateshowRedeemForm");
        this.nonValidTicket = false;
      } else {
        this.nonValidTicket = true;
        console.log("non valid ticket");
      }
    }
  }
};
</script>

<style scoped></style>
