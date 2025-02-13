import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { OriginStoryViemContractFactory } from './contracts';
import { EthereumOriginStorySeriesContractPositionFetcher } from './ethereum/origin-story.series.contract-position-fetcher';
import { EthereumOriginStoryWoethTokenFetcher } from './ethereum/origin-story.woeth.token-fetcher';

@Module({
  providers: [
    OriginStoryViemContractFactory,
    EthereumOriginStorySeriesContractPositionFetcher,
    EthereumOriginStoryWoethTokenFetcher,
  ],
})
export class OriginStoryAppModule extends AbstractApp() {}
