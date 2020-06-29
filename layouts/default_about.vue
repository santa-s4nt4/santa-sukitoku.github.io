<template>
  <div>
    <TheHeader />
    <main class="contents">
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/common/TheHeaderAbout";
import TheFooter from "~/components/common/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  },
  mounted() {
    Typekit.load({ async: true });
  }
};
</script>