<template>

</template>

<style scoped>
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
import axios from 'axios';
export default {
    data(){
        return{
            blogs:[],
            search:''
        }
    },
    created() {
      axios.get('https://walkincloset.ddns.net/backend/Products/GetProducts').then(function(data){
           this.blogs = data.body.slice(0,10);
       })
    },
    computed:{
        filteredBlogs(){
            return this.blog.filter((blog) => {
                return blog.title.match(this.search)
            })
        }
    }
}
</script>