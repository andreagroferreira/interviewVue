<template>
  <div>
    <div class="md:w-11/12 mx-auto px-5">
      <div class="filter-wrapper p-5">
        <div class="header-filter text-left py-5 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
            />
          </svg>
          <h2 class="font-bold text-md">Filters</h2>
        </div>
        <div class="body-filter text-left py-5">
          <label
            class="block text-gray-700 text-md font-bold mb-2"
            for="search"
          >
            Search
          </label>
          <input
            class="
              border
              rounded
              w-full
              py-2
              px-3
              text-sm text-gray-800
              focus:outline-none focus:shadow-outline
            "
            id="search"
            type="text"
            v-model="searchTerm"
            @keyup="searchCar"
            placeholder="Search here"
          />
        </div>
        <div class="footer-filter text-left py-5">
          <h3 class="font-bold font-bold text-md mb-5">Unit of measure</h3>
          <div class="flex justify-between">
            <button
              @click.prevent="convert()"
              class="btn w-1/2 switch-unit mr-2"
              :class="!unitKm ? 'active' : ''"
            >
              Miles
            </button>
            <button
              @click.prevent="convert()"
              class="btn w-1/2 switch-unit"
              :class="unitKm ? 'active' : ''"
            >
              Km
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormFilter",
  data() {
    return {
      searchTerm: null,
      unitKm: true,
    };
  },
  methods: {
    convert() {
      if (this.unitKm) {
        this.$store.dispatch("convertedKmToMiles", "km");
        this.unitKm = false;
      } else {
        this.$store.dispatch("convertedKmToMiles", "miles");
        this.unitKm = true;
      }
    },
    searchCar() {
      this.$store.dispatch("searchCars", this.searchTerm);
    },
  },
};
</script>

<style scoped>
.header-filter svg {
  transform: rotateZ(90deg);
  margin-top: 2px;
  margin-right: 9px;
}
.filter-wrapper {
  border: 1px solid #cacbcd;
  box-sizing: border-box;
  border-radius: 4px;
}
.body-filter {
  border-top: 1px solid #cacbcd;
  border-bottom: 1px solid #cacbcd;
}
.switch-unit {
  font-size: 14px;
  font-weight: 400;
  color: #606164;
  height: 52px;
  line-height: 20px;
  border: 1px solid #cacbcd;
  box-sizing: border-box;
  border-radius: 4px;
}
.switch-unit.active {
  background-color: #313336;
  border: 1px solid #313336;
  color: #ffffff;
}
</style>
