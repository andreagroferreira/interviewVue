<template>
  <div>
    <div class="card-product m-2 pb-4">
      <div class="header-card">
        <div class="type-pilled">
          <span
            class="status-type"
            :class="carsList.type === 'USED' ? 'usedCar' : 'newCar'"
          ></span
          >{{ carsList.type }}
        </div>
        <img
          :src="carsList.image"
          :alt="carsList.make + '-' + carsList.model"
          :title="carsList.make + '-' + carsList.model"
        />
        <div class="dynamic-view">
          <svg
            width="34"
            height="20"
            viewBox="0 0 34 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.7917 6.73833C32.995 8.07667 33.6667 9.63 33.6667 10.7C33.6667 14.1714 27.0291 16.1263 20.3433 16.5978V19.225L17.0133 15.8867L20.3433 12.5467V14.9294C27.96 14.399 32 12.2056 32 10.7C32 9.92833 30.9333 9.02167 29.15 8.27667L29.7917 6.73833ZM13.8633 14.9417C6.53667 14.455 2 12.36 2 10.7C2 10.3583 2.20167 9.99333 2.6 9.615L1.45167 8.40667C0.710003 9.11333 0.333336 9.885 0.333336 10.7C0.333336 14.16 7.07334 16.16 13.7533 16.6067L13.8633 14.9417ZM29.1933 1.14167C28.8333 1.14167 28.7683 1.88667 28.7683 2.15167C28.7683 2.43167 28.8083 3.12167 29.1933 3.12167C29.5633 3.12167 29.6167 2.39167 29.6167 2.15167C29.6167 1.87333 29.5767 1.14167 29.1933 1.14167ZM29.1783 4.29C27.9167 4.29 27.2783 3.34667 27.2783 2.165C27.2783 0.996667 27.9167 0 29.1783 0C30.48 0 31.1067 0.97 31.1067 2.17833C31.1067 3.375 30.455 4.29 29.1783 4.29ZM23.6867 6.02333C23.6867 5.49333 23.6617 3.805 22.89 3.805C22.1467 3.805 22.1467 5.49333 22.1467 5.99833C22.1467 6.38333 22.16 6.76833 22.1983 7.15333C22.24 7.605 22.265 8.84167 22.9167 8.84167C23.6733 8.84167 23.6867 7.08833 23.6867 6.58333V6.02333ZM23.0117 10.915C20.485 10.915 19.795 8.31 19.795 6.25C19.795 4.25833 20.5383 1.73333 22.9567 1.73333C25.375 1.73333 26.0533 4.32333 26.0533 6.29167C26.0533 8.23 25.4283 10.915 23.0117 10.915ZM16.135 6.595C15.5517 6.595 15.47 7.34 15.47 7.77833C15.47 8.215 15.5367 9 16.135 9C16.7467 9 16.8133 8.19 16.8133 7.73833C16.8133 7.3 16.7067 6.595 16.135 6.595ZM16.52 4.41667C16.3883 4.65667 16.2417 4.88167 16.0817 5.10833C16.36 4.96167 16.6133 4.86833 16.9317 4.86833C18.38 4.86833 19.1117 6.43667 19.1117 7.69833C19.1117 9.545 17.915 10.915 16.0283 10.915C14.17 10.915 13.1333 9.46667 13.1333 7.71333C13.1333 5.85167 14.5267 3.52667 15.3783 1.89167H17.9433L16.52 4.41667ZM6.25167 4.41667C6.36834 2.795 7.48667 1.73333 9.12 1.73333C10.5817 1.73333 11.8833 2.78333 11.8833 4.31C11.8833 5.12 11.5117 5.77167 10.8067 6.17C11.6067 6.63667 11.99 7.31333 11.99 8.23C11.99 9.93 10.595 10.915 8.98834 10.915C7.405 10.915 6.07667 9.95667 6.07667 8.28333V8.15H8.41667C8.41667 8.54833 8.50834 8.94667 9.00167 8.94667C9.45334 8.94667 9.65334 8.52167 9.65334 8.12333C9.65334 7.525 9.27834 7.19333 8.69667 7.19333C8.55 7.19333 8.41667 7.20667 8.27 7.22V5.33333C8.36334 5.34667 8.46834 5.34667 8.56334 5.34667C9.2 5.34667 9.545 5.12 9.545 4.44333C9.545 4.11 9.425 3.71333 9.02667 3.71333C8.64167 3.71333 8.575 4.125 8.56334 4.41667H6.25167Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="description-card px-3 text-left">
        <h2 class="font-bold text-xs text-black mt-1 title-product">
          {{ carsList.make }} {{ carsList.model }}
        </h2>
        <p class="description-product" v-if="carsList.version">
          {{ carsList.version }}
        </p>
        <p class="description-product" v-else>Description not disponible</p>
        <span class="line-separator"></span>
      </div>
      <div class="content-card flex justify-between px-3">
        <p>
          <span class="sub-price">A partire da</span><br /><span
            class="price font-bold"
            >€ 24.500</span
          >
        </p>
        <button
          class="like-product mt-2 focus:outline-none focu:border-none"
          :class="likes.find((car) => car.id === carsList.id) ? 'active' : ''"
          @click.prevent="setLike(carsList.id, carsList.status)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".8"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div class="footer-card px-3 text-left mt-3">
        <div class="footer-content flex flex-nowrap p-2">
          <div>
            <h3 class="font-bold footer-title">
              {{ carsList.registrationYear }} - {{ carsList.km }}
              {{ unitConvert }}
            </h3>
            <p class="footer-description">
              Cons. Comb. Carburante: 418,1 l/100km - CO2: 147 g/km
            </p>
          </div>
          <div class="flex justify-center items-end">
            <div class="flag-class text-center">
              <span class="ml-2">A+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardProduct",
  props: {
    carsList: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      likes: this.$store.state.likesList,
    };
  },
  methods: {
    setLike(carId, status) {
      if (status === "FREE") {
        this.$store.dispatch("setLike", carId);
      }
    },
  },
  computed: {
    unitConvert() {
      return this.$store.state.unit;
    },
  },
};
</script>

<style scoped>
.active svg {
  fill: #f89f1c;
  stroke: #f89f1c;
}

.header-card {
  position: relative;
}
.header-card img {
  height: 189px;
  width: 100%;
  object-fit: cover;
}
.type-pilled {
  position: absolute;
  width: 61px;
  height: 24px;
  left: 8px;
  top: 8px;
  font-weight: bold;
  font-size: 12px;
  color: #313336;
  background: #ffffff;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.status-type {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  display: inline-block;
  margin-right: 4px;
  margin-top: -1px;
}
.newCar {
  background: #0c5e95;
}
.usedCar {
  background: #f89f1c;
}
.dynamic-view {
  position: absolute;
  left: 12px;
  bottom: 11px;
}
.flag-class {
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  width: 40px;
  height: 16px;
  background-color: #008f36;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
}
.card-product {
  border: 1px solid #cacbcd;
  box-sizing: border-box;
  border-radius: 4px;
}
.description-product {
  color: #606164;
  font-size: 14px;
  margin-top: -2px;
  font-family: "Hind", sans-serif;
}
.line-separator {
  width: 55px;
  height: 2px;
  display: block;
  background: #f89f1c;
  margin: 16px 2px;
}
.sub-price {
  font-size: 12px;
  color: #313336;
}
.like-product {
  width: 30px;
  height: 30px;
  border: 1px solid #cacbcd;
  border-radius: 100%;
}
.like-product svg {
  transition: all 0.3s;
}
.footer-title {
  font-weight: bold;
  font-size: 11px;
  line-height: 14px;
  font-family: "Hind", sans-serif;
}
.footer-content {
  background: #f1f1f2;
  border-radius: 2px;
}
.footer-description {
  font-weight: normal;
  font-size: 12px;
  color: #606164;
  font-family: "Hind", sans-serif;
}
</style>
