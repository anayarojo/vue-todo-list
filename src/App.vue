<template>
  <div class="w-full min-h-screen bg-gray-100">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      // layout: 'div',
    };
  },
  created() {
    document.title = 'TODO';
  },
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
