<template>
  <div>
    <router-link
      to="/versionA"
      class="
        text-white
        bg-clip-text
        text-transparent
        bg-gradient-to-r
        from-white
        to-slate-400/90
        dark:bg-gradient-to-r dark:from-sky-500 dark:to-pink-300
      "
      >Versão A</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>