const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@config': path.resolve(__dirname, 'src/config/'),
        '@lib': path.resolve(__dirname, 'src/lib/'),
        '@router': path.resolve(__dirname, 'src/router/'),
        '@store': path.resolve(__dirname, 'src/store/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@views': path.resolve(__dirname, 'src/views/'),
        '@atoms': path.resolve(__dirname, 'src/atoms/'),
        '@molecules': path.resolve(__dirname, 'src/molecules/'),
        '@organisms': path.resolve(__dirname, 'src/organisms/'),
        '@templates': path.resolve(__dirname, 'src/templates/'),
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  },
});
