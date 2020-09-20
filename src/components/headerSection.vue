<template>
  <div id="layout">
    <div id="header" class="header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="#"><icon name="logo"></icon></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <router-link
                tag="li"
                class="nav-item nav-link"
                class-active="active"
                to="/"
                exact
              >
                <img :src="`${photos.bg__img}`" alt="" srcset="" />
                Home</router-link
              >
              <router-link
                tag="li"
                class="nav-item nav-link"
                class-active="active"
                to="/About"
                exact
                ><img :src="`${photos.bg__img}`" alt="" srcset="" /> About
                us</router-link
              >
              <router-link
                tag="li"
                class="nav-item nav-link"
                class-active="active"
                to="/Contact"
                exact
                ><img :src="`${photos.bg__img}`" alt="" srcset="" />
                Contact</router-link
              >
              <router-link
                tag="li"
                class="nav-item nav-link"
                class-active="active"
                to="/Donate"
                exact
                ><img :src="`${photos.bg__img}`" alt="" srcset="" />
                Donate</router-link
              >
              <router-link
                tag="li"
                class="nav-item nav-link"
                class-active="active"
                to="/Health tips"
                exact
                ><img :src="`${photos.bg__img}`" alt="" srcset="" /> Health
                tips</router-link
              >
              <router-link
                tag="li"
                class="nav-item nav-link"
                class-active="active"
                to="/Forum"
                exact
                ><img :src="`${photos.bg__img}`" alt="" srcset="" />
                Forum</router-link
              >
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <a href="#" class="nav__button">Log in </a>
              <a href="#" class="nav__button__2">
                <span>Sign up</span>
                <a href="http://">registeration now</a>
              </a>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <HeroSection />
  </div>
</template>

<script>
import { vSwitch, vCase, vDefault } from "v-switch-case";
import HeroSection from "@/components/HeroSection";
let photos = {
  bg__img: require("@/assets/Mask Group 1@2x.png"),
  img__2: require("@/assets/Mask Group 28.png")
};
export default {
  components: {
    HeroSection
  },
  directives: {
    switch: vSwitch,
    case: vCase,
    default: vDefault
  },
  data: function() {
    return {
      bg__img: true,
      img__2: true
    };
  },
  computed: {
    photos() {
      return photos;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";
a {
  text-decoration: none;
}

.header {
  max-width: 100%;
  height: 100%;
  // background: #ffffff;
  // overflow: visible;

  nav {
    .navbar-brand {
      margin-right: 3rem;
    }
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    font-size: 0.9rem;
    position: relative;
  }
  .nav__button {
    @include btn__login();
    margin-right: 21px;
  }
  .nav__button__2 {
    @include btn__sign();
  }

  img {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 5px;
    left: 0px;
    display: none;
  }
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.router-link-active,
.navbar-nav .nav-link.router-link-exact-active {
  color: #19204d;
  position: relative;
  cursor: pointer;
  img {
    display: block;
  }
}

.hamburger-container {
  display: none;
}

.mobile-menu {
  display: none;
}

//
@include altmediaLg() {
  .navbar {
    padding: 0.5rem 0rem;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    font-size: 0.8rem !important;
  }
}

// desktop
@include mediaXl() {
  .navbar-expand-lg .navbar-nav .nav-link {
    font-size: 1rem !important;
  }
}
</style>
