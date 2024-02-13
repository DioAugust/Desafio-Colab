import { Module } from '@nestjs/common'
import { RandomApiService } from './service/random-api.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  providers: [RandomApiService],
})
export class RandomApiModule {}
