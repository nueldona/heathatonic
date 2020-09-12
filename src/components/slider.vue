<template>
  <div id="layout">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i"></div>
    </transition-group>
    <section class="main">
      <section class="header">
        <p>Donate today</p>
        <!-- <a href="#" class="prev" @click="prev">&#10094; Previous</a>
        <a href="#" class="prev" @click="next">&#10095; Next</a> -->
      </section>
      <section class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="#" class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        require("@/assets/NoPath - Copy (14).png"),
        require("@/assets/NoPath - Copy (14).png"),
        require("@/assets/NoPath - Copy (14).png"),
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
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
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
  height: 600px;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.main {
  max-width: 574px;
  height: 100%;
  border: 2px dashed $btnColor;
  border-radius: 10px;

  .header {
    padding: 1.3rem 2rem;
    p {
      @include text__md();
      // color: #fff;
      margin-bottom: 0rem;
    }
  }
}
</style>
