<template>
  <div id="hero">
    <icon name="smallCross" class="smallCross"></icon>
    <icon name="starBlack" class="starBlack"></icon>
    <img :src="`${photos.img__1}`" alt="" class="img__1" />
    <img :src="`${photos.img__2}`" alt="" class="img__2" />
    <main>
      <section class="container main__content">
        <section class="section__1">
          <div
            class="heading_text"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1 data-aos="fade-down" data-aos-duration="1500">
              Access to quality
            </h1>
            <h2>Primary health care</h2>
            <p>
              Consult with a doctor in your community PHC and get unlimited
              access to your medical record on the go.
            </p>
            <a href="#" data-aos="fade-down" data-aos-duration="1700"
              >Prompt.Accessible.Free</a
            >
          </div>

          <div
            class="section__2"
            data-aos="zoom-out"
            data-aos-anchor=".anchor"
            data-aos-duration="1000"
          >
            <button class="btn btn-md">
              <icon name="monitor" class="icon"></icon>
              Talk to a doctor
            </button>
            <button class="btn btn-md">
              <icon name="add" class="icon"></icon>
              Emergency
            </button>
          </div>

          <div
            class="section__3"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <div class="section__3__img">
              <icon name="halfborder" class="halfborder"></icon>
              <span></span><img :src="`${photos.img__3}`" alt="" />
            </div>

            <div
              class="section__3__text"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="500"
              data-aos-offset="0"
            >
              <p>Preventing the spread of Malaria.</p>
              <p><b>Read more on preventing malaria</b></p>
            </div>
          </div>
        </section>

        <section class="section__two ">
          <icon
            name="starSmall"
            class="starSmall"
            data-aos="fade"
            data-aos-duration="1700"
          ></icon>
          <icon
            name="xmCross"
            class="xmCross"
            data-aos="fade"
            data-aos-duration="1700"
          ></icon>
          <icon
            name="smCross"
            class="smCross"
            data-aos="fade"
            data-aos-duration="1700"
          ></icon>
          <icon
            name="cupid"
            class="cupid"
            data-aos="fade"
            data-aos-duration="1700"
          ></icon>
          <icon
            name="smCupid"
            class="smCupid"
            data-aos="fade"
            data-aos-duration="1700"
          ></icon>
          <icon
            name="circle"
            class="circle"
            data-aos="fade"
            data-aos-duration="1700"
          ></icon>
          <icon
            name="mStar"
            class="mStar"
            data-aos="fade"
            data-aos-duration="1700"
          ></icon>
          <img
            :src="`${photos.img__4}`"
            alt=""
            srcset=""
            class="img"
            data-aos="fade-zoom-out"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="0"
          />
          <slides data-aos="fade" />
        </section>
      </section>
    </main>
    <div class="text-center readMore" data-aos="fade" data-aos-duration="2000">
      <a href="#" v-scroll-to="'#StorySection'">
        <icon name="readMore" class="icon"></icon>
        Read More
      </a>
    </div>
  </div>
</template>

<script>
import slides from "@/components/slides";
let photos = {
  img__1: require("@/assets/3461682-min.png"),
  img__2: require("@/assets/Mask Group 28.png"),
  img__3: require("@/assets/Mask Group 2@2x.png"),
  img__4: require("@/assets/OBJECTS.png")
};
export default {
  data: function() {
    return {
      img__1: true,
      img__2: true,
      img__3: true,
      img__4: true
    };
  },
  computed: {
    photos() {
      return photos;
    }
  },

  components: {
    slides
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

p {
  margin-bottom: 0rem;
}

#hero {
  margin-bottom: 18rem;
}

.smallCross {
  display: none;
}
.starBlack {
  display: none;
}

.img__1 {
  display: none;
}

.img__2 {
  display: none;
}
.readMore a {
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #fba91d;
  opacity: 1;
  text-decoration: none;
}

main {
  max-width: 100%;
  height: 100%;
  position: relative;
  margin: 5rem 0rem 2rem 0rem;
  .section__1 {
    width: 100%;
    height: 100%;
    .heading_text {
      h1 {
        @include text__lg();
      }

      h2 {
        @include text__lg__bold();
        margin-bottom: 1.875rem;
      }

      p {
        @include text__xm();
        margin-bottom: 0.5rem;
      }
      a {
        @include text__sm__bold();
        font-weight: 800;
      }
    }

    .section__2 {
      margin-top: 4rem;
      margin-bottom: 4rem;
      .btn-md {
        @include btn__xl();
        padding: 0rem 1rem;
        margin-bottom: 1.5rem;
        text-align: center;
        align-items: center;
        display: flex;
        color: #cccccc;
        font-size: 1rem;
        // opacity: 0.8;
        .icon {
          width: 1.875em;
          height: 1.875em;
          background: $btnColor;
          border-radius: 3.125rem;
          padding: 0.26rem;
          margin-right: 0.813rem;
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
          top: 0.19rem;
        }
        span {
          display: block;
          width: 3.125em;
          height: 3.125em;
          background: $btnColor;
          border-radius: 3.125rem;
          position: relative;
          top: 1.4rem;
          right: 2rem;
        }
        img {
          width: 4em;
          height: 4em;
          z-index: 999;
          vertical-align: middle;
          position: relative;
          top: 0.5rem;
          right: 5.5rem;
        }
      }
      .section__3__text {
        position: relative;
        right: 4.6rem;
      }
    }
  }

  .section__two {
    width: 100%;
    height: 100%;
    margin-top: 6rem;
    overflow: hidden;
    .img {
      width: 23.75em;
      height: 22.125em;
      margin-bottom: 2rem;
    }
    .img__2 {
      display: none;
    }
    .smallCross {
      display: none;
    }
    .starBlack {
      display: none;
    }
    .starSmall {
      display: none;
    }
    .starSmall {
      display: none;
    }
    .xmCross {
      display: none;
    }
    .smCross {
      display: none;
    }
    .cupid {
      display: none;
    }
    .smCupid {
      display: none;
    }
    .circle {
      display: none;
    }
    .mStar {
      display: none;
    }
  }
}
// small mobile
@include mediaxm() {
  main {
    .section__3 {
      width: 100%;
      display: block !important;
      position: relative;
      // align-items: center;
      .section__3__text {
        position: absolute !important;
        top: 1rem;
        right: 0.5rem !important;
      }
    }
  }
}

// mobile
@include mediaSm() {
  main {
    padding: 0rem 0rem;
    .heading_text {
      p {
        width: 70%;
      }
    }

    .section__2 {
      display: flex;
      .btn-md {
        margin-right: 1rem;
      }
    }

    .section__3 {
      width: 100%;
      display: block !important;
      position: relative;
      // align-items: center;
      .section__3__text {
        position: absolute !important;
        top: 1rem;
        right: 0.5rem !important;
      }
    }

    .section__two {
      margin: 6rem 0rem 0rem 0rem;
      .img {
        margin: 0rem 1.5rem 2rem 1.5rem;
      }
    }
  }
}

// mini tablet
@include mediaMd() {
  main {
    padding: 0rem 2rem;
    .heading_text {
      p {
        width: 70%;
      }
    }

    .section__2 {
      display: flex;
      .btn-md {
        margin-right: 1rem;
      }
    }

    .section__two {
      margin: 6rem 0rem 0rem 0rem;
      .img {
        margin: 0rem 3rem 2rem 3rem;
      }
    }
  }
}

// tablet
@include mediaLg() {
  main {
    padding: 0rem 5rem;
    .heading_text {
      p {
        width: 70%;
      }
    }

    .section__2 {
      display: flex;
      .btn-md {
        margin-right: 1rem;
      }
    }

    .section__two {
      margin: 6rem 5rem 0rem 5rem;
      .img {
        margin: 0rem 3rem 2rem 3rem;
      }
    }
  }
}

// mini desktop
@include altmediaLg() {
  main {
    .main__content {
      display: grid;
      grid-template-columns: 45% 55%;
      .section__1 {
        .heading_text {
          p {
            width: 70%;
          }
        }

        .section__2 {
          margin-top: 4rem;
          margin-bottom: 4rem;
          display: flex;
          .btn-md {
            font-size: 1rem;
            margin-right: 0.7rem;
          }
        }
      }

      .section__two {
        width: 100%;
        height: 100%;
        margin-top: 0rem;
        overflow: hidden;
        padding: 0rem 0rem 0rem 2rem;
        position: relative;
        background-image: url("/assets/Mask Group 28.png");
        // .img__2 {
        //   display: block;
        //   position: absolute;
        //   content: "";
        //   top: -6.5rem;
        //   bottom: 0px;
        //   right: 0rem;
        //   z-index: -1;
        //   min-width: 550px;
        //   max-width: 580px;
        //   height: 900px;
        // }

        .img {
          margin-left: 2.5rem;
        }
      }
    }
  }
}

// desktop
@include mediaXl() {
  .img__2 {
    display: block;
    position: absolute;
    content: "";
    top: -2rem;
    bottom: 0px;
    right: 0rem;
    z-index: -1;
    max-width: 50em;
    height: 60.5em;
  }
  .img__1 {
    width: 650px;
    height: 650px;
    display: block;
    position: absolute;
    top: 9rem;
    left: -33rem;
  }

  .smallCross {
    display: block;
    position: absolute;
    content: "";
    top: 9.5rem;
    left: 2rem;
  }
  .starBlack {
    display: block;
    position: absolute;
    content: "";
    top: 20.5rem;
    left: 2.5rem;
  }
  main {
    .main__content {
      display: grid;
      grid-template-columns: 45% 55%;
      .section__1 {
        .heading_text {
          p {
            width: 70%;
          }
        }

        .section__2 {
          margin-top: 4rem;
          margin-bottom: 4rem;
          display: flex;
          .btn-md {
            font-size: 1rem;
            margin-right: 1rem;
          }
        }
      }

      .section__two {
        position: relative;
        overflow: hidden;
        margin-top: 0rem;

        .img {
          margin-left: 3rem;
        }
        .starSmall {
          display: block;
          position: absolute;
          top: 15rem;
          left: 0rem;
        }
        .xmCross {
          display: block;
          position: absolute;
          top: 8rem;
          left: 0rem;
        }
        .smCross {
          display: block;
          position: absolute;
          top: 12.5rem;
          left: 2rem;
        }
        .cupid {
          display: block;
          position: absolute;
          top: 0rem;
          right: 0rem;
        }
        .smCupid {
          display: block;
          position: absolute;
          top: 21rem;
          right: 0rem;
        }
        .circle {
          display: block;
          position: absolute;
          top: 7.5rem;
          left: 4rem;
        }
        .mStar {
          display: block;
          position: absolute;
          top: 5rem;
          left: 3.5rem;
        }
      }
    }
  }
}
</style>
