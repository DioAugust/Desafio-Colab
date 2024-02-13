import { Module } from '@nestjs/common'
import { RandomApiModule } from './app/random-api/random-api.module'

@Module({
  imports: [RandomApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
