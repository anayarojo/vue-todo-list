<template>
  <div class="component-task-footer" :class="className">
      <div class="text-center mt-3">
          <p>¿Quieres guardar tus listas en la nube?</p>
          <template v-if="!logged">
          <p>
            <span>
              <el-link class="-mt-1 text-base" type="primary" @click="$router.push('register')">
                Regístrate
              </el-link>
            </span>
            o
            <span>
              <el-link class="-mt-1 text-base" type="primary" @click="$router.push('login')">
                Inicia sesión
              </el-link>
            </span>
          </p>
        </template>
        <template v-else>
          <p>
            <span>
              <el-link class="-mt-1 text-base" type="primary" @click="$router.push('dashboard')">
                Ir al dashboard
              </el-link>
            </span>
          </p>
        </template>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ComTaskFooter',
  props: {
    logged: {
        type: Boolean,
    },
    className: {
      type: String,
    },
  },
};
</script>
