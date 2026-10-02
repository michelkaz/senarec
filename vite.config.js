import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// En dev, sert /api/* avec le même code que les fonctions Vercel.
function devApi(env) {
  return {
    name: 'dev-api',
    configureServer(server) {
      Object.assign(process.env, env);
      for (const route of ['/api/contact', '/api/newsletter']) {
        server.middlewares.use(route, async (req, res) => {
          const { default: handler } = await server.ssrLoadModule(`.${route}.js`);
          handler(req, res);
        });
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), devApi(loadEnv(mode, process.cwd(), ''))],
}));
