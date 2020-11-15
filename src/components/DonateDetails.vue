<template>
  <article>
    <header>
      <section class="first__section">
        <section class="wrapper">
          <div class="content__one d-flex">
            <p>PHCs</p>
            <icon name="arrow_right"></icon>
            <p class="text">Dakwa</p>
          </div>

          <div class="content__two">
            <h1>Dakwo PHC</h1>
            <p class="small-text mb-4">Abuja</p>
            <p class="text">
              Your contribution can go a long way in saving your life, and
              someone else's life. Every body deserves access to a good health
              care, and your contribution can make that happen
            </p>

            <div class="content__two__range">
              <icon name="range" class="range"></icon>
              <div class="range-num d-flex mt-2 mb-3">
                <p>N 450,000</p>
                <p>N 1,000,000</p>
              </div>
              <button class="btn">
                <div>
                  <icon name="moneyRec" class="icon"></icon>
                </div>
                Donate
              </button>
            </div>
          </div>

          <div class="content__three">
            <icon name="brokenCross" class="brokenCross"></icon>
          </div>
        </section>
        <img
          :src="require('@/assets/NoPath - Copy (17).png')"
          alt=""
          srcset=""
          class="wrapper__img"
        />
      </section>
      <section
        class="text-center readMore"
        data-aos="fade"
        data-aos-duration="2000"
      >
        <a href="#" v-scroll-to="'#'">
          <icon name="scrollDown" class="icon"></icon>
          Scroll down for details
        </a>
      </section>
    </header>

    <main>
      <p class="text-center hero__text mb-4">
        For optimal health care delivery we need:
      </p>
      <section class="container">
        <section class="content" v-for="item in items" :key="item">
          <div class="image__content">
            <!-- <div class="image__content__id">
              <p>{{ item.id }}</p>
              <small>/3</small>
            </div> -->
            <div class="image__container">
              <img
                :src="require('@/assets/' + item.image)"
                alt="hospital bed"
              />
            </div>
          </div>
          <div class="info__content">
            <h1 class="mb-3 mt-5">{{ item.id }}</h1>
            <section class="info__content__headings">
              <div class="headings">
                <h2 class="mb-2">{{ item.title }}</h2>
                <p>{{ item.unit }} units required</p>
              </div>
              <div class="price-tag mb-5">
                <p>{{ item.amount }}</p>
                <small>{{ item.amoutPerUnit }}</small>
              </div>
            </section>
            <p>
              In order to function optimally we need the following equipment to
              be up
            </p>
            <section class="button__content mt-5">
              <button class="btn">
                <div>
                  <icon name="moneyRec" class="icon"></icon>
                </div>
                <span class="mt-1">
                  Donate item
                </span>
              </button>
              <button class="btn">
                <div>
                  <icon name="moneyRec" class="icon"></icon>
                </div>
                <span class="mt-1">
                  Donate money
                </span>
              </button>
            </section>
          </div>
        </section>
      </section>
    </main>
  </article>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: "01",
          image: "csm_header-evario-frei_33289e1b50.png",
          title: "Hospital beds",
          unit: 20,
          amount: "N 600,000",
          amoutPerUnit: "@ N 30,000 per unit"
        },
        {
          id: "02",
          image:
            "kisspng-memmert-incubator-laboratory-ovens-heat-5adc592377bb30.7845367915243901794904.png",
          title: "Lab incubator",
          unit: 1,
          amount: "N 200,000",
          amoutPerUnit: "@ N 200,000 per unit"
        },
        {
          id: "03",
          image:
            "imgbin-laboratory-centrifuge-blood-centrifugation-blood-FRNsDGpFLZMJpPuM6FEQcxR7n.png",
          title: "Centrifuge",
          unit: 2,
          amount: "N 200,000",
          amoutPerUnit: "@ N 400,000 per unit"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

button {
  @include btn__xl();
  background: #fba91d 0% 0% no-repeat padding-box;
  box-shadow: 10px 12px 20px #19204d33;
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  padding-top: 0.6rem;
  text-align: center;
  align-content: center;
  div {
    width: 32px;
    height: 32px;
    background: $primaryColor;
    border-radius: 50px;
    margin-right: 1.5rem;
    padding: 0.1rem 0.2rem;
    .icon {
      height: 23px;
      width: 23px;
    }
  }
}

.first__section {
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.5rem;
  position: relative;
  .wrapper {
    background: #fba91d24 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    padding: 2rem 1rem 2.5rem 1rem;
    .content__one {
      width: 10rem;
      height: 2.5rem;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 6px 3px 9px #00000024;
      border-radius: 6px;
      padding: 0.5rem 1rem;
      margin-bottom: 5rem;
      .text {
        font-weight: 500;
      }
    }
    .content__two {
      h1 {
        @include text__lg__bold();
      }
      .small-text {
        color: $btnColor;
      }
      .text {
        color: $secondaryColor;
        font-weight: 400;
      }

      .content__two__range {
        .range {
          width: 330px;
          height: 7px;
        }
        .range-num {
          justify-content: space-between;
        }

        button {
          font-size: 1rem;
          text-align: center;
          align-content: center;
          div {
            margin-right: 2.5rem;
          }
        }
      }
    }

    .content__three {
      display: none;
    }
  }
  .wrapper__img {
    display: none;
  }
}

.readMore {
  margin-top: 3rem;
  .icon {
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: #19204dbf;
  }
}

main {
  margin-top: 7rem;
  .hero__text {
    font-size: 14px;
    color: #19204dbf;
  }
  .content {
    display: grid;
    place-items: center;
    margin-top: 6rem;
    margin-bottom: 5rem;
    .image__content {
      .image__container {
        width: 100%;
        height: 480px;
        background: #fba91d33 0% 0% no-repeat padding-box;
        box-shadow: 2px 8px 13px #00000017;
        border-radius: 15px;
        padding: 8.5rem 1rem;
        img {
          max-width: 100%;
        }
      }
    }
    .info__content {
      h1 {
        @include text__lg__bold();
      }

      .info__content__headings {
        .headings {
          h2 {
            @include text__lg;
          }
          p {
            font-style: 1.5rem;
            letter-spacing: 0px;
            color: #fcba4a;
          }
        }
        .price-tag {
          width: 220px;
          height: 85px;
          background: #fba91d33 0% 0% no-repeat padding-box;
          box-shadow: 2px 8px 13px #00000017;
          border-radius: 15px;
          padding: 1rem 1rem;
          p {
            @include text__sm__bold();
            font-weight: bold;
            color: #fcba4a;
          }
          small {
            font-size: 0.9rem;
            font-style: normal;
            color: $secondaryColor;
            float: right;
            // @include text__xm();
          }
        }
      }

      p {
        font-size: 18px;
        color: $secondaryColor;
      }
      .button__content {
        // display: grid;
        // place-items: center;
        .btn {
          margin-top: 1rem;
        }
      }
    }
  }
}

@include mediaMd() {
  .first__section {
    padding: 0.5rem 1rem;

    .content__two {
      width: 70%;
    }
  }
  main {
    .content {
      margin-bottom: 5rem;
      .info__content {
        .info__content__headings {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        p {
          width: 70%;
        }
        .button__content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          .btn {
            margin-top: 1rem;
          }
        }
      }
    }
  }
}

@include mediaLg() {
  .first__section {
    background: red;
    padding: 0.5rem 2rem;
    .wrapper {
      padding: 2rem 2rem 2.5rem 2rem;
    }

    .content__two {
      width: 80%;
      .content__two__range {
        .range {
          width: 440px !important;
          height: 7px;
        }
      }
    }
  }
  main {
    .content {
      margin-bottom: 5rem;
      .info__content {
        width: 75%;
        .info__content__headings {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        p {
          width: 70%;
        }
        .button__content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          .btn {
            margin-top: 1rem;
          }
        }
      }
    }
  }
}

@include altmediaLg() {
  .first__section {
    // background: black;
    padding: 0.5rem 2rem;
    .wrapper {
      width: 80%;
      padding: 2rem 2rem 2.5rem 2rem;
      position: relative;
      .content__two {
        width: 63%;
        .content__two__range {
          .range {
            width: 430px !important;
            height: 7px;
          }
        }
      }

      .content__three {
        display: none;
      }
    }

    .wrapper__img {
      display: block;
      position: absolute;
      top: 4rem;
      right: 3rem;
    }
  }

  main {
    .content {
      display: grid;
      place-items: center;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 5rem;
      .info__content {
        .info__content__headings {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        p {
          width: 74%;
        }
        .button__content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
}

@include mediaXl {
  .first__section {
    padding: 0.5rem 4rem;
    .wrapper {
      width: 80%;
      padding: 2rem 3.2rem 2.5rem 3.2rem;
      position: relative;
      .content__two {
        width: 48%;
        .content__two__range {
          .range {
            width: 430px !important;
            height: 7px;
          }
        }
      }

      .content__three {
        display: block;
        .brokenCross {
          width: 290px;
          height: 260px;
          position: absolute;
          top: 13rem;
          right: 9.5rem;
        }
      }
    }
    .wrapper__img {
      width: 466px;
      height: 330px;
      display: block;
      position: absolute;
      top: 3.3rem;
      right: 9rem;
    }
  }

  main {
    .content {
      display: grid;
      place-items: center;
      grid-template-columns: 40% 50%;
      
      margin-bottom: 5rem;
      .info__content {
        .info__content__headings {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        p {
          width: 74%;
        }
        .button__content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
}
</style>
