import { INestApplication, Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Ra_v1Controller } from './ra-v1.controller';
import * as request from 'supertest';
import * as _ from 'lodash';
import { join } from 'path';
import { readFileSync } from 'fs';

describe('Ra_v1Controller', () => {
  let app: INestApplication;
  let controller: Ra_v1Controller;
  const msgRootDir = join(
    <string>process.env.PWD,
    'sample_requests',
    'messages',
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ra_v1Controller],
      providers: [Logger],
    }).compile();
    app = module.createNestApplication();
    await app.init();
    controller = module.get<Ra_v1Controller>(Ra_v1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should process pseudonym certificate provisioing request', async () => {
    const pdu = readFileSync(
      join(msgRootDir, '3-SecuredPseudonymCertProvisioningRequest.oer'),
    );
    const res = await request('http://127.0.0.1:3000')
      .post('/ra_v1/provision-pseudonym-certificate-batch')
      .set('Accept', 'application/octet-stream')
      .type('application/octet-stream')
      .send(pdu)
      .expect(201);
  });
});
