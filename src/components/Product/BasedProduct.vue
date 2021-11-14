<template>
  <body
    class="
      bg-white
      text-gray-600
      work-sans
      leading-normal
      text-base
      tracking-normal
    "
  >
    <!-- Product -->
    <section class="bg-white py-8">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" class="w-full top-0 px-6">
          <div
            class="
              w-full
              container
              mx-auto
              flex flex-wrap
              items-center
              justify-between
              mt-0
              px-2
              py-3
            "
          ></div>
          <based-second />
        </nav>

         <div
          class="w-full md:w-2/4 xl:w-1/4 p-16 flex flex-col"
          v-for="product in allProductData"
          :key="product.id"
          :product="product"
        >
          
            <img
              class="hover:grow hover:shadow-lg w-72 h-72 object-cover"
              :src="`http://20.184.16.98:3000/Images/Get/${product.productId}.jpg`"
              @click="emitShow(product.productId)"
            />
            <div class="space-y-2">
            <p class="text-gray-900 font-bold text-xl Barlow pt-4">
              {{ product.productName }}
            </p>
            <p class="text-md Barlow font-bold">{{product.brandId.brandName}}</p>
            <div class="space-x-2">
              <color-block
                width="w-6"
                height="h-6"
                v-for="color in product.productColors"
                :key="color.colorId"
                :codeColor="color.codeColor"
                class="border border-black"
              />
            </div>
            <p class="text-gray-900 text-2xl Barlow-Medium">
              {{ product.productPrice }} THB
            </p>
            </div>
        </div>
      </div>
    </section>
  </body>
</template>
<style>
.work-sans {
  font-family: "Work Sans", sans-serif;
}
.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

@font-face {
  font-family: "Barlow";
  src: url("../../fonts/Barlow-ExtraLight.ttf");
}
.Barlow {
  font-family: Barlow;
}
@font-face {
  font-family: "Barlow-Medium";
  src: url("../../fonts/Barlow-Medium.ttf");
}
.Barlow-Medium {
  font-family: Barlow-Medium;
}
</style>


<script>
import axios from "axios";
import ColorBlock from "../../components/Decorate/ColorBlock.vue";
import BasedSecond from "../Navbar/SecondNavbar.vue";
export default {
  components: {
    ColorBlock,
    BasedSecond,
  },
  data() {
    return {
      search: "",
      urlAllProduct: "http://20.184.16.98:3000/Products/GetProducts",
      allProductData: [],
    };
  },
  props: ["product"],
  created() {
    this.fetchProduct();
    
  },
  methods: {
    fetchProduct() {
      axios
        .get(this.urlAllProduct)
        .then((res) => {
          this.allProductData = res.data;
          console.log(this.allProductData);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
