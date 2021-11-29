<template>
  <based-navbar />
  <div
    class="pt-24 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8"
  >
    <div
      class="
        align-middle
        rounded-tl-lg rounded-tr-lg
        inline-block
        w-full
        py-4
        overflow-hidden
        bg-white
        shadow-lg
        px-12
      "
    >
      <div class="flex justify-between">
        <div
          class="
            inline-flex
            border
            rounded
            w-7/12
            px-2
            lg:px-6
            h-12
            bg-transparent
          "
        >
          <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
            <div class="flex">
              <span
                class="
                  flex
                  items-center
                  leading-normal
                  bg-transparent
                  rounded rounded-r-none
                  border border-r-0 border-none
                  lg:px-3
                  py-2
                  whitespace-no-wrap
                  text-grey-dark text-sm
                "
              >
                <svg
                  width="18"
                  height="18"
                  class="w-4 lg:w-auto"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                    stroke="#455A64"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.9993 16.9993L13.1328 13.1328"
                    stroke="#455A64"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <input
              type="text"
              class="
                flex-shrink flex-grow
                leading-normal
                tracking-wide
                w-px
                flex-1
                border border-none border-l-0
                rounded rounded-l-none
                px-3
                relative
                focus:outline-none
                text-xxs
                lg:text-xs
                text-gray-500
                font-thin
              "
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        align-middle
        inline-block
        min-w-full
        shadow
        overflow-hidden
        bg-white
        shadow-dashboard
        px-8
        pt-3
        rounded-bl-lg rounded-br-lg
      "
    >
      <table class="min-w-full">
        <thead>
          <tr>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              ID
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Fullname
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Username
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Email
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Phone
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Role
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Action
            </th>

            <th class="px-6 py-3 border-b-2 border-gray-300"></th>
          </tr>
        </thead>

        <!-- Column -->
        <tbody
          class="bg-white"
          v-for="user in allUserData"
          :key="user.id"
          :product="user"
        >
          <tr>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div class="flex items-center">
                <div>
                  <div class="text-sm leading-5 text-gray-800">
                    {{ user.userId }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-blue-900">
                {{ user.userFirstName + " " + user.userLastName }}
              </div>
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                border-b
                text-blue-900
                border-gray-500
                text-sm
                leading-5
              "
            >
              {{ user.userName }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                border-b
                text-blue-900
                border-gray-500
                text-sm
                leading-5
              "
            >
              {{ user.userEmail }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                border-b
                text-blue-900
                border-gray-500
                text-sm
                leading-5
              "
            >
              {{ user.userTel }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                border-b
                text-blue-900
                border-gray-500
                text-sm
                leading-5
              "
            >
              {{ user.roleId.roleName }}
            </td>

            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                text-right
                border-b border-gray-500
                text-sm
                leading-5
              "
            >
              <div class="flex item-center justify-center">
                <div
                  class="
                    w-4
                    mr-2
                    transform
                    hover:text-purple-500 hover:scale-110
                  "
                >
                  <svg
                    @click="showModal = true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <div
                  class="
                    w-4
                    mr-2
                    transform
                    hover:text-purple-500 hover:scale-110
                  "
                >
                  <svg
                    @click="deleteUser()"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="showModal">
        <div class="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
          <div class="flex justify-between border-b border-gray-100 px-5 py-4">
            <div>
              <i class="fa fa-exclamation-triangle text-orange-500"></i>
              <span class="font-bold text-gray-700 text-lg">Warning</span>
            </div>
            <div>
              <button>
                <i
                  class="
                    fa fa-times-circle
                    text-red-500
                    hover:text-red-600
                    transition
                    duration-150
                  "
                ></i>
              </button>
            </div>
          </div>

          <div class="px-10 py-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div class="px-5 py-4 flex justify-end">
            <button
              class="
                bg-orange-500
                mr-1
                rounded
                text-sm
                py-2
                px-3
                text-white
                hover:bg-orange-600
                transition
                duration-150
              "
            >
              Cancel
            </button>
            <button
              class="
                text-sm
                py-2
                px-3
                text-gray-500
                hover:text-gray-600
                transition
                duration-150
              "
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      allUserData: [],
      showModal: false,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      await axios
        .get("https://walkincloset.ddns.net/backend/Users/GetUsers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          this.allUserData = res.data;
          console.log(this.allUserData);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  deleteUser() {
    if (confirm("Do you want to delete this user?") === false) {
      return;
    }
    axios
      .delete(`https://walkincloset.ddns.net/backend/Roles/Delete/${this.id}`)
      .then((res) => {
        console.log(res);
        this.$router.push("/userlist");
      });
  },
  editUserAdmin() {},
};
</script>