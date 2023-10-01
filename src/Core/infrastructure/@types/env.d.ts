interface EnvVar {
	PORT: number
	NODE_ENV: ProcessEnv
}

type ProcessEnv = 'production' | 'dev' | 'test'
