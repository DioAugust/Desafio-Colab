import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ArrayOfRandomUserInterface, RandomUserInterface } from '../interface/get-users.interface'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class RandomApiService {
  constructor(private readonly httpService: HttpService) {}

  async getRandomUsers(): Promise<RandomUserInterface[]> {
    const response = await firstValueFrom(
      this.httpService.get<ArrayOfRandomUserInterface>(
        'https://randomuser.me/api?results=25&nat=br&exc=login,nat,registered&noinfo',
      ),
    )

    return response.data.results
  }
}
