<template>
  <div class="widget__find-tickets widget__options--level-3">
    <div class="widget__level-3-center">
      <p>Find Tickets Text</p>
      <button type="submit" class="widget__find-tickets-btn">Submit</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    TicketsVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},

  methods: {}
};
</script>
