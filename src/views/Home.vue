<template>
  <div>
    <div class="container mx-auto text-center py-5">
      <h1 class="font-bold text-2xl mb-3 md:mb-10">Search Page</h1>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/3">
        <FormFilter />
      </div>
      <div v-if="errorStatus" class="w-full md:w-3/5 foo">
        <div class="text-center">
          <h2 class="font-bold">
            Ooops! Something went wrong. Try again please :(
          </h2>
        </div>
      </div>
      <div v-if="!errorStatus" class="w-full md:w-3/5">
        <div
          v-if="!loading && getCarsList.length >= 1"
          class="
            p-8
            md:p-0
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            2xl:grid-cols-4
            gap-1
          "
        >
          <CardProduct
            class="products"
            v-for="carData in getCarsList"
            :key="carData.id"
            :carsList="carData"
          />
        </div>
        <div v-if="!loading && getCarsList.length <= 0" class="p-8 md:p-0">
          <div class="text-center">
            <h2 class="font-bold">
              Oh no! We couldn´t find a result for your search.
            </h2>
            <button
              @click.prevent="resetSearch"
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                mt-2
                rounded
              "
            >
              Search again
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormFilter from "@/components/FormFilter";
import CardProduct from "@/components/CardProduct";

export default {
  name: "Home",
  components: {
    FormFilter,
    CardProduct,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    this.$store.dispatch("getCars");
    this.loading = false;
  },
  methods: {
    resetSearch() {
      this.$store.dispatch("getCars");
    },
  },
  computed: {
    getCarsList() {
      return this.$store.state.carsList;
    },
    errorStatus() {
      return this.$store.state.error;
    },
  },
};
</script>
