<template>
  <div class="home">
    <headerSection id="headerSection" />
    <DonateHero />
    <FooterSection id="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import headerSection from "@/components/headerSection";
import DonateHero from "@/components/DonateHero";
import FooterSection from "@/components/FooterSection";

export default {
  name: "Home",
  components: {
    headerSection,
    DonateHero,
    FooterSection
  }
};
</script>
