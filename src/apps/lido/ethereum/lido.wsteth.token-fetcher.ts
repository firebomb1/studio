import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import { GetPricePerShareParams, GetUnderlyingTokensParams } from '~position/template/app-token.template.types';

import { LidoViemContractFactory } from '../contracts';
import { LidoWsteth } from '../contracts/viem';

@PositionTemplate()
export class EthereumLidoWstethTokenFetcher extends AppTokenTemplatePositionFetcher<LidoWsteth> {
  groupLabel = 'wstETH';

  isExcludedFromTvl = true;

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(LidoViemContractFactory) protected readonly contractFactory: LidoViemContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string) {
    return this.contractFactory.lidoWsteth({ network: this.network, address });
  }

  async getAddresses() {
    return ['0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'];
  }

  async getUnderlyingTokenDefinitions({ contract }: GetUnderlyingTokensParams<LidoWsteth>) {
    return [{ address: await contract.read.stETH(), network: this.network }];
  }

  async getPricePerShare({ appToken, contract }: GetPricePerShareParams<LidoWsteth>) {
    const pricePerShareRaw = await contract.read.stEthPerToken();
    return [Number(pricePerShareRaw) / 10 ** appToken.decimals];
  }
}
