

    <template>
  <div>
    <div class="flex justify-center items-center h-screen hidden">
      <img src="images/loading.gif" alt="Carregando..." />
    </div>
    <div id="theme" class="flex h-screen w-screen">
      <aside
        id="sidemenu"
        class="
          flex flex-col
          dark:bg-gray-900 dark:text-gray-200
          bg-gray-200
          text-gray-700
        "
      >
        <div class="flex flex-col items-center justify-center h-24 w-24">
          <div
            class="flex flex-col items-center justify-center w-16 h-16 relative"
          >
            <img src="images/logo.png" />
          </div>
        </div>
        <ul class="flex-grow overflow-y-auto">
          <li class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <a
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-xs text-center"> Configurações </span>
            </a>
          </li>
          <li class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <a
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-xs text-center"> Configurações </span>
            </a>
          </li>
          <li class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <a
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-xs text-center"> Configurações </span>
            </a>
          </li>
          <li class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <a
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-xs text-center"> Configurações </span>
            </a>
          </li>
        </ul>
      </aside>
      <div class="flex flex-col w-full pt-6 pl-6 bg-gray-300 dark:bg-gray-800">
        <div class="flex">
          <div>
            <h1 class="font-black text-3xl text-gray-900 dark:text-gray-100">
              Admin
            </h1>
            <h2 class="text-gray-600 dark:text-gray-200">Template Index</h2>
          </div>
          <div class="flex flex-grow justify-end items-center pr-6">
            <a
              href="/user"
              class="
                ml-3
                flex
                justify-center
                items-center
                hover:bg-white
                rounded-full
                p-3
              "
            >
              <span class="mr-3">Nome do usuário</span>
              <img
                src="images/avatar.svg"
                alt="Avatar"
                class="h-10 w-10 rounded-full cursor-pointer"
              />
            </a>

            <a
              class="
                flex flex-col
                justify-center
                items-center
                h-16
                w-16
                text-gray-600
                dark:text-gray-200
                text-red-600
                hover:bg-red-400
                rounded-full
                cursor-pointer
                hover:text-white
                dark:text-red-400 dark:hover:text-white
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
        <div
          class="
            flex flex-col
            mt-7
            pr-6
            pb-6
            dark:text-gray-200
            overflow-y-auto
          "
        >
          <p>Conteúdo</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "versionD",
  props: {},
};
</script>
<style scoped>
</style>