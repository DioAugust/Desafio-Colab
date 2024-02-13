import { Module } from '@nestjs/common'
import { RandomApiService } from './service/random-api.service'
import { HttpModule } from '@nestjs/axios'
import { RandomApiController } from './controller/random-api.controller'

@Module({
  imports: [HttpModule],
  providers: [RandomApiService],
  controllers: [RandomApiController],
})
export class RandomApiModule {}
