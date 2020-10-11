<template>
  <div id="layout">
    <section class="main" id="slide">
      <section class="header">
        <p>Donate today</p>
        <div class="nav d-flex flex-row">
          <p class="prev" @click="prev">&#10094; Prev</p>
          <p class="prev" @click="next">Next &#10095;</p>
        </div>
      </section>
      <carousel @next="next" @prev="prev" class="carousel">
        <carouselSlides
          v-for="(slide, index) in slides"
          v-bind:key="slide"
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"
        >
          <section class="card">
            <div class="row no-gutters">
              <div class="col-3">
                <img
                  :src="require('@/assets/' + slide.img)"
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-9">
                <div class="card-body">
                  <h5 class="card-title">{{ slide.title }}</h5>
                  <p class="card-text">
                    <small class="text-small">{{ slide.smallText }}</small>
                  </p>
                  <p class="card-text srt">
                    {{ slide.text }}
                  </p>
                  <button class="btn btn__xm">{{ slide.btn }}</button>
                </div>
              </div>
            </div>
          </section>
        </carouselSlides>
      </carousel>
    </section>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import carouselSlides from "@/components/carouselSlides";
export default {
  name: "slides",
  data() {
    return {
      slides: [
        {
          id: 1,
          img: "NoPath - Copy (14).png",
          title: "Dakwa Primary health center",
          smallText: "need",
          text: "Hospital beds",
          btn: "Donate"
        },
        {
          id: 2,
          img: "NoPath - Copy (14).png",
          title: "Dakwa Primary health center",
          smallText: "need",
          text: "Hospital beds",
          btn: "Donate"
        },
        {
          id: 3,
          img: "NoPath - Copy (14).png",
          title: "Dakwa Primary health center",
          smallText: "need",
          text: "Hospital beds",
          btn: "Donate"
        },
        {
          id: 4,
          img: "NoPath - Copy (14).png",
          title: "Dakwa Primary health center",
          smallText: "need",
          text: "Hospital beds",
          btn: "Donate"
        },
        {
          id: 5,
          img: "NoPath - Copy (14).png",
          title: "Dakwa Primary health center",
          smallText: "need",
          text: "Hospital beds",
          btn: "Donate"
        }
      ],
      visibleSlide: 1,
      direction: "left"
    };
  },

  components: {
    carousel,
    carouselSlides
  },

  computed: {
    slidesLenght() {
      return this.slides.lenght;
    }
  },

  methods: {
    next() {
      this.$emit("next");

      if (this.visibleSlide >= this.slidesLenght - 1) {
        this.visibleSlide = 1;
      } else {
        this.visibleSlide++;
      }
      this.direction = "left";
    },

    prev() {
      this.$emit("prev");

      if (this.visibleSlide <= 1) {
        this.visibleSlide = this.slidesLenght - 1;
      } else {
        this.visibleSlide--;
      }
      this.direction = "right";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

img {
  height: 110px;
  width: 110px;
  max-width: 100%;
}

.main {
  width: 480px;
  overflow: hidden;
  border: 2px dashed $btnColor;
  border-radius: 10px;
  margin-top: 1.5rem;

  .header {
    padding: 0.8rem 2rem;
    display: flex;
    justify-content: space-between;
    border-top: none;
    border-bottom: 2px dashed $btnColor;
    p {
      @include text__md();
      font-size: 1rem;
      // color: #fff;
      margin-bottom: 0rem;
    }
    .nav {
      p {
        text-decoration: none;
        cursor: pointer;
        @include text__sm();
        margin-left: 1.7rem;
        opacity: 7;
        &:active,
        &:hover {
          color: $primaryColor;
          opacity: 1;
        }
      }
    }
  }

  .card {
    border: none;
    padding: 0.5rem 1rem;
    // height: 120px;
    .card-img {
      margin: 1rem 0rem;
      width: 90px;
      height: 90px;
    }
    .card-body {
      padding: 0rem;
      .card-title {
        @include text__md();
        font-size: 1rem;
        margin-bottom: 0.3rem;
        color: #000000;
        margin-top: 1.2rem;
      }
      .text-small {
        @include text__sm();
        color: $btnColor;
      }

      p {
        margin-bottom: 0.3rem;
      }

      .srt {
        margin-bottom: 0rem;
      }

      .btn__xm {
        float: right;
        background: $btnColor;
        font-size: 0.7rem;
        font-weight: 500;
        border-radius: 50px;
      }
    }
  }
}

// small mobile
@include mediaxm() {
  .main {
    width: 21rem;
    .header {
      padding: 0.8rem 1.5rem;
      border-top: 2px dashed $btnColor;
    }
    .card {
      padding: 0.5rem 0.7rem;
      .card-img {
        margin: 1.5rem 0rem;
      }
      .card-body {
        padding: 0.5rem 0.5rem;
        .card-title {
          @include text__md();
          font-size: 0.9rem;
          font-weight: 600;
        }
        .text-small {
          font-size: 0.7rem;
          font-style: normal;
        }
        .srt {
          font-size: 0.8rem;
        }
      }
    }
  }
}

// small desktop
@include altmediaLg() {
  .main {
    float: right;
    .header {
    }
  }
}

// desktop
@include mediaXl() {
  .main {
    float: right;
    .header {
      p {
        color: #ffffff;
      }
      .nav {
        p {
          color: #ffffff;
          &:active,
          &:hover {
            color: #ffffff;
            opacity: 0.7;
          }
        }
      }
    }

    .card {
      background: transparent;
      .card-body {
        .card-title {
          color: #ffffff;
        }

        p {
          margin-bottom: 0.3rem;
          color: #ffffff;
        }

        .srt {
          margin-bottom: 0rem;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
