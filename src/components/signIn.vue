<template>
  <article>
    <main class="container">
      <router-link class="navbar-brand" to="/"
        ><icon name="logo"></icon
      ></router-link>
      <section class="main__content">
        <section class="info">
          <h1>Welcome back</h1>
          <small>Log in to continue</small>
        </section>
        <section class="form">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form__control"
                id="exampleFormControlInput1"
                placeholder=""
                v-on:click="display"
              />
              <label for="exampleFormControlInput1" id="label"
                >Email or Phone number</label
              >
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form__control"
                id="exampleFormControlInput1"
                placeholder=""
                v-on:click="display"
              />
              <label for="exampleFormControlInput1">Password</label>
            </div>
            <a
              href="#"
              class="forgotlink"
              target="_blank"
              rel="noopener noreferrer"
              >Forgot password?</a
            >
            <div class="accessbtn">
              <span
                >New user?
                <router-link to="/signUp" class="signin"
                  >Sign up</router-link
                ></span
              >
              <button class="btn btn__sm">
                Log In
              </button>
            </div>
          </form>
          <span
            ><small>Having troubles logging in? </small>
            <a href="#">Contact support</a></span
          >
        </section>
      </section>
    </main>
  </article>
</template>

<script>
// let input = document.querySelector("input");
// let label = document.querySelector("#label");
export default {
  // methods: {
  //   display: function() {
  //     // alert("hello world");
  //     if (input.value == " ") {
  //       label.style.top = "17px";
  //     } else if (input.value != " ") {
  //       label.style.top = "-14px";
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";
article {
  width: 100%;
  height: 100%;
  background: #faeacd 0% 0% no-repeat padding-box;
  padding: 2rem 0rem;

  main {
    width: 100%;
    height: 100%;
    .navbar-brand {
      margin-bottom: 5.5rem;
    }
    .main__content {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      .info {
        width: 100%;
        height: 100%;
        padding-top: 1rem;
        h1 {
          @include text__lg__bold();
          margin-bottom: 1.5rem;
        }

        small {
          color: $secondaryColor;
          font-size: 1.1rem;
        }
      }
      .form {
        width: 100%;
        form {
          width: 100%;
          background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 0px 6px 10px #19204d0f;
          border-radius: 1px;
          padding: 4rem 3rem;
          margin-bottom: 1rem;
          .form-group {
            position: relative;
            margin-bottom: 21px;
          }

          .form-group:nth-child(2) {
            margin-bottom: 10px;
          }

          input[type="text"],
          input[type="password"] {
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

          .forgotlink {
            @include text__sm__bold();
            font-weight: 600;
            color: $primaryColor;
          }

          .accessbtn {
            width: 100%;
            margin-top: 2rem;
            display: flex;
            justify-content: space-between;
            span {
              display: block;
              color: $secondaryColor;
              align-self: center;
              .signin {
                @include text__sm__bold();
                font-weight: 600;
                color: $primaryColor;
              }
            }
            .btn__sm {
              @include btn__sm();
              background: $primaryColor;
              color: #f1f1f1;
              border: $btnColor;
              padding: 0.4rem 0.9rem;
            }
          }
        }

        span {
          small {
            font-size: 1rem;
            color: $secondaryColor;
          }
          a {
            @include text__sm__bold();
            font-weight: 600;
            color: $primaryColor;
          }
        }
      }
    }
  }
}
// small size
@include mediaxm() {
  article {
    main {
      .main__content {
        .form {
          form {
            padding: 4rem 2rem;
            input[type="text"],
            input[type="password"] {
              @include input();
              &:focus + label {
                top: -14px;
                font-size: 13px;
              }
            }

            label {
              font-size: 15px;
            }

            .forgotlink {
              font-size: 14px;
            }

            .accessbtn {
              span {
                font-size: 14px;
                .signin {
                  font-size: 14px;
                }
              }
              .btn__sm {
                padding: 0.4rem 0.5rem;
                width: 140px;
              }
            }
          }

          span {
            small {
              font-size: 0.8rem;
              color: $secondaryColor;
            }
            a {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
}

// desktop
@media screen and (min-width: 756px) {
  article {
    main {
      .main__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
</style>
