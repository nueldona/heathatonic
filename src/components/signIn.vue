<template>
  <article>
    <main class="container">
      <router-link class="navbar-brand" to="/"
        ><icon name="logo"></icon
      ></router-link>
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
            />
            <label for="exampleFormControlInput1">Email or Phone number</label>
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
    </main>
  </article>
</template>

<script>
export default {};
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
    .info {
      width: 100%;
      height: 80vh;
      padding-top: 1rem;
      h1 {
        @include text__lg__bold();
      }

      small {
        color: $secondaryColor;
      }
    }
    .form {
      width: 100%;
      height: 100%;
      form {
        width: 100%;
        height: 100%;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 6px 10px #19204d0f;
        border-radius: 1px;
        padding: 4rem 2rem;
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
          height: 100%;
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
        a {
          @include text__sm__bold();
          font-weight: 600;
          color: $primaryColor;
        }
      }
    }
  }
}
</style>
