<template>
  <div class="mx-10 pt-15">
    <div class="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs">
      <h4 class="mb-4 font-semibold">Colored card</h4>
      <p>
        {{ allFeedback[0].productsId.productId }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
     allFeedback:[],
     urlFeedback:`https://walkincloset.ddns.net/backend/Feedback/GetFeedback/`
    };
  },
  created() {
    this.fetchFeedback();
    console.log(this.allFeedback)
    console.log(this.$route)
  },
  methods: {
      
    fetchFeedback() {
      axios
        .get(this.urlFeedback)
        .then((res) => {
          this.allFeedback = res.data;
          console.log(this.allFeedback);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>