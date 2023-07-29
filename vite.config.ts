import react from '@vitejs/plugin-react';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';
import { defineConfig } from 'vite';

/**
 * @ref https://www.youtube.com/watch?v=Sgcfiow4fVQ
 */
type ViteConfigInput = {
  mode: 'development' | 'production';
  command: 'build' | 'serve';
};

// https://vitejs.dev/config/
export default (args: ViteConfigInput) => {
  const generateScopedName =
    args.mode === 'production' ? '[hash:base64:5]' : '[local]_[hash:base64:5]';

  return defineConfig({
    plugins: [react(), reactScopedCssPlugin()],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName,
      },
    },
  });
};
