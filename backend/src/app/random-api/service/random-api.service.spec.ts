import { Test, TestingModule } from '@nestjs/testing'
import { RandomApiService } from './random-api.service'
import { HttpService } from '@nestjs/axios'
import { of } from 'rxjs'

describe('RandomApiService', () => {
  let randomApiService: RandomApiService
  let httpService: HttpService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RandomApiService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile()

    randomApiService = module.get<RandomApiService>(RandomApiService)
    httpService = module.get<HttpService>(HttpService)
  })

  it('should be defined', () => {
    expect(randomApiService).toBeDefined()
    expect(httpService).toBeDefined()
  })

  describe('getRandomData', () => {
    it('should return random users data', async () => {
      // Arrange
      jest.spyOn(httpService, 'get').mockReturnValueOnce(of({} as any))
      // Act
      const result = await randomApiService.getRandomUsers()
      // Assert
      expect(result).toBeDefined()
      expect(httpService.get).toBeCalledTimes(1)
    })
  })
})
