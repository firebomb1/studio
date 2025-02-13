import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { AvalancheHedgefarmAlphaOneTokenFetcher } from './avalanche/hedgefarm.alpha-one.token-fetcher';
import { AvalancheHedgefarmAlphaTwoTokenFetcher } from './avalanche/hedgefarm.alpha-two.token-fetcher';
import { HedgefarmViemContractFactory } from './contracts';

@Module({
  providers: [
    AvalancheHedgefarmAlphaOneTokenFetcher,
    AvalancheHedgefarmAlphaTwoTokenFetcher,
    HedgefarmViemContractFactory,
  ],
})
export class HedgefarmAppModule extends AbstractApp() {}
