<template>
  <div class="layout">
    <div class="team__members w-100 h-100">
      <div class="container">
        <div
          v-for="TeamDetail in allTeamDetails"
          v-bind:key="TeamDetail.id"
          class="team__member"
        >
          <div class="team__id col-lg-5">
            <img
              :src="require('@/assets/' + TeamDetail.img)"
              alt="profile pictures"
              data-aos="zoom-out"
              data-aos-anchor=".anchor"
              data-aos-duration="1300"
            />
          </div>
          <div class="team__details col-lg-7">
            <h1
              data-aos="slide-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
            >
              {{ TeamDetail.title }}
            </h1>
            <p
              data-aos="slide-up"
              data-aos-easing="ease"
              data-aos-duration="1100"
            >
              {{ TeamDetail.position }}
            </p>
            <p
              data-aos="slide-up"
              data-aos-easing="ease"
              data-aos-duration="1200"
            >
              {{ TeamDetail.details }}
            </p>
            <button
              class="btn btn__md"
              data-aos="fade"
              data-aos-duration="1400"
            >
              <icon name="LinkedIn" class="LinkedIn"></icon>
              <span>Linked In</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from "vuex";
export default {
  name: "cards",
  computed: {
    ...mapGetters(["allTeamDetails"])
  }
  // mounted() {
  //   this.fetchData();
  // },
  // data() {
  //   return {
  //     team__members: []
  //   };
  // },
  // methods: {
  //   async fetchData() {
  //     // eslint-disable-next-line no-unused-vars
  //     const res = await fetch("teamDetails.json");
  //     // eslint-disable-next-line no-unused-vars
  //     const val = await res.json();
  //     this.team__members = val;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";
.team__members {
  margin: 4.5em 0em;
  .team__member {
    margin-top: 5rem;
    .team__id {
      max-width: 21.9375rem;
      max-height: 29.25rem;
      background: #f9f9fb 0% 0% no-repeat padding-box;
      box-shadow: 7px 10px 15px #0000001c;
      border-radius: 15px;
      padding: 5rem 3rem 0rem 3rem;
    }
    .team__details {
      padding: 3rem 0rem 0rem 0rem;
      h1 {
        @include text__lg__bold();
      }
      p {
        @include text__sm();
        margin-bottom: 1.8rem;
      }
      .btn__md {
        @include btn__sm();
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        text-align: center;
        span {
          opacity: 0.76;
          margin-left: 10px;
        }
      }
    }
  }
}

@include altmediaLg {
  .team__members {
    .team__member {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 4rem;
    }
    .team__member:nth-child(2),
    .team__member:nth-child(4) {
      flex-direction: row-reverse;
    }
  }
}

/**************
 desktop
**************/
@include mediaXl {
  .team__members {
    .team__member {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 4rem;
    }
    .team__member:nth-child(2),
    .team__member:nth-child(4) {
      flex-direction: row-reverse;
    }
  }
}
</style>

note : the commented codes are for the jsonfile storing all details conatin the
cards, i used vuex instead of the json file
