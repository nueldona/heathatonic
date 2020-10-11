<template>
  <article>
    <main class="container">
      <router-link class="navbar-brand" to="/"
        ><icon name="logo"></icon
      ></router-link>
      <section class="main__content">
        <section class="info">
          <h1>Create an account</h1>
          <small
            >Let's create a virtual medical record for you, and help you access
            great primary health care.</small
          >
        </section>
        <section class="form">
          <form>
            <div class="first__input">
              <div class="form-group alt-form-group">
                <input
                  type="text"
                  class="form__control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                <label for="exampleFormControlInput1">first name</label>
              </div>
              <div class="form-group alt-form-group">
                <input
                  type="text"
                  class="form__control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                <label for="exampleFormControlInput1">last name</label>
              </div>
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form__control"
                id="exampleFormControlInput1"
                placeholder=""
              />
              <label for="exampleFormControlInput1">Phone number</label>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form__control"
                id="exampleFormControlInput1"
                placeholder=""
              />
              <label for="exampleFormControlInput1">Email</label>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form__control"
                id="exampleFormControlInput1"
                placeholder=""
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
                <router-link to="/signIn" class="signin"
                  >Log in</router-link
                ></span
              >
              <button class="btn btn__sm">
                Sign up
              </button>
            </div>
          </form>
          <span
            ><small>Need help? </small> <a href="#">Contact support</a></span
          >
        </section>
      </section>
    </main>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";
.first__input {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
article {
  width: 100%;
  height: 100%;
  background: #faeacd 0% 0% no-repeat padding-box;
  padding: 2rem 0rem;

  main {
    width: 100%;
    height: 100%;
    .navbar-brand {
      margin-bottom: 1.8rem;
    }
    .main__content {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      .info {
        width: 100%;
        height: 100%;
        padding-top: 1rem;
        margin-top: 4rem;
        h1 {
          @include text__lg__bold();
          margin-bottom: 1.5rem;
        }

        small {
          color: $secondaryColor;
          display: block;
          width: 70%;
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
          padding: 3.5rem 3rem;
          margin-bottom: 1rem;
          .form-group {
            position: relative;
            margin-bottom: 21px;
          }

          .form-group:nth-child(4) {
            margin-bottom: 10px;
          }

          input[type="text"],
          input[type="password"],
          input[type="number"],
          input[type="email"] {
            @include input();
            &:focus + label {
              top: -14px;
              font-size: 12px;
              transition: 0.3s;
              color: #19204d;
              background: #fff;
              border: 2px solid #fff;
              padding: 5px 10px;
              // height: 25px;
            }
          }

          input[type="text"] {
            width: 90%;
            margin: 0px;
          }

          label {
            position: absolute;
            left: 15px;
            top: 17px;
            // transform: translate(-17px, -15px);
            padding: 0px 5px;
            color: #19204d80;
            font-size: 14px;
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

// mobile
@include mediaxm() {
  article {
    main {
      .main__content {
        .info {
          h1 {
            @include text__lg__bold();
          }

          small {
            width: 90%;
            font-size: 1rem;
          }
        }
        .form {
          form {
            padding: 4rem 2rem;
            input[type="text"],
            input[type="password"],
            input[type="number"],
            input[type="email"] {
              @include input();
              &:focus + label {
                top: -14px;
                font-size: 13px;
                // height: 25px;
              }
            }

            input[type="text"] {
              width: 90%;
              margin: 0px;
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
  main {
    .main__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
