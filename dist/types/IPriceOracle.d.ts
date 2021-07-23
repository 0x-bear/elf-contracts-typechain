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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "getLargestSafeQueryWindow()": FunctionFragment;
    "getLatest(uint8)": FunctionFragment;
    "getPastAccumulators(tuple[])": FunctionFragment;
    "getTimeWeightedAverage(tuple[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getLargestSafeQueryWindow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLatest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastAccumulators",
    values: [{ variable: BigNumberish; ago: BigNumberish }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimeWeightedAverage",
    values: [
      { variable: BigNumberish; secs: BigNumberish; ago: BigNumberish }[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLargestSafeQueryWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getLatest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPastAccumulators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimeWeightedAverage",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPriceOracle extends BaseContract {
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

  interface: IPriceOracleInterface;

  functions: {
    getLargestSafeQueryWindow(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLatest(
      variable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPastAccumulators(
      queries: { variable: BigNumberish; ago: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { results: BigNumber[] }>;

    getTimeWeightedAverage(
      queries: {
        variable: BigNumberish;
        secs: BigNumberish;
        ago: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { results: BigNumber[] }>;
  };

  getLargestSafeQueryWindow(overrides?: CallOverrides): Promise<BigNumber>;

  getLatest(
    variable: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPastAccumulators(
    queries: { variable: BigNumberish; ago: BigNumberish }[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getTimeWeightedAverage(
    queries: {
      variable: BigNumberish;
      secs: BigNumberish;
      ago: BigNumberish;
    }[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    getLargestSafeQueryWindow(overrides?: CallOverrides): Promise<BigNumber>;

    getLatest(
      variable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastAccumulators(
      queries: { variable: BigNumberish; ago: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getTimeWeightedAverage(
      queries: {
        variable: BigNumberish;
        secs: BigNumberish;
        ago: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    getLargestSafeQueryWindow(overrides?: CallOverrides): Promise<BigNumber>;

    getLatest(
      variable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastAccumulators(
      queries: { variable: BigNumberish; ago: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimeWeightedAverage(
      queries: {
        variable: BigNumberish;
        secs: BigNumberish;
        ago: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getLargestSafeQueryWindow(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatest(
      variable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastAccumulators(
      queries: { variable: BigNumberish; ago: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTimeWeightedAverage(
      queries: {
        variable: BigNumberish;
        secs: BigNumberish;
        ago: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
