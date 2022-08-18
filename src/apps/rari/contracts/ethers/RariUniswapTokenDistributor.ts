/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface RariUniswapTokenDistributorInterface extends utils.Interface {
  functions: {
    'DISTRIBUTION_PERIOD()': FunctionFragment;
    'FINAL_RGT_DISTRIBUTION()': FunctionFragment;
    'claimAllRgt()': FunctionFragment;
    'claimRgt(uint256)': FunctionFragment;
    'deposit(uint256)': FunctionFragment;
    'disabled()': FunctionFragment;
    'distributeRgt(address)': FunctionFragment;
    'distributionEndBlock()': FunctionFragment;
    'distributionStartBlock()': FunctionFragment;
    'getRgtDistributed(uint256)': FunctionFragment;
    'getUnclaimedRgt(address)': FunctionFragment;
    'initialize(address)': FunctionFragment;
    'initialize(uint256,address)': FunctionFragment;
    'isOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rgtEthUniswapV2Pair()': FunctionFragment;
    'setDisabled(bool)': FunctionFragment;
    'setGovernanceToken(address)': FunctionFragment;
    'setRgtEthUniswapV2Pair(address)': FunctionFragment;
    'stakingBalances(address)': FunctionFragment;
    'totalStaked()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'upgrade(address)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'DISTRIBUTION_PERIOD'
      | 'FINAL_RGT_DISTRIBUTION'
      | 'claimAllRgt'
      | 'claimRgt'
      | 'deposit'
      | 'disabled'
      | 'distributeRgt'
      | 'distributionEndBlock'
      | 'distributionStartBlock'
      | 'getRgtDistributed'
      | 'getUnclaimedRgt'
      | 'initialize(address)'
      | 'initialize(uint256,address)'
      | 'isOwner'
      | 'owner'
      | 'renounceOwnership'
      | 'rgtEthUniswapV2Pair'
      | 'setDisabled'
      | 'setGovernanceToken'
      | 'setRgtEthUniswapV2Pair'
      | 'stakingBalances'
      | 'totalStaked'
      | 'transferOwnership'
      | 'upgrade'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'DISTRIBUTION_PERIOD', values?: undefined): string;
  encodeFunctionData(functionFragment: 'FINAL_RGT_DISTRIBUTION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claimAllRgt', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claimRgt', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'deposit', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'disabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'distributeRgt', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'distributionEndBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'distributionStartBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getRgtDistributed', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getUnclaimedRgt', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'initialize(address)', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'initialize(uint256,address)',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'isOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rgtEthUniswapV2Pair', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setDisabled', values: [PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'setGovernanceToken', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setRgtEthUniswapV2Pair', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'stakingBalances', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'totalStaked', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'upgrade', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'DISTRIBUTION_PERIOD', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'FINAL_RGT_DISTRIBUTION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimAllRgt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimRgt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'disabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'distributeRgt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'distributionEndBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'distributionStartBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRgtDistributed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUnclaimedRgt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize(address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize(uint256,address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rgtEthUniswapV2Pair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDisabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setGovernanceToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRgtEthUniswapV2Pair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakingBalances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalStaked', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgrade', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'Claim(address,uint256)': EventFragment;
    'Disabled()': EventFragment;
    'Enabled()': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Claim'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Disabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Enabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface ClaimEventObject {
  holder: string;
  claimed: BigNumber;
}
export type ClaimEvent = TypedEvent<[string, BigNumber], ClaimEventObject>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface DisabledEventObject {}
export type DisabledEvent = TypedEvent<[], DisabledEventObject>;

export type DisabledEventFilter = TypedEventFilter<DisabledEvent>;

export interface EnabledEventObject {}
export type EnabledEvent = TypedEvent<[], EnabledEventObject>;

export type EnabledEventFilter = TypedEventFilter<EnabledEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface RariUniswapTokenDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RariUniswapTokenDistributorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DISTRIBUTION_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    FINAL_RGT_DISTRIBUTION(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimAllRgt(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    claimRgt(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    disabled(overrides?: CallOverrides): Promise<[boolean]>;

    distributeRgt(
      holder: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    distributionEndBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    distributionStartBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRgtDistributed(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    getUnclaimedRgt(holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    'initialize(address)'(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'initialize(uint256,address)'(
      startBlock: PromiseOrValue<BigNumberish>,
      _rgtEthUniswapV2Pair: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    rgtEthUniswapV2Pair(overrides?: CallOverrides): Promise<[string]>;

    setDisabled(
      _disabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setGovernanceToken(
      governanceToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setRgtEthUniswapV2Pair(
      _rgtEthUniswapV2Pair: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    stakingBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    upgrade(
      newContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  DISTRIBUTION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  FINAL_RGT_DISTRIBUTION(overrides?: CallOverrides): Promise<BigNumber>;

  claimAllRgt(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  claimRgt(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deposit(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  disabled(overrides?: CallOverrides): Promise<boolean>;

  distributeRgt(
    holder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  distributionEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

  distributionStartBlock(overrides?: CallOverrides): Promise<BigNumber>;

  getRgtDistributed(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  getUnclaimedRgt(holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  'initialize(address)'(
    sender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'initialize(uint256,address)'(
    startBlock: PromiseOrValue<BigNumberish>,
    _rgtEthUniswapV2Pair: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  rgtEthUniswapV2Pair(overrides?: CallOverrides): Promise<string>;

  setDisabled(
    _disabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setGovernanceToken(
    governanceToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setRgtEthUniswapV2Pair(
    _rgtEthUniswapV2Pair: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  stakingBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  upgrade(
    newContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    DISTRIBUTION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    FINAL_RGT_DISTRIBUTION(overrides?: CallOverrides): Promise<BigNumber>;

    claimAllRgt(overrides?: CallOverrides): Promise<BigNumber>;

    claimRgt(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    deposit(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    disabled(overrides?: CallOverrides): Promise<boolean>;

    distributeRgt(holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    distributionEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

    distributionStartBlock(overrides?: CallOverrides): Promise<BigNumber>;

    getRgtDistributed(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getUnclaimedRgt(holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    'initialize(address)'(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    'initialize(uint256,address)'(
      startBlock: PromiseOrValue<BigNumberish>,
      _rgtEthUniswapV2Pair: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rgtEthUniswapV2Pair(overrides?: CallOverrides): Promise<string>;

    setDisabled(_disabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;

    setGovernanceToken(governanceToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setRgtEthUniswapV2Pair(_rgtEthUniswapV2Pair: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    stakingBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    upgrade(newContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Claim(address,uint256)'(holder?: null, claimed?: null): ClaimEventFilter;
    Claim(holder?: null, claimed?: null): ClaimEventFilter;

    'Disabled()'(): DisabledEventFilter;
    Disabled(): DisabledEventFilter;

    'Enabled()'(): EnabledEventFilter;
    Enabled(): EnabledEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    DISTRIBUTION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    FINAL_RGT_DISTRIBUTION(overrides?: CallOverrides): Promise<BigNumber>;

    claimAllRgt(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    claimRgt(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    disabled(overrides?: CallOverrides): Promise<BigNumber>;

    distributeRgt(
      holder: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    distributionEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

    distributionStartBlock(overrides?: CallOverrides): Promise<BigNumber>;

    getRgtDistributed(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getUnclaimedRgt(holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    'initialize(address)'(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'initialize(uint256,address)'(
      startBlock: PromiseOrValue<BigNumberish>,
      _rgtEthUniswapV2Pair: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    rgtEthUniswapV2Pair(overrides?: CallOverrides): Promise<BigNumber>;

    setDisabled(
      _disabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setGovernanceToken(
      governanceToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setRgtEthUniswapV2Pair(
      _rgtEthUniswapV2Pair: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    stakingBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    upgrade(
      newContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FINAL_RGT_DISTRIBUTION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimAllRgt(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    claimRgt(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    disabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributeRgt(
      holder: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    distributionEndBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributionStartBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRgtDistributed(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getUnclaimedRgt(holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'initialize(address)'(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'initialize(uint256,address)'(
      startBlock: PromiseOrValue<BigNumberish>,
      _rgtEthUniswapV2Pair: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    rgtEthUniswapV2Pair(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDisabled(
      _disabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setGovernanceToken(
      governanceToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setRgtEthUniswapV2Pair(
      _rgtEthUniswapV2Pair: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    stakingBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    upgrade(
      newContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}