

    <template>
  <div>
    <div
      id="theme"
      class="flex h-screen w-screen shrink bg-gray-100 dark:bg-black"
    >
      <aside
        id="sidemenu"
        class="
          flex flex-col
          dark:bg-gray-900 dark:text-gray-200
          bg-gray-200
          text-gray-700
        "
      >
        <div class="flex flex-col items-center justify-start h-24 w-24 shrink">
          <div
            class="
              flex flex-col
              items-center
              justify-center
              w-16
              h-16
              relative
              shrink
            "
          >
            <img src="images/logo.png" />
          </div>
        </div>
        <ul class="flex-grow overflow-y-auto">
          <li
            v-for="(menu, key) in menu"
            :key="key"
            class="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <a
              href="/"
              class="
                flex flex-col
                justify-center
                items-center
                h-24
                w-24
                text-gray-600
                dark:text-gray-200
              "
            >
              {{ menu.Icon }}

              <span class="text-xs text-center">{{ menu.Text }}</span>
            </a>
          </li>
        </ul>
        <div class="flex flex-col items-strech justify-center">
          <div
            class="flex flex-col items-center justify-center w-16 h-16 relative"
          >
            <p>v1.0</p>
          </div>
        </div>
      </aside>
      <div class="flex flex-col w-full bg-gray-300">
        <div class="flex shrink w-full p-2">
          <div class="flex flex-col w-full md:1/3 lg:2/5">
            <h1 class="font-black text-3xl text-gray-900 dark:text-gray-100">
              Versão A - Menu Lateral - Menu local
            </h1>
            <h2 class="text-gray-700 dark:text-gray-200">Sub descrição</h2>
          </div>
          <div class="flex justify-end w-full md:2/3 lg:3/5">
            <div class="flex justify-end items-center shrink">
              <a
                href="/user"
                class="
                  flex
                  justify-center
                  items-center
                  hover:bg-white
                  p-2
                  rounded-full
                "
              >
                <span class="mr-3">Nome do usuário</span>
                <img
                  src="images/avatar.svg"
                  alt="Avatar"
                  class="h-10 w-10 rounded-full cursor-pointer"
                />
              </a>
            </div>
            <div class="flex justify-end items-center shrink">
              <a
                class="
                  flex flex-col
                  justify-center
                  items-center
                  text-gray-600
                  dark:text-gray-200
                  text-red-600
                  hover:bg-red-400
                  rounded-full
                  cursor-pointer
                  hover:text-white
                  dark:text-red-400 dark:hover:text-white
                  p-4
                  ml-2
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="flex shrink w-full p-2">
          <div class="flex flex-col w-full">
            <ul class="flex">
              <li>
                <a
                  href="/"
                  class="
                    flex flex-col
                    justify-center
                    items-center
                    rounded-lg
                    p-2
                    mr-2
                    bg-gray-50/25
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                    text-gray-600
                    dark:text-gray-200
                  "
                >
                  <span class="text-xs text-center"> Submenu </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="
                    flex flex-col
                    justify-center
                    items-center
                    rounded-lg
                    p-2
                    mr-2
                    bg-gray-50/25
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                    text-gray-600
                    dark:text-gray-200
                  "
                >
                  <span class="text-xs text-center"> Submenu </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="
                    flex flex-col
                    justify-center
                    items-center
                    rounded-lg
                    p-2
                    mr-2
                    bg-gray-50/25
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                    text-gray-600
                    dark:text-gray-200
                  "
                >
                  <span class="text-xs text-center"> Submenu </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="flex flex-col p-2 bg-gray-100 dark:text-white overflow-y-auto"
        >
          <p>Conteúdo</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import routes from "@/router/path";

export default {
  name: "versionA",
  props: {},
  data() {
    return {
      menu: routes,
    };
  },
  methods: {},
};
</script>
<style scoped>
</style>