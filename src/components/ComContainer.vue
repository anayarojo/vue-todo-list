<template>
  <div class="component-container" :class="className">
    <div class="xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-9/12 mt-5 mx-auto">
        <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ComContainer',
  props: {
    className: {
        type: String,
        default: '',
    }
  },
};
</script>
