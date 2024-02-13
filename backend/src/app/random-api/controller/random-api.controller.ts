import { Controller, Get, Param } from '@nestjs/common'
import { RandomApiService } from '../service/random-api.service'
import { RandomUserInterface } from '../interface/get-users.interface'

@Controller('api')
export class RandomApiController {
  private cachedUsers: RandomUserInterface[] | null = null
  constructor(private readonly randomApiService: RandomApiService) {}

  @Get('/getUsers')
  async getUsers() {
    if (this.cachedUsers) {
      return this.cachedUsers
    }
    const result = await this.randomApiService.getRandomUsers()
    this.cachedUsers = result
    console.log(this.cachedUsers)
    return this.cachedUsers
  }

  @Get('/freshUsers')
  async freshUsers() {
    const result = await this.randomApiService.getRandomUsers()
    this.cachedUsers = result
    return result
  }

  @Get('/getUser/:id')
  async getUser(@Param('id') id: string) {
    if (!this.cachedUsers) {
      this.cachedUsers = await this.randomApiService.getRandomUsers()
    }

    const user = this.cachedUsers.find((user) => user.login.uuid === id)
    if (!user) {
      message: 'User not found'
    }
    return user
  }
}
