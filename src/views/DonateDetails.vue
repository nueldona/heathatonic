<template>
  <div class="home">
    <headerSection id="headerSection" />
    <DonateDetails />
    <FooterSection id="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import headerSection from "@/components/headerSection";
import DonateDetails from "@/components/DonateDetails";
import FooterSection from "@/components/FooterSection";

export default {
  name: "Home",
  components: {
    headerSection,
    DonateDetails,
    FooterSection
  }
};
</script>
