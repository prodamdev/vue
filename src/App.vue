<template>
  <div id="app">
    <div class="bg-zinc-800">
      <div class="flex flex-col w-full h-full dark:bg-black">
        <div class="flex w-full p-2">
          <p class="text-2xl text-white font-semibold">
            <span
              class="
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-white
                to-zinc-200/90
                dark:bg-gradient-to-r dark:from-white dark:to-zinc-100
              "
            >
              Versões 2 de frontend para projetos - PRODAM 2022 - Vue 2
              [Tailwind + Vuetify]
            </span>
          </p>
        </div>

        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
@import "./assets/css/main.css";

#app {
}
</style>
