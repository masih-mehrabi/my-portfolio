const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
	env: {
		mongodb_username: 'masihmehrabi',
		mongodb_password: 'ePe3P12JYdqqVBgF',
		mongodb_clustername: 'cluster0',
    mongodb_database: 'dev-data'
    }
  }
}
  return {
    reactStrictMode: true,
	env: {
		mongodb_username: 'masihmehrabi',
		mongodb_password: 'ePe3P12JYdqqVBgF',
		mongodb_clustername: 'cluster0',
    mongodb_database: 'prod_data'
	},
  }
};

module.exports = nextConfig;
