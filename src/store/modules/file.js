const state = {
  // async fetchTeamDetails() {
  //   // eslint-disable-next-line no-unused-vars
  //   const res = await fetch("teamDetails.json");
  //   // eslint-disable-next-line no-unused-vars
  //   console.log(res.data);
  //   const val = await res.json();
  //   this.team__members = val;
  // },

  team__members: [
    {
      id: 1,
      img: "AKINOA-SAMUEL.png",
      title: "Akinola Samuel",
      position: "POSITION IN COMPANY",
      details:
        "He is a Tony Elumelu Foundation entrepreneur who is passionate towards using technology to develop indigenous solutions to various problems faced in Africa. One of his earnest cravings is to see a great transformation in the health care service delivery. He is currently a Master’s student at the University of Bremen, Germany where he is researching on adaptable bio-medical solutions"
    },
    {
      id: 2,
      img: "BeautyPlus_20190719165830502_save.png",
      title: "Ogundeji Toyin Emmmanuel",
      position: "POSITION IN COMPANY",
      details:
        "With a passion for human development through technological innovations aimed at operations excellence in health care delivery a passion was ignited, and become his religion which he lives by, believing that life can be made better for all. He has a certification in Project Management from the Chartered Institute for Project Management (CIPM) and a graduate of Product Design from Product School USA, with years of experience in diverse facets to business development."
    },
    {
      id: 3,
      img: "20200125_111307.png",
      title: "Owoso Samuel Dayo",
      position: "POSITION IN COMPANY",
      details:
        "Super excited about the idea of solving problems with design, he is an ardent product designer. He relish creating user centered designs (solutions) through creative design thinking process and research. With early experience in the health industry he is passionate about using his design to improve primary health care delivery in Nigeria. He is a graduate of FUTA and has a certificate in building digital products from Product school."
    },
    {
      id: 4,
      img: "20200524_144257.png",
      title: "Ajari Emmanuel Erimejivwo",
      position: "PRODUCT MANAGER",
      details:
        "A purpose driven and focused millennial, who is passionate about deriving better ways of using technology to solve pressing challenges. He is an astute embedded systems engineer and firmware developer with quality experience in AI and Machine learning solutions, product development and technology product management. A graduate of UNIBEN who participated in the Shell Ecomarathon project (ECOTUKETUKE Car)."
    },
    {
      id: 5,
      img: "20200603_145156.png",
      title: "Akinola Sarah Funmilayo",
      position: "HHHH",
      details:
        "As an Environmentalist and a lover of life, she is driven by so much passion and ingenuity towards healthy life, thereby committed to the goal of achieving standardized primary health care service across her nation. Her outstanding and unrelenting contributions to this course are applaudable through her professionalism in Health data analysis, as well as her pragmatic problem-solving tactics."
    }
  ]
};

const getters = {};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
