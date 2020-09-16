<template>
  <div id="layout">
    <transition-group name="slide-in" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <section class="main">
          <section class="header">
            <p>Donate today</p>
            <p>
              <a href="#" class="prev" @click="prev">&#10094; Prev</a>
              <a href="#" class="prev" @click="next">Next &#10095; </a>
            </p>
          </section>
          <section class="card" v-for="card in cards" v-bind:key="card.id">
            <div class="row no-gutters">
              <div class="col-3">
                <img
                  :src="require('@/assets/' + card.img)"
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-9">
                <div class="card-body">
                  <h5 class="card-title">{{ card.title }}</h5>
                  <p class="card-text">
                    <small class="text-small">{{ card.smallText }}</small>
                  </p>
                  <p class="card-text srt">
                    {{ card.text }}
                  </p>
                  <button class="btn btn__xm">{{ card.btn }}</button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </transition-group>
  </div>
</template>

<script>
let photos = {
  img__1: require("@/assets/NoPath - Copy (14).png"),
};
export default {
  name: "Slider",
  data() {
    return {
      img__1: true,
      cards: [
        {
          id: 1,
          img: "NoPath - Copy (14).png",
          title: "Dakwa Primary health center",
          smallText: "need",
          text: "Hospital beds",
          btn: "Donate",
        },
        // {
        //   id: 2,
        //   img: "NoPath - Copy (14).png",
        //   title: "Dakwa Primary health center",
        //   smallText: "need",
        //   text: "Hospital beds",
        //   btn: "Donate",
        // },
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    photos() {
      return photos;
    },
    currentImg: function() {
      return this.cards[Math.abs(this.currentIndex) % this.cards.length];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

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
    p {
      @include text__md();
      font-size: 1rem;
      // color: #fff;
      margin-bottom: 0rem;
    }
    a {
      text-decoration: none;
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
  .card {
    padding: 0.5rem 1rem;
    // height: 120px;
    border-top: 2px dashed $btnColor;
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
    width: 26.75rem;
    .header {
      padding: 0.8rem 1.5rem;
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
          font-size: 1rem;
          font-weight: 600;
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
      padding: 0.8rem 2rem;
      display: flex;
      justify-content: space-between;
      p {
        @include text__md();
        font-size: 1rem;
        // color: #fff;
        margin-bottom: 0rem;
      }
      a {
        text-decoration: none;
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
}
</style>
