<template>
  <div class="layout">
    <div class="container">
      <section class="first__section">
        <div class="text">
          <h1>Sign up free</h1>
          <span>
            <h2>Get instant access to quality health care.</h2>
          </span>
        </div>
        <div class="button">
          <a href="#" class="btn btn-md"><p>Register Today</p></a>
        </div>
      </section>

      <section class="contact__form">
        <section class="form">
          <h1>Contact Us</h1>
          <p>
            Feel free to contact us at any time, we will get back to you as soon
            as we can!
          </p>
          <section>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form__control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                <label for="exampleFormControlInput1">Full Name</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form__control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                <label for="exampleFormControlInput1">Email</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form__control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                <label for="exampleFormControlInput1">Subject</label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button class="btn btn__sm">
                Send message
              </button>
            </form>
          </section>
        </section>

        <section class="box">
          <div class="sm__box"></div>
          <div class="md__box">
            <h1>info</h1>
            <ul>
              <li>
                <icon name="mail" class="icon"></icon>energoltechhub@gmail.com
              </li>
              <li><icon name="phone" class="icon"></icon>+23470998583637</li>
              <li>
                <icon name="map" class="icon"></icon>
                Office address with chairs and tables, and a space to straff
              </li>
            </ul>
            <ul class="box__icon">
              <li class="box__icon__list">
                <icon name="facebook" class=""></icon>
              </li>
              <li class="box__icon__list">
                <icon name="instagram" class=""></icon>
              </li>
              <li class="box__icon__list">
                <icon name="twitter" class=""></icon>
              </li>
            </ul>
          </div>
          <div class="lg__box"></div>
        </section>
      </section>
    </div>
    <div class="text-center">
      <router-link :to="{ path: '/#StorySection' }">
        <icon name="backto"></icon>
        Back to top
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

.layout {
  width: 100%;
  height: 135em;
  margin: 14rem 0rem 1rem 0rem;

  .first__section {
    max-width: 100%;
    height: 100%;
    background: $btnColor 0% 0% no-repeat padding-box;
    box-shadow: 0px 36px 35px #fba91d30;
    border-radius: 15px;
    padding: 5rem 3rem;

    .text {
      h1 {
        @include text__lg__bold();
      }
      span {
        display: block;
        margin-top: 1rem;
        h2 {
          @include text__lg();
          display: block;
        }
      }
    }

    .button {
      margin-top: 3rem;
      .btn-md {
        @include btn__md();
        padding: 1.2rem 0rem;

        p {
          @include text__md();
          color: $btnColor;
          font-weight: 500;
        }
      }
    }
  }
  .contact__form {
    width: 100%;
    height: 100rem;
    margin-top: 6rem;
    .form {
      margin-bottom: 10rem;
      h1 {
        @include text__lg__bold();
        margin-bottom: 0.8rem;
      }
      p {
        width: 20rem;
        @include text__sm();
      }

      form {
        margin-top: 2rem;
        .form-group {
          position: relative;
          margin-bottom: 21px;
        }
        input[type="text"] {
          @include input();
          &:focus + label {
            top: -14px;
            font-size: 14px;
            transition: 0.3s;
            color: #19204d;
            background: #fff;
            border: 2px solid #fff;
            padding: 5px 10px;
            // height: 25px;
          }
        }

        label {
          position: absolute;
          left: 15px;
          top: 17px;
          // transform: translate(-17px, -15px);
          padding: 0px 5px;
          color: #19204d80;
          font-size: 17px;
          transition: 0.3s;
        }

        .btn__sm {
          @include btn__sm();
          float: right;
          background: $btnColor;
          color: $secondaryColor;
          border: $btnColor;
          padding: 0.4rem 0.9rem;
          font-weight: bold;
        }
      }
    }

    .box {
      max-width: 100%;
      // display: flex;
      position: relative;
      .sm__box {
        @include sm__box();
      }
      .md__box {
        @include md__box();
        ul {
          list-style-type: none;
          margin: 2rem 0rem;
          li {
            display: flex;
            margin-bottom: 5rem;
            .icon {
              margin-right: 0.8rem;
            }
          }
        }
        .box__icon {
          margin-top: 7rem;
          li {
            display: inline-block;
            margin-right: 1.5rem;
          }
        }
      }
      .lg__box {
        @include lg__box();
      }
    }
  }
}

// small mobile
@include mediaxm() {
  .layout {
    .contact__form {
      .box {
        .sm__box {
          @include sm__box();
          display: none;
        }
        .md__box {
          @include md__box();
          top: 0rem;
          left: 0.3rem;
        }
        .lg__box {
          @include lg__box();
          display: none;
        }
      }
    }
  }
}

// mobile
@include mediaSm() {
  .layout {
    .contact__form {
      .box {
        .sm__box {
          @include sm__box();
          display: none;
        }
        .md__box {
          @include md__box();
          top: 0rem;
          left: 0.5rem;
        }
        .lg__box {
          @include lg__box();
          display: none;
        }
      }
    }
  }
}

// desktop
@include altmediaLg {
  .layout {
    height: 100%;
    .contact__form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem;
      height: 100%;
      .form {
        margin-bottom: 4.5rem;
      }
    }
  }
}

//
@include mediaXl {
  .layout {
    height: 100%;
    .first__section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 5rem 4rem;

      .text {
        h2 {
          width: 80%;
        }
      }
      .button {
        margin-top: 1.5rem;
        padding: 0rem 3rem;
        .btn-md {
          @include btn__md();
          padding: 1.2rem 0rem;
          float: right;
        }
      }
    }
    .contact__form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem;
      height: 100%;
      .form {
        margin-bottom: 4.5rem;
      }
    }
  }
}
</style>
