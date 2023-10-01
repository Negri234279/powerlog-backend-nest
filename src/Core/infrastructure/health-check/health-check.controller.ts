import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('health-check')
@Controller('health-check')
export class HealthCheckController {
	@Get()
	@ApiOperation({ summary: 'Check the health of the application' })
	@ApiResponse({ status: 200, description: 'The application is healthy' })
	healthcheck(): string {
		return 'OK'
	}
}
