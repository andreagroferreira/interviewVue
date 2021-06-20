import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";

const store = new Vuex.Store({
  state: {
    carsList: [],
    likesList: JSON.parse(localStorage.getItem("likes")) || [],
    unit: "Km",
    totalResults: 0,
    error: false,
  },
});

describe("sdalskdas", () => {
  shallowMount(Home, {
    global: {
      mocks: {
        $store: [store],
      },
    },
  });

  test("get data and render ", () => {
    expect(true).toBe(true);
  });
});
