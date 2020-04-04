<template>
    <div class="app-footer" :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'AppFooter',
  props: {
    size: {
        type: String,
    },
    className: {
        type: String,
        default: '',
    }
  },
  computed: {
      computedClass() {
          return `w-full h-${this.size} ${this.className}`.trim();
      }
  },
};
</script>

<style lang="scss">
.app-footer {
    position: absolute;
    bottom: 0;
}
</style>
