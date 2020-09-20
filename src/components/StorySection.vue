<template>
  <div class="hello w-100">
    <div class="section__title">
      <icon name="cross" class="cross__svg"></icon>
      <h1>{{ msg }}</h1>
      <p>
        Over the years, the deplorable state of PHCs in Nigeria has lead to
        their inadequacy to meet the increasing healthcare need of people in
        their community. Out of our desire to improve and ensure self
        sustainability of the phcs and standardizing their service delivery, we
        developed a model that utilizes community oriented collaboration.
        Healthatonic is a community-centered medical software solution. Our
        digital solution for PHC is designed to provide improved health care
        service to the people; bringing primary health care to the doorstep of
        every member of its host community.
      </p>
    </div>
    <div class="section__body container">
      <div class="row">
        <div class="col-md-4 col-lg-4">
          <img src="@/assets/NoPath - Copy (25).png" alt="doctor attendance" />
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="img-2">
            <img
              :srcset="`${photos.photo2_sm} 960w,${photos.photo2_lg} 480w`"
              alt="health center building"
              sizes="(max-width: 500px) 960w, 480w"
              src="@/assets/NoPath - Copy (19).png"
            />
          </div>
          <div class="img-3">
            <img
              :srcset="`${photos.photo1_sm} 960w,${photos.photo1_lg} 480w`"
              alt="text records"
              sizes="(max-width: 500px) 960w, 480w"
              src="@/assets/NoPath - Copy (24).png"
            />
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <img src="@/assets/NoPath - Copy (23).png" alt="examine" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let photos = {
  photo1_sm: require("@/assets/NoPath - Copy (24)@2x.png"),
  photo1_lg: require("@/assets/NoPath - Copy (24).png"),
  photo2_sm: require("@/assets/NoPath - Copy (19)@2x.png"),
  photo2_lg: require("@/assets/NoPath - Copy (19).png")
};
export default {
  name: "StorySection",

  props: {
    msg: String
  },

  computed: {
    photos() {
      return photos;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

.hello {
  position: relative;
  overflow: hidden;
  height: 100%;
  margin: 6em 0em;
  h1 {
    text-align: center;
    @include text__lg__bold();
  }

  p {
    @include text__sm();
    text-align: center;
    margin: 2.5rem auto;
  }
  .cross__svg {
    position: absolute;
    content: "";
    top: 5%;
    left: 50%;
    width: 22em;
    height: 3em;
    vertical-align: middle;
  }
}

.section__body {
  margin-top: 8rem;
  .img-2 {
    margin-bottom: 18px;
  }
}

/****************
 mobile
***************/
@include mediaSm {
  .hello {
    p {
      width: 90%;
    }

    .cross__svg {
      display: none;
    }
  }

  .section__body {
    .img-2,
    .img-3 {
      margin: 20px 0px 20px 0px;
    }
  }
}

// tablet
@include mediaMd {
  .hello {
    p {
      width: 80%;
    }

    .cross__svg {
      display: none;
    }
  }
}

/*********** 
big tabs
************/
@include mediaLg {
  .hello {
    p {
      width: 80%;
    }
  }
}

/**************
 desktop
**************/
@include mediaXl {
  .hello {
    p {
      max-width: 70%;
    }
    .cross__svg {
      top: 1% !important;
      left: 82% !important;
    }
  }
}

/***********
alt media
************/
@include altmediaXm {
  .hello {
    .cross__svg {
      top: 1% !important;
      left: 76% !important;
    }
  }
}

@include altmediaLg {
  .hello {
    p {
      max-width: 70% !important;
    }
    .cross__svg {
      top: 1% !important;
      left: 80% !important;
    }
  }
}
</style>
