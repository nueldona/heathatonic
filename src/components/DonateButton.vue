<template>
  <div class="layout">
    <h1>Select states to see phcs in need</h1>

    <main>
      <section class="firstRowState">
        <button
          v-on:click="makeActive"
          :class="{ active: IsActive }"
          class="btn btn-sm"
          v-for="(firstRowState, i) in firstRowStates"
          :key="i"
        >
          {{ firstRowState.state }}
        </button>
      </section>
      <section class="secondRowState">
        <button
          v-on:click="makeActive"
          :class="{ active: IsActive }"
          class="btn btn-sm"
          v-for="(secondRowState, i) in secondRowStates"
          :key="i"
        >
          {{ secondRowState.state }}
        </button>
      </section>
      <section class="thirdRowState">
        <button
          v-on:click="makeActive"
          :class="{ active: IsActive }"
          class="btn btn-sm"
          v-for="(thirdRowState, i) in thirdRowStates"
          :key="i"
        >
          {{ thirdRowState.state }}
        </button>
      </section>
      <section class="fourthRowState">
        <button
          v-on:click="makeActive"
          :class="{ active: IsActive }"
          class="btn btn-sm"
          v-for="(fourthRowState, i) in fourthRowStates"
          :key="i"
        >
          {{ fourthRowState.state }}
        </button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstRowStates: [
        {
          id: 1,
          state: "Abuja"
        },
        {
          id: 2,
          state: "Abia"
        },
        {
          id: 3,
          state: "Adamawa"
        },
        {
          id: 4,
          state: "Akwa Ibom"
        },
        {
          id: 5,
          state: "Anambra"
        },
        {
          id: 6,
          state: "Bauchi"
        },
        {
          id: 7,
          state: "Bayelsa"
        },
        {
          id: 8,
          state: "Benue"
        },
        {
          id: 9,
          state: "Borno"
        },
        {
          id: 10,
          state: "Cross River"
        }
      ],
      secondRowStates: [
        {
          id: 1,
          state: "Delta"
        },
        {
          id: 2,
          state: "Ebonyi"
        },
        {
          id: 3,
          state: "Edo"
        },
        {
          id: 4,
          state: "Ekiti"
        },
        {
          id: 5,
          state: "Imo"
        },
        {
          id: 6,
          state: "Jigawa"
        },
        {
          id: 7,
          state: "Kaduna"
        },
        {
          id: 8,
          state: "Kano"
        },
        {
          id: 9,
          state: "Katsina"
        }
      ],
      thirdRowStates: [
        {
          id: 1,
          state: "Kebi"
        },
        {
          id: 2,
          state: "Kogi"
        },
        {
          id: 3,
          state: "Kwara"
        },
        {
          id: 4,
          state: "Lagos"
        },
        {
          id: 5,
          state: "Nasarawa"
        },
        {
          id: 6,
          state: "Niger"
        },
        {
          id: 7,
          state: "Ogun"
        },
        {
          id: 8,
          state: "Ondo"
        },
        {
          id: 9,
          state: "Osun"
        }
      ],
      fourthRowStates: [
        {
          id: 1,
          state: "Oyo"
        },
        {
          id: 2,
          state: "Plateau"
        },
        {
          id: 3,
          state: "Rivers"
        },
        {
          id: 4,
          state: "Sokoto"
        },
        {
          id: 5,
          state: "Taraba"
        },
        {
          id: 6,
          state: "Yobe"
        },
        {
          id: 7,
          state: "Zamfara"
        }
      ],
      IsActive: false
    };
  },
  methods: {
    makeActive: function() {
      this.IsActive = !this.IsActive;
    }
  },
  // computed : {
    
  // }
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/mixins.scss";

h1 {
  @include text__sm();
  font-size: 0.8rem;
  color: $secondaryColor;
  opacity: 1;
  text-align: center;
}

.btn-sm {
  width: 5.3rem;
  height: 2.313rem;
  background: #f9f9fb 0% 0% no-repeat padding-box;
  border-radius: 30px;
  font-size: 0.7rem;
  outline: none;
  margin-top: 1rem;
}

.active {
  color: #fba91d;
  background: #fff4e2 0% 0% no-repeat padding-box;
}

main {
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  display: flex;
}

// tablet
@include mediaMd {
  main {
    display: flex;
  }
}

// big tablet
@include mediaLg {
  .btn-sm {
    width: 3.7rem;
    height: 1.9rem;
    font-size: 0.45rem;
    margin-left: 0.4rem;
    margin-top: 0rem;
  }
  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    section {
      margin-top: 1rem;
    }
    .firstRowState {
      grid-column: 1 / 13;
    }
    .secondRowState {
      grid-column: 2 / 13;
      margin-left: 0.5rem;
    }
    .thirdRowState {
      grid-column: 2 / 13;
      margin-left: 0.5rem;
    }
    .fourthRowState {
      grid-column: 3 / 12;
      margin-left: 1.2rem;
    }
  }
}

// small desktop
@include altmediaLg {
  .btn-sm {
    margin-top: 0rem;
    margin-left: 0.5rem;
  }

  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    section {
      margin-top: 1rem;
    }
    .firstRowState {
      grid-column: 1 / 13;
    }
    .secondRowState {
      grid-column: 2 / 13;
      margin-left: 0.8rem;
    }
    .thirdRowState {
      grid-column: 2 / 13;
      margin-left: 0.8rem;
    }
    .fourthRowState {
      grid-column: 3 / 12;
      margin-left: 1.6rem;
    }
  }
}

// desktop

@include mediaXl() {
  .btn-sm {
    margin-top: 0rem;
    margin-left: 1.5rem;
  }

  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    section {
      margin-top: 1rem;
    }
    .firstRowState {
      grid-column: 1 / 13;
    }
    .secondRowState {
      grid-column: 2 / 13;
      margin-left: 1rem;
    }
    .thirdRowState {
      grid-column: 2 / 13;
      margin-left: 1rem;
    }
    .fourthRowState {
      grid-column: 3 / 12;
      margin-left: 1.8rem;
    }
  }
}
</style>
