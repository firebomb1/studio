import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { SwellViemContractFactory } from './contracts';
import { EthereumSwellSwethTokenFetcher } from './ethereum/swell.sweth.token-fetcher';

@Module({
  providers: [EthereumSwellSwethTokenFetcher, SwellViemContractFactory],
})
export class SwellAppModule extends AbstractApp() {}
