import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { RandomUserInterface } from '../interface/get-users.interface'
import { AxiosResponse } from 'axios'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class RandomApiService {
  constructor(private readonly httpService: HttpService) {}

  async getRandomUsers(): Promise<AxiosResponse<RandomUserInterface[]>> {
    const response = await firstValueFrom(
      this.httpService.get<RandomUserInterface[]>(
        'https://randomuser.me/api?results=25&nat=br&exc=login,info,nat,registered',
      ),
    )
    return response
  }
}
