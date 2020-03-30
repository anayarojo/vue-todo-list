<template>
  <div id="app" class="w-full min-h-screen bg-gray-100">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'Your Website';
      },
      immediate: true,
    },
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: auto;
}
</style>
