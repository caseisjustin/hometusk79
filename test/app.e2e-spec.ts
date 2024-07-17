import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let jwtToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should register a user', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: 'testuser@example.com',
        password: 'password',
        firstname: 'John',
        lastname: 'Doe',
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body.email).toBe('testuser@example.com');
      });
  });

  it('should login a user and return JWT token', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password',
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('access_token');
        jwtToken = response.body.access_token;
      });
  });

  it('should access protected endpoint with JWT token', () => {
    return request(app.getHttpServer())
      .get('/app/protected')
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ message: 'This is protected data' });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
