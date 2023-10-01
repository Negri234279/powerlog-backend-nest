import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import configuration from './Core/infrastructure/configs/configuration'
import { HealthCheckModule } from './core/infrastructure/health-check/health-check.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		}),
		HealthCheckModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {
	static port: number

	constructor(private readonly configService: ConfigService<EnvVar>) {
		AppModule.port = this.configService.get<number>('PORT')
	}
}
