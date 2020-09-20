<template>
  <div class="home">
    <headerSection />
    <StorySection id="StorySection" msg="Our Story" />
    <TeamSection
      id="TeamSection"
      title="Our team"
      msg="A fondation made with innovative minds. We are expert builders"
    />
    <ValueCard id="valueCard" />
    <ContactSection id="contact" />
    <FooterSection id="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import headerSection from "@/components/headerSection";
import StorySection from "@/components/StorySection";
import TeamSection from "@/components/TeamSection";
import ValueCard from "@/components/ValueCard";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default {
  name: "Home",
  components: {
    headerSection,
    StorySection,
    TeamSection,
    ValueCard,
    ContactSection,
    FooterSection
  },
};
</script>
