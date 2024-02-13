import { Test, TestingModule } from '@nestjs/testing'
import { RandomApiController } from './random-api.controller'
import { RandomApiService } from '../service/random-api.service'
import { HttpService } from '@nestjs/axios'

describe('RandomApiController', () => {
  let randomApicontroller: RandomApiController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomApiController],
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

    randomApicontroller = module.get<RandomApiController>(RandomApiController)
  })

  it('should be defined', () => {
    expect(randomApicontroller).toBeDefined()
  })
})
