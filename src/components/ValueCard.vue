<template>
  <div class="layout">
    <div class="our__value">
      <div class="container">
        <h1>Our values</h1>
        <p class="details">
          Our passion for standard health care delivery within local communities
          is the zeal that drives us. A already bad health system in Nigeria can
          only be improved from the foundation.
        </p>

        <div class="value__cards row">
          <div class="col-sm-12 col-lg-4">
            <div class="value__card card">
              <icon name="Group414" class="Group414"></icon>
              <div class="card-body">
                <h5 class="card-title">Passion & Empathy</h5>
                <p class="card-text">
                  CONCERNED BY THE SHORTCOMINGS IN THE PRIMARY HEALTH CARE
                  service DELIVERY SYSTEM, OUR PASSION TO MAKE IT BETTER AND SEE
                  IT WORK WAS IGNITED. WE BELIEVE WE CAN ACHIEVE THIS BY
                  LEVERAGING ON THE POWER OF THE COMMUNITY.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-lg-4">
            <div class="value__card card">
              <icon name="Group374" class="Group374"></icon>
              <div class="card-body">
                <h5 class="card-title">Innovation & Collaboration</h5>
                <p class="card-text">
                  Diligent and creative thinkers; we explore the creative power
                  of the mind and the collectiveness of the team to develop
                  indigenous solutions to challenges in Africa. We are wholly
                  committed to whatever we set our minds upon.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-lg-4">
            <div class="value__card card ">
              <icon name="Group321" class="Group321"></icon>
              <div class="card-body">
                <h5 class="card-title">Integrity</h5>
                <p class="card-text">
                  Honesty and trustworthiness are very vital to us. We give our
                  words, and we owe up to it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StorySection",
  data: function() {
    return {
      cards: [
        {
          title1: "Passion & Empathy",
          msg1:
            "CONCERNED BY THE SHORTCOMINGS IN THE PRIMARY HEALTH CARE service DELIVERY SYSTEM, OUR PASSION TO MAKE IT BETTER AND SEE IT WORK WAS IGNITED. WE BELIEVE WE CAN ACHIEVE THIS BY LEVERAGING ON THE POWER OF THE COMMUNITY."
        },
        {
          title2: "Innovation & Collaboration",
          msg2:
            "CONCERNED BY THE SHORTCOMINGS IN THE PRIMARY HEALTH CARE service DELIVERY SYSTEM, OUR PASSION TO MAKE IT BETTER AND SEE IT WORK WAS IGNITED. WE BELIEVE WE CAN ACHIEVE THIS BY LEVERAGING ON THE POWER OF THE COMMUNITY."
        },
        {
          title3: "Integrity",
          msg3:
            "Honesty and trustworthiness are very vital to us. We give our words, and we owe up to it."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

.our__value {
  margin: 8em 0em;

  h1 {
    text-align: center;
    @include text__lg__bold();
  }

  .details {
    text-align: center;
    margin: 2.5rem auto;
    @include text__sm();
  }
  .value__cards {
    justify-content: space-between;
    .value__card {
      margin-top: 3rem;
    }
    .card {
      width: 94%;
      height: 33em;
      border: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 10px 15px #00000029;
      border-radius: 15px;
      opacity: 1;
      padding-top: 2rem;

      .Group414,
      .Group374,
      .Group321 {
        margin: 0rem 0rem 0rem 1rem;
      }

      h5 {
        text-align: left;
        @include text__lg__bold();
        margin: 2rem 0rem 1.5rem 0rem;
      }

      p {
        @include text__sm();
      }
    }
  }
}

/*********** 
big tabs
************/
@include mediaLg {
  .our__value {
    .details {
      width: 80%;
      text-align: center;
      margin: 2.5rem auto;
    }
  }
}

/**************
 desktop
**************/
@include mediaXl {
  .our__value {
    .details {
      max-width: 70%;
    }
  }
}

@include altmediaLg {
  .our__value {
    .details {
      max-width: 70% !important;
    }
  }
}
</style>
