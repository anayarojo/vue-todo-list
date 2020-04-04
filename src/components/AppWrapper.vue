<template>
    <div class="app-wrapper" :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AppWrapper',
  props: {
    footerSize: {
        type: String,
    },
    className: {
        type: String,
        default: '',
    }
  },
  computed: {
      computedClass() {
          return `pb-${this.footerSize} ${this.className}`.trim();
      }
  },
};
</script>
