<template>
    <div class="app-content w-full min-h-screen relative" :class="className">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AppContent',
  props: {
    className: {
        type: String,
        default: '',
    }
  },
};
</script>
