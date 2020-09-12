<template>
  <div class="team__section">
    <div class="container">
      <div class="team__title">
        <h1>{{ title }}</h1>
        <p>{{ msg }}</p>
      </div>
    </div>
    <div class="team__content">
      <cards />
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamSection",

  props: {
    title: String,
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";
.team__section {
  width: 100%;
  height: 100%;
  h1 {
    @include text__lg__bold();
    text-align: center;
  }

  p {
    @include text__sm();
    text-align: center;
  }
}
</style>
