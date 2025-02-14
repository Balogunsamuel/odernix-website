/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  experimental: {
    webpackBuildWorker: true,
  },
};

module.exports = nextConfig;
