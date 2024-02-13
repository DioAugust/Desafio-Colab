import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { RandomUserInterface } from '../interface/get-users.interface'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class RandomApiService {
  private cachedUsers: RandomUserInterface[] | null = null
  constructor(private readonly httpService: HttpService) {}

  async getRandomUsers(): Promise<RandomUserInterface[]> {
    if (this.cachedUsers) {
      return this.cachedUsers
    }
    const response = await firstValueFrom(
      this.httpService.get<RandomUserInterface[]>(
        'https://randomuser.me/api?results=25&nat=br&exc=login,nat,registered&noinfo',
      ),
    )

    this.cachedUsers = response.data
    return this.cachedUsers
  }
}
