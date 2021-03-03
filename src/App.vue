<template>
  <div id="app" class="widget">
    <single-journey></single-journey>
  </div>
</template>

<script>
import SingleJourney from "./components/SingleJourney.vue";

export default {
  name: "app",
  components: {
    "single-journey": SingleJourney,
  },
};
</script>
