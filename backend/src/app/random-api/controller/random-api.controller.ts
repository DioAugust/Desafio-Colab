import { Controller, Get } from '@nestjs/common'
import { RandomApiService } from '../service/random-api.service'

@Controller('api')
export class RandomApiController {
  constructor(private readonly randomApiService: RandomApiService) {}

  @Get('/getUsers')
  async getUsers() {
    const result = await this.randomApiService.getRandomUsers()
    console.log(result)
    return result
  }
}
