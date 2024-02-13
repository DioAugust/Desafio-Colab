import { Test, TestingModule } from '@nestjs/testing'
import { RandomApiService } from './random-api.service'
import { HttpService } from '@nestjs/axios'
import { from } from 'rxjs'
import { RandomUserInterface } from '../interface/get-users.interface'

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
      const mockUsers: RandomUserInterface[] = [
        {
          gender: 'female',
          name: {
            title: 'Mrs',
            first: 'Vladislava',
            last: 'Barros',
          },
          location: {
            street: {
              number: 810,
              name: 'Rua Carlos Gomes',
            },
            city: 'Teófilo Otoni',
            state: 'Alagoas',
            country: 'Brazil',
            postcode: 47133,
            coordinates: {
              latitude: '43.6376',
              longitude: '75.0573',
            },
            timezone: {
              offset: '+8:00',
              description: 'Beijing, Perth, Singapore, Hong Kong',
            },
          },
          email: 'vladislava.barros@example.com',
          dob: {
            date: '1981-05-02T17:18:57.409Z',
            age: 42,
          },
          phone: '(22) 5339-6835',
          cell: '(24) 8674-5206',
          id: {
            name: 'CPF',
            value: '602.517.055-63',
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/women/35.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/35.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/35.jpg',
          },
        },
      ]
      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(from(Promise.resolve({ data: { results: mockUsers } } as any)))
      // Act
      const result = await randomApiService.getRandomUsers()
      // Assert
      expect(result).toBeDefined()
      expect(httpService.get).toBeCalledTimes(1)
    })
  })
})
