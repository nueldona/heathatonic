// import axios from "axios";

const state = {
  teamDetails: []
};

const getters = {
  allTeamDetails: state => state.teamDetails
};

const actions = {
  async fetchTeamDetails({ commit }) {
    // eslint-disable-next-line no-unused-vars
    const res = await fetch("teamDetails.json");
    // eslint-disable-next-line no-unused-vars
    console.log(res.data);
    // const val = await res.json();
    // this.team__members = val;

    commit("setTeamDetails", res.json());
  }
};

const mutations = {
  setTeamDetails: (state, teamDetails) => (state.teamDetails = teamDetails)
};

export default {
  state,
  getters,
  actions,
  mutations
};
