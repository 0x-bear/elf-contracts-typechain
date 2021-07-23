/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TestVaultInterface extends ethers.utils.Interface {
  functions: {
    "pool()": FunctionFragment;
    "registerPool(uint8)": FunctionFragment;
    "registerTokens(bytes32,address[],address[])": FunctionFragment;
    "setPool(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerTokens",
    values: [BytesLike, string[], string[]]
  ): string;
  encodeFunctionData(functionFragment: "setPool", values: [string]): string;

  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;

  events: {};
}

export class TestVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TestVaultInterface;

  functions: {
    pool(overrides?: CallOverrides): Promise<[string]>;

    registerPool(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerTokens(
      arg0: BytesLike,
      arg1: string[],
      arg2: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPool(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  pool(overrides?: CallOverrides): Promise<string>;

  registerPool(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerTokens(
    arg0: BytesLike,
    arg1: string[],
    arg2: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPool(
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    pool(overrides?: CallOverrides): Promise<string>;

    registerPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    registerTokens(
      arg0: BytesLike,
      arg1: string[],
      arg2: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setPool(_pool: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    pool(overrides?: CallOverrides): Promise<BigNumber>;

    registerPool(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerTokens(
      arg0: BytesLike,
      arg1: string[],
      arg2: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPool(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerPool(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerTokens(
      arg0: BytesLike,
      arg1: string[],
      arg2: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPool(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}