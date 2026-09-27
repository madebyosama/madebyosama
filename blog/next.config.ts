import type { NextConfig } from 'next';
import { BASE_PATH } from './site.config';

const config: NextConfig = {
  // The blog lives at madebyosama.com/blog: the main site's vercel.json rewrites /blog/* to this app.
  basePath: BASE_PATH,
  // Pages re-render hourly on Vercel (for scheduled posts): ship the Markdown and images with them.
  outputFileTracingIncludes: {
    '/**': ['./content/**/*', './public/images/**/*', './assets/**/*'],
  },
};

export default config;
