import { Register } from '~app-toolkit/decorators';
import { Network } from '~types/network.interface';

import { DefiedgeStrategyTokenFetcher } from '../common/defiedge.strategy.token-fetcher';
import { DEFIEDGE_DEFINITION } from '../defiedge.definition';

const appId = DEFIEDGE_DEFINITION.id;
const groupId = DEFIEDGE_DEFINITION.groups.strategy.id;
const network = Network.POLYGON_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class PolygonDefiedgeStrategyTokenFetcher extends DefiedgeStrategyTokenFetcher {
  network: Network = network;
  appId: string = appId;
  groupId: string = groupId;
}