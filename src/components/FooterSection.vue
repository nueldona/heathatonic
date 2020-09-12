<template>
  <div class="footer">
    <div class="wrapper">
      <icon name="brandicon" class="icon"></icon>
      <ul>
        <li>
          <i class="fab fa-facebook-f"></i>
        </li>
        <li><i class="fab fa-instagram"></i></li>
        <li><i class="fab fa-twitter"></i></li>
      </ul>
      <p>
        <span class="mr-2">&#169;</span>Copyright 2020, Energol Technology Hub.
        All right reserved
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";
.footer {
  width: 100%;
  height: 100%;
  margin-top: 1.2rem;
  padding: 3.5rem 5rem;
  background: #19204d 0% 0% no-repeat padding-box;
  .wrapper {
    text-align: center;
    ul {
      list-style-type: none;
      margin: 1rem 0rem;
      li {
        display: inline-block;
        color: #ffffff;
        margin-left: 2rem;
      }
    }
    p {
      color: #ffffff;
    }
  }
}
</style>
