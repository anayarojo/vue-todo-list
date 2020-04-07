<template>
  <div class="error-404 p-5">
      <com-container>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
            <i class="el-icon-document-delete text-6xl block text-center"></i>
            <h1 class="font-bold text-6xl text-center">404</h1>
            <h3 class="font-medium text-2xl text-center">No se encontró la página</h3>
            </div>
            <p>La página que está buscando no existe o fue cambiada de lugar.
                <span>
                    <el-link class="-mt-1 text-base" type="primary" @click="$router.go(-1)">
                        Regresar
                    </el-link>
                </span>
                o
                <span>
                    <el-link class="-mt-1 text-base" type="primary" @click="$router.push({ name: 'Home' })">
                        Inicio
                    </el-link>
                </span>
            </p>
        </el-card>
      </com-container>
    <div class="container">
    </div>
  </div>
</template>

<script>
import ComContainer from '@/components/ComContainer';

  export default {
    name: 'Error404',
    components: {
        ComContainer,
    },
    data() {
      return {};
    },
    computed: {},
    methods: {},
  };
</script>
