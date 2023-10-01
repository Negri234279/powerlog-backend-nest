export default (): EnvVar => ({
	PORT: parseInt(process.env.PORT) || 3000,
	NODE_ENV: (process.env.NODE_ENV as ProcessEnv) || 'dev',
})
