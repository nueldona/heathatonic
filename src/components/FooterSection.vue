<template>
  <article>
    <div class="text-center backto" data-aos="fade" data-aos-duration="1500">
      <a href="#" v-scroll-to="'#headerSection'">
        <icon name="backto" class="icon"></icon>
        Back to top
      </a>
    </div>
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
          <span class="mr-2">&#169;</span>Copyright 2020, Energol Technology
          Hub. All right reserved
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";
.backto a {
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #19204dbf;
  opacity: 1;
  text-decoration: none;

  .icon {
    margin-bottom: 0.6rem;
  }
}

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
      margin: 1.5rem 0rem;
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

// small mobile
@include mediaxm() {
  .footer {
    margin-top: 3rem;
    padding: 3.5rem 3.5rem;
    p {
      color: #ffffff;
      font-size: 0.9rem;
    }
  }
}

// mobile
@include mediaSm() {
  .footer {
    margin-top: 3rem;
  }
}
</style>
