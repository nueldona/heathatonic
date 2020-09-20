<template>
  <transition :name="direction" mode="in-out">
    <div
      id="carouselSlides"
      v-show="visibleSlide === index"
      class="carousel-Slides"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["visibleSlide", "index", "direction"]
};
</script>

<style>
.carousel-Slides {
  overflow: hidden;
}
.left-enter-active {
  overflow: hidden;
  animation: leftIn 0.4s ease-in forwards;
}
.left-leave-active {
  overflow: hidden;
  animation: leftOut 0s ease-out forwards;
}

@keyframes leftIn {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(0%);
  }
}

@keyframes leftOut {
  from {
    transform: translate(0%);
  }
  to {
    transform: translate(-100%);
  }
}

/* right */
.right-enter-active {
  overflow: hidden;
  animation: rightIn 0.4s ease-in forwards;
}
.right-leave-active {
  overflow: hidden;
  animation: rightOut 0s ease-out forwards;
}

@keyframes rightIn {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(0%);
  }
}

@keyframes rightOut {
  from {
    transform: translate(0%);
  }
  to {
    transform: translate(+100%);
  }
}
</style>
