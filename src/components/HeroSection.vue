<template>
  <div id="hero">
    <main>
      <img :src="`${photos.img__1}`" alt="" class="img__1" />
      <icon name="sideBg" class="sideBg"></icon>
      <section class="container main__content">
        <section class="section__1">
          <div class="heading_text">
            <h1>Access to quality</h1>
            <h2>Primary health care</h2>
            <p>
              Consult with a doctor in your community PHC and get unlimited
              access to your medical record on the go.
            </p>
            <a href="#">Prompt.Accessible.Free</a>
          </div>

          <div class="section__2">
            <button class="btn btn-md">
              <icon name="monitor" class="icon"></icon>
              Talk to a doctor
            </button>
            <button class="btn btn-md">
              <icon name="add" class="icon"></icon>
              Emergency
            </button>
          </div>

          <div class="section__3">
            <div class="section__3__img">
              <icon name="halfborder" class="halfborder"></icon>
              <span></span><img :src="`${photos.img__3}`" alt="" />
            </div>

            <div class="section__3__text">
              <p>Preventing the spread of Malaria.</p>
              <p><b>Read more on preventing malaria</b></p>
            </div>
          </div>
        </section>

        <section class="section__two ">
          <img :src="`${photos.img__4}`" alt="" srcset="" />
        </section>
      </section>

      <slider />
    </main>
  </div>
</template>

<script>
import slider from "@/components/slider";
let photos = {
  img__1: require("@/assets/3461682-min.png"),
  img__2: require("@/assets/Mask Group 1@2x.png"),
  img__3: require("@/assets/Mask Group 2@2x.png"),
  img__4: require("@/assets/OBJECTS.png"),
};
export default {
  data: function() {
    return {
      img__1: true,
      img__3: true,
      img__4: true,
    };
  },
  computed: {
    photos() {
      return photos;
    },
  },

  components: {
    slider
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

p {
  margin-bottom: 0rem;
}
main {
  max-width: 100%;
  height: 100%;
  position: relative;
  .img__1 {
    width: 30px;
    height: 30px;
  }
  .sideBg {
    display: none;
  }
  .section__1 {
    width: 100%;
    height: 100%;
    padding: 2rem 0rem;
    .heading_text {
      h1 {
        @include text__lg();
      }

      h2 {
        @include text__lg__bold();
        margin-bottom: 30px;
      }

      p {
        @include text__md();
        margin-bottom: 0.5rem;
      }
      a {
        @include text__sm__bold();
        font-weight: 800;
      }
    }

    .section__2 {
      margin-top: 4rem;
      margin-bottom: 6rem;
      .btn-md {
        @include btn__xl();
        padding: 0rem 1rem;
        margin-bottom: 1.5rem;
        text-align: center;
        align-items: center;
        display: flex;
        color: #fff;
        font-size: 1.2rem;
        .icon {
          width: 35px;
          height: 35px;
          background: $btnColor;
          border-radius: 50px;
          padding: 4px;
          margin-right: 30px;
        }
      }
    }

    .section__3 {
      display: flex;
      align-items: center;
      .section__3__img {
        display: flex;
        .halfborder {
          position: relative;
          top: -3px;
        }
        span {
          display: block;
          width: 60px;
          height: 60px;
          background: $btnColor;
          border-radius: 50px;
          position: relative;
          top: 11px;
          right: 35px;
        }
        img {
          width: 70px;
          height: 71px;
          z-index: 999;
          vertical-align: middle;
          position: relative;
          right: 95px;
        }
      }
      .section__3__text {
        position: relative;
        right: 70px;
      }
    }
  }

  .section__two {
    width: 100%;
    height: 100%;
    margin-top: 6rem;
  }
}

@include altmediaLg() {
  .main__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .section__1 {
      .heading_text {
        p {
          @include text__md();
          margin-bottom: 0.5rem;
          width: 90%;
        }
      }

      .section__2 {
        margin-top: 4rem;
        margin-bottom: 6rem;
        display: flex;
        .btn-md {
          font-size: 1rem;
          margin-right: 1rem;
        }
      }
    }

    .section__two {
      width: 100%;
      height: 100%;
    }
  }
}

// desktop

@include mediaXl() {
  .main__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .section__1 {
      .heading_text {
        p {
          @include text__md();
          margin-bottom: 0.5rem;
          width: 90%;
        }
      }

      .section__2 {
        margin-top: 4rem;
        margin-bottom: 6rem;
        display: flex;
        .btn-md {
          font-size: 1rem;
          margin-right: 1rem;
        }
      }
    }

    .section__two {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
