<template>
    <div id="layout" class="app-layout w-full min-h-screen bg-gray-100 p-5" :class="className">
        <div class="container">
          <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppLayout',
  props: {
    className: {
        type: String,
        default: '',
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>
