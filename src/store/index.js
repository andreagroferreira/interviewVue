import { createStore } from "vuex";
import Api from "@/services/Api.js";

export default createStore({
  state: {
    carsList: [],
    likesList: JSON.parse(localStorage.getItem("likes")) || [],
    unit: "Km",
    totalResults: 0,
    error: false,
  },
  mutations: {
    GET_LIST_CARS(state, cars) {
      state.carsList = cars;
      state.totalResults = cars.length;
    },
    SET_LIKES_LIST(state, likes) {
      state.likesList.push(likes);
      localStorage.setItem("likes", JSON.stringify(state.likesList));
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_CONVERT_KM_MILE(state, unit) {
      state.unit = unit;
    },
  },
  actions: {
    getCars({ commit }) {
      Api.getCarsList()
        .then((response) => {
          commit("GET_LIST_CARS", response.data);
        })
        .catch((error) => {
          commit("SET_ERROR", true);
          //TODO: register error on db or services like Bugsnag
          console.log(error);
        });
    },
    setLike({ commit, state }, carId) {
      const findCar = state.carsList.find((car) => car.id === carId);

      if (findCar) {
        commit("SET_LIKES_LIST", findCar);
      }
    },
    convertedKmToMiles({ commit, state }, converted) {
      const factor = 0.621371;
      if (converted === "km") {
        state.carsList.map((obj) => {
          obj.km = obj.km * factor;
        });
        commit("SET_CONVERT_KM_MILE", "Miles");
      } else {
        state.carsList.map((obj) => {
          obj.km = parseFloat((obj.km / factor).toFixed(2));
        });
        commit("SET_CONVERT_KM_MILE", "Km");
      }
    },
    searchCars({ commit, state }, serchTerms) {
      const existsCar = state.carsList.filter((cars) => {
        if ("version" in cars) {
          return (
            cars.model.toLocaleLowerCase().includes(serchTerms.toLowerCase()) ||
            cars.make.toLowerCase().includes(serchTerms.toLowerCase()) ||
            cars.version.toLowerCase().includes(serchTerms.toLowerCase())
          );
        } else {
          return (
            cars.model.toLocaleLowerCase().includes(serchTerms.toLowerCase()) ||
            cars.make.toLowerCase().includes(serchTerms.toLowerCase())
          );
        }
      });

      if (serchTerms === "") {
        this.dispatch("getCars");
      } else {
        commit("GET_LIST_CARS", existsCar);
      }
    },
  },
  modules: {},
});
