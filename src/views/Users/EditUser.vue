<template>
  <based-navbar />
  <div class="py-28 px-10 min-h-screen">
    <!--   tip; mx-auto -- jagab ilusti keskele  -->
    <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
      <h2
        class="text-2xl md:text-3xl Barlow font-bold text-center Barlow-Medium"
      >
        Edit User
      </h2>
      <form action="">
        <!--       flex - asjad korvuti, nb! flex-1 - element kogu ylejaanud laius -->
        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="name"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >UserId</label
          >
          <input
            v-model="getUser.userId"
            type="text"
            id="name"
            name="name"
            placeholder="UserId"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Firstname</label
          >
          <input
            v-model="getUser.userFirstName"
            type="text"
            id="Firstname"
            name="Firstname"
            placeholder="Firstname"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Lastname</label
          >
          <input
            v-model="getUser.userLastname"
            type="text"
            id="Lastname"
            name="Lastname"
            placeholder="Lastname"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>
        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Username</label
          >
          <input
            v-model="getUser.userName"
            type="text"
            id="Username"
            name="Username"
            placeholder="Username"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Password</label
          >
          <input
            v-model="getUser.userPassword"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Email</label
          >
          <input
            v-model="getUser.userEmail"
            type="Email"
            id="Email"
            name="Email"
            placeholder="Email"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Phone</label
          >
          <input
            v-model="getUser.userTel"
            type="text"
            id="Phone"
            name="Phone"
            placeholder="Phone"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Address</label
          >
          <input
            v-model="getUser.userAddress"
            type="text"
            id="Address"
            name="Address"
            placeholder="Address"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="text-right">
          <button class="py-3 px-8 bg-green-400 text-white Barlow-Medium">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: "Barlow";
  src: url("/fonts/Barlow-ExtraLight.ttf");
}
.Barlow {
  font-family: Barlow;
}
@font-face {
  font-family: "Barlow-Medium";
  src: url("/fonts/Barlow-Medium.ttf");
}
.Barlow-Medium {
  font-family: Barlow-Medium;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      getUser: {
        userId: "",
        userFirstname: "",
        userLastname: "",
        userEmail: "",
        userName: "",
        userTel: "",
        userAddress: "",
        roleId: {
          roleId: "",
          roleName: "",
        },
      },
      userById: [],
    };
  },
  created() {
    this.fetchUsers();
    console.log(this.userById);
  },
  methods: {
    fetchUsers() {
      axios
        .get(`https://walkincloset.ddns.net/backend/Roles/GetRoles/`)
        .then((res) => {
          this.userById = res.data;
          console.log(this.userById);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
 
    editUser() {
      axios
        .put(this.urlEditProduct, this.getUser)
        .then((response) => {
          return response.data;
        })
        .then(() => {
          this.editPic();
        })
        .then(() => {
          window.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.getProduct);
    },
  },
};
</script>

