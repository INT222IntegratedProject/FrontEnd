<template>
  <nav class="bg-gray-100 fixed inset-x-0 z-10">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <a
              href="/"
              class="
                flex
                items-center
                py-5
                px-2
                text-gray-700
                hover:text-gray-900
              "
            >
              <i class="bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400"></i>
              <span class="font-bold">Walk in Closet</span>
            </a>
          </div>
          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              href="/product"
              class="
                py-5
                px-3
                text-gray-700
                hover:text-gray-900 hover:underline
              "
              >Store</a
            >
            <a
              href="/product/Women"
              class="
                py-5
                px-3
                text-gray-700
                hover:text-gray-900 hover:underline
              "
              >Women</a
            >
            <a
              href="/product/Men"
              class="
                py-5
                px-3
                text-gray-700
                hover:text-gray-900 hover:underline
              "
              >Men</a
            >
            <a
              href="/about"
              class="
                py-5
                px-3
                text-gray-700
                hover:text-gray-900 hover:underline
              "
              >About Us</a
            >
          </div>
        </div>
        <!-- secondary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="/login" class="py-5 px-3">Login</a>
          <a
            href="/register"
            class="
              py-2
              px-3
              bg-indigo-500
              text-white
              hover:bg-yellow-300
              text-sm
              hover:text-yellow-800
              rounded
              transition
              duration-300
            "
            >Sign up</a
          >
        </div>
        <!-- mobile button goes here -->
        <div class="md:hidden xl:hidden flex items-center">
          <button class="mobile-menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="mobile-menu hidden mobile">
      <a href="/product" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Store</a
      >
      <a href="/product/Women" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Women</a
      >
      <a href="/product/Men" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Men</a
      >
      <a href="/about" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >About Us</a
      >
    </div>
  </nav>
</template>

 <style>
#menu-toggle:checked + #menu {
  display: block;
}
@media screen and (max-width: 640px) {
  .mobile {
    align-self: center;
  }
}
</style>

  <script>
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
export default {};
</script>