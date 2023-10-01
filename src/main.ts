import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import helmet from 'helmet'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableCors()
	app.use(helmet())

	app.setGlobalPrefix('api')
	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: '1',
	})

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			transform: true,
			forbidNonWhitelisted: true,
		}),
	)

	const config = new DocumentBuilder()
		.setTitle('Nest template API')
		.setDescription('Nest template API description')
		.setVersion('1.0.0')
		.addTag('health-check', 'Health check API')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('swagger', app, document)

	await app.listen(AppModule.port, '0.0.0.0')

	const appUrl = await app.getUrl()
	console.log(`Server is running on: ${appUrl}`)
	console.log(`Swagger is running on: ${appUrl}/swagger`)
}
bootstrap()
