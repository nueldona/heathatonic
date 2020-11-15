<template>
  <article>
    <icon name="DonateCross" class="DonateCross__svg"></icon>
    <icon name="bigCupid" class="bigCupid__svg"></icon>
    <main class="container">
      <section class="top__layer">
        <div class="conatiner">
          <h1>
            Together, we can improve the primary health care system in Nigeria
          </h1>
          <p>
            Your contribution would go a long way in improving the health care
            service delivery within your community. Everyone deserves access to
            good health care and your donation can make it a reality.
          </p>
        </div>
      </section>
    </main>
    <section class="middle__layer">
      <div class="container">
        <h2>PHCs in critical state</h2>
      </div>
      <section>
        <div class="carousel">
          <div class="card-carousel-wrapper">
            <div
              class="card-carousel--nav__left"
              @click="moveCarousel(-1)"
              :disabled="atHeadOfList"
            >
              <icon name="arrowDir" class="arrowleft"></icon>
            </div>
            <div class="card-carousel">
              <div class="card-carousel--overflow-container">
                <div
                  class="card-carousel-cards"
                  :style="{
                    transform: 'translateX' + '(' + currentOffset + 'px' + ')'
                  }"
                >
                  <div
                    class="card-carousel--card"
                    v-for="item in items"
                    :key="item"
                  >
                    <img
                      :src="require('@/assets/' + item.img)"
                      alt="image"
                      loading="lazy"
                    />
                    <div class="card-carousel--card--footer">
                      <h1>{{ item.title }}</h1>
                      <h2>{{ item.state }}</h2>
                      <p>{{ item.details }}</p>
                      <router-link class="btn btn__xm" to="/DonateDetails"
                        >Details</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card-carousel--nav__right"
              @click="moveCarousel(1)"
              :disabled="atEndOfList"
            >
              <icon name="arrowDir" class="arrowRight"></icon>
            </div>
          </div>
        </div>
      </section>
    </section>

    <main class="container mt-5">
      <section class="third__layer">
        <DonateButton />
      </section>

      <section class="fourth__layer mt-5">
        <div class="fourth__layer-content">
          <div class="card-carousel-cards">
            <section class="first__section">
              <div
                class="card-carousel--card"
                v-for="item in items"
                :key="item"
              >
                <img
                  :src="require('@/assets/' + item.img)"
                  loading="lazy"
                  alt="image"
                />
                <div class="card-carousel--card--footer">
                  <h1>{{ item.title }}</h1>
                  <h2>{{ item.state }}</h2>
                  <p>{{ item.details }}</p>
                  <router-link to="/DonateDetails" class="btn btn__xm"
                    >Details</router-link
                  >
                </div>
              </div>
            </section>
            <section class="second__section">
              <div
                class="card-carousel--card"
                v-for="item in items"
                :key="item"
              >
                <img
                  :src="require('@/assets/' + item.img)"
                  loading="lazy"
                  alt="image"
                />
                <div class="card-carousel--card--footer">
                  <h1>{{ item.title }}</h1>
                  <h2>{{ item.state }}</h2>
                  <p>{{ item.details }}</p>
                  <router-link class="btn btn__xm" to="/DonateDetails">
                    Details
                  </router-link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  </article>
</template>

<script>
import DonateButton from "@/components/DonateButton";
export default {
  props: {
    name: String
  },

  mounted() {
    this.fetchData();
  },

  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
      items: []
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  methods: {
    async fetchData() {
      const res = await fetch("phcState.json");
      const val = await res.json();
      this.items = val;
    },
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  },
  components: {
    DonateButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";
article {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.DonateCross__svg {
  display: none;
  position: absolute;
}

.bigCupid__svg {
  display: none;
  position: absolute;
}

.top__layer {
  width: 100%;
  height: 100%;
  padding: 5rem 0.82rem;
  h1 {
    @include text__lg__bold();
    text-align: center;
    margin-bottom: 2.5rem;
  }
  p {
    @include text__sm();
    text-align: center;
  }
}

.middle__layer {
  width: 100%;
  height: 100%;
  h2 {
    @include text__lg();
    text-align: center;
  }

  .card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 40px;
    position: relative;
  }

  .card-carousel {
    display: flex;
    justify-content: center;
    width: 100%;

    &--nav__left,
    &--nav__right {
      position: absolute;
      width: 3.75rem;
      height: 3.75rem;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 12px 13px #fba91d2e;
      border: 2px solid #fba91d;
      opacity: 1;
      border-radius: 50px;
      cursor: pointer;
      margin: 0rem 2.5rem;
      transition: transform 150ms linear;
      z-index: 999;
      padding: 0.9rem 1.3rem;
      &[disabled] {
        opacity: 0.6;
      }
    }

    &--nav__left {
      left: 0rem;
      &:active {
        transform: rotate(100deg) scale(0.9);
      }
    }

    &--nav__right {
      right: 0rem;
      &:active {
        transform: rotate(100deg) scale(0.9);
      }
      .arrowRight {
        transform: rotate(180deg);
      }
    }
  }

  .card-carousel-cards {
    display: flex;
    transition: transform 150ms ease-out;
    transform: translatex(0px);

    @include card-carousel--card();
  }
}

.fourth__layer {
  width: 100%;
  height: 100%;
  .fourth__layer-content {
    .card-carousel-cards {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      .first__section {
        margin: 0rem auto;
        @include card-carousel--card();
        .card-carousel--card {
          margin: 2rem;
        }
        .card-carousel--card:first-child {
          margin-left: 2rem;
        }
        .card-carousel--card:nth-child(4) {
          display: none;
        }
        .card-carousel--card:nth-child(5) {
          display: none;
        }
        .card-carousel--card:last-child {
          display: none;
        }
      }
      .second__section {
        margin: 0rem auto;
        @include card-carousel--card();
        .card-carousel--card {
          margin: 2rem;
        }
        .card-carousel--card:first-child {
          margin-left: 2rem;
        }
        .card-carousel--card:nth-child(4) {
          display: none;
        }
        .card-carousel--card:nth-child(5) {
          display: none;
        }
        .card-carousel--card:last-child {
          display: none;
        }
      }
    }
  }
}
// tablet
@include mediaMd {
  .top__layer {
    padding: 5rem 3rem;
  }

  .fourth__layer {
    .fourth__layer-content {
      .card-carousel-cards {
        .first__section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0rem;
        }
        .second__section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          // margin: 2rem 0rem;
        }
      }
    }
  }
}

// big tablet
@include mediaLg {
  .top__layer {
    padding: 5rem 3rem;
  }

  .fourth__layer {
    .fourth__layer-content {
      .card-carousel-cards {
        .first__section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0rem;
        }
        .second__section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0rem;
        }
      }
    }
  }
}

// small desktop
@include altmediaLg {
  .DonateCross__svg {
    display: block;
    top: 4rem;
    right: 82%;
  }

  .bigCupid__svg {
    display: block;
    position: absolute;
    top: 4rem;
    left: 82%;
  }
  .top__layer {
    padding: 5rem 12rem;
  }
  .fourth__layer {
    .fourth__layer-content {
      .card-carousel-cards {
        .first__section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0rem;
        }
        .second__section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0rem;
        }
      }
    }
  }
}

// desktop
@include mediaXl {
  .DonateCross__svg {
    display: block;
    top: 4rem;
    right: 82%;
  }

  .bigCupid__svg {
    display: block;
    position: absolute;
    top: 4rem;
    left: 82%;
  }
  .top__layer {
    padding: 5rem 13rem;
  }
  .fourth__layer {
    .fourth__layer-content {
      .card-carousel-cards {
        .first__section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0rem;
        }
        .second__section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0rem;
        }
      }
    }
  }
}
</style>
