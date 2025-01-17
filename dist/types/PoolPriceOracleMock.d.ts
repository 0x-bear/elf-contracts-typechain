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

interface PoolPriceOracleMockInterface extends ethers.utils.Interface {
  functions: {
    "decode(bytes32)": FunctionFragment;
    "encode(tuple)": FunctionFragment;
    "findNearestSamplesTimestamp(uint256[],uint256)": FunctionFragment;
    "getPastAccumulator(uint8,uint256,uint256)": FunctionFragment;
    "getSample(uint256)": FunctionFragment;
    "getTotalSamples()": FunctionFragment;
    "mockSample(uint256,tuple)": FunctionFragment;
    "mockSamples(uint256[],tuple[])": FunctionFragment;
    "processPriceData(uint256,uint256,int256,int256,int256)": FunctionFragment;
    "update(bytes32,int256,int256,int256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "decode", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "encode",
    values: [
      {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "findNearestSamplesTimestamp",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastAccumulator",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSample",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalSamples",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockSample",
    values: [
      BigNumberish,
      {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mockSamples",
    values: [
      BigNumberish[],
      {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "processPriceData",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "decode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "findNearestSamplesTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastAccumulator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSample", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalSamples",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mockSample", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mockSamples",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processPriceData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {
    "PriceDataProcessed(bool,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PriceDataProcessed"): EventFragment;
}

export class PoolPriceOracleMock extends BaseContract {
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

  interface: PoolPriceOracleMockInterface;

  functions: {
    decode(
      sample: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          logPairPrice: BigNumber;
          accLogPairPrice: BigNumber;
          logBptPrice: BigNumber;
          accLogBptPrice: BigNumber;
          logInvariant: BigNumber;
          accLogInvariant: BigNumber;
          timestamp: BigNumber;
        }
      ]
    >;

    encode(
      sample: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[string]>;

    findNearestSamplesTimestamp(
      dates: BigNumberish[],
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [([BigNumber, BigNumber] & { prev: BigNumber; next: BigNumber })[]] & {
        results: ([BigNumber, BigNumber] & {
          prev: BigNumber;
          next: BigNumber;
        })[];
      }
    >;

    getPastAccumulator(
      variable: BigNumberish,
      currentIndex: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSample(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        logPairPrice: BigNumber;
        accLogPairPrice: BigNumber;
        logBptPrice: BigNumber;
        accLogBptPrice: BigNumber;
        logInvariant: BigNumber;
        accLogInvariant: BigNumber;
        timestamp: BigNumber;
      }
    >;

    getTotalSamples(overrides?: CallOverrides): Promise<[BigNumber]>;

    mockSample(
      index: BigNumberish,
      sample: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mockSamples(
      indexes: BigNumberish[],
      samples: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    processPriceData(
      elapsed: BigNumberish,
      currentIndex: BigNumberish,
      logPairPrice: BigNumberish,
      logBptPrice: BigNumberish,
      logInvariant: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    update(
      sample: BytesLike,
      logPairPrice: BigNumberish,
      logBptPrice: BigNumberish,
      logInvariant: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          logPairPrice: BigNumber;
          accLogPairPrice: BigNumber;
          logBptPrice: BigNumber;
          accLogBptPrice: BigNumber;
          logInvariant: BigNumber;
          accLogInvariant: BigNumber;
          timestamp: BigNumber;
        }
      ]
    >;
  };

  decode(
    sample: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      logPairPrice: BigNumber;
      accLogPairPrice: BigNumber;
      logBptPrice: BigNumber;
      accLogBptPrice: BigNumber;
      logInvariant: BigNumber;
      accLogInvariant: BigNumber;
      timestamp: BigNumber;
    }
  >;

  encode(
    sample: {
      logPairPrice: BigNumberish;
      accLogPairPrice: BigNumberish;
      logBptPrice: BigNumberish;
      accLogBptPrice: BigNumberish;
      logInvariant: BigNumberish;
      accLogInvariant: BigNumberish;
      timestamp: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  findNearestSamplesTimestamp(
    dates: BigNumberish[],
    offset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<([BigNumber, BigNumber] & { prev: BigNumber; next: BigNumber })[]>;

  getPastAccumulator(
    variable: BigNumberish,
    currentIndex: BigNumberish,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSample(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      logPairPrice: BigNumber;
      accLogPairPrice: BigNumber;
      logBptPrice: BigNumber;
      accLogBptPrice: BigNumber;
      logInvariant: BigNumber;
      accLogInvariant: BigNumber;
      timestamp: BigNumber;
    }
  >;

  getTotalSamples(overrides?: CallOverrides): Promise<BigNumber>;

  mockSample(
    index: BigNumberish,
    sample: {
      logPairPrice: BigNumberish;
      accLogPairPrice: BigNumberish;
      logBptPrice: BigNumberish;
      accLogBptPrice: BigNumberish;
      logInvariant: BigNumberish;
      accLogInvariant: BigNumberish;
      timestamp: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mockSamples(
    indexes: BigNumberish[],
    samples: {
      logPairPrice: BigNumberish;
      accLogPairPrice: BigNumberish;
      logBptPrice: BigNumberish;
      accLogBptPrice: BigNumberish;
      logInvariant: BigNumberish;
      accLogInvariant: BigNumberish;
      timestamp: BigNumberish;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  processPriceData(
    elapsed: BigNumberish,
    currentIndex: BigNumberish,
    logPairPrice: BigNumberish,
    logBptPrice: BigNumberish,
    logInvariant: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  update(
    sample: BytesLike,
    logPairPrice: BigNumberish,
    logBptPrice: BigNumberish,
    logInvariant: BigNumberish,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      logPairPrice: BigNumber;
      accLogPairPrice: BigNumber;
      logBptPrice: BigNumber;
      accLogBptPrice: BigNumber;
      logInvariant: BigNumber;
      accLogInvariant: BigNumber;
      timestamp: BigNumber;
    }
  >;

  callStatic: {
    decode(
      sample: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        logPairPrice: BigNumber;
        accLogPairPrice: BigNumber;
        logBptPrice: BigNumber;
        accLogBptPrice: BigNumber;
        logInvariant: BigNumber;
        accLogInvariant: BigNumber;
        timestamp: BigNumber;
      }
    >;

    encode(
      sample: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    findNearestSamplesTimestamp(
      dates: BigNumberish[],
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, BigNumber] & { prev: BigNumber; next: BigNumber })[]
    >;

    getPastAccumulator(
      variable: BigNumberish,
      currentIndex: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSample(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        logPairPrice: BigNumber;
        accLogPairPrice: BigNumber;
        logBptPrice: BigNumber;
        accLogBptPrice: BigNumber;
        logInvariant: BigNumber;
        accLogInvariant: BigNumber;
        timestamp: BigNumber;
      }
    >;

    getTotalSamples(overrides?: CallOverrides): Promise<BigNumber>;

    mockSample(
      index: BigNumberish,
      sample: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    mockSamples(
      indexes: BigNumberish[],
      samples: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    processPriceData(
      elapsed: BigNumberish,
      currentIndex: BigNumberish,
      logPairPrice: BigNumberish,
      logBptPrice: BigNumberish,
      logInvariant: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      sample: BytesLike,
      logPairPrice: BigNumberish,
      logBptPrice: BigNumberish,
      logInvariant: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        logPairPrice: BigNumber;
        accLogPairPrice: BigNumber;
        logBptPrice: BigNumber;
        accLogBptPrice: BigNumber;
        logInvariant: BigNumber;
        accLogInvariant: BigNumber;
        timestamp: BigNumber;
      }
    >;
  };

  filters: {
    PriceDataProcessed(
      newSample?: null,
      sampleIndex?: null
    ): TypedEventFilter<
      [boolean, BigNumber],
      { newSample: boolean; sampleIndex: BigNumber }
    >;
  };

  estimateGas: {
    decode(sample: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    encode(
      sample: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    findNearestSamplesTimestamp(
      dates: BigNumberish[],
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastAccumulator(
      variable: BigNumberish,
      currentIndex: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSample(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalSamples(overrides?: CallOverrides): Promise<BigNumber>;

    mockSample(
      index: BigNumberish,
      sample: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mockSamples(
      indexes: BigNumberish[],
      samples: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    processPriceData(
      elapsed: BigNumberish,
      currentIndex: BigNumberish,
      logPairPrice: BigNumberish,
      logBptPrice: BigNumberish,
      logInvariant: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    update(
      sample: BytesLike,
      logPairPrice: BigNumberish,
      logBptPrice: BigNumberish,
      logInvariant: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decode(
      sample: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encode(
      sample: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    findNearestSamplesTimestamp(
      dates: BigNumberish[],
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastAccumulator(
      variable: BigNumberish,
      currentIndex: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSample(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalSamples(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mockSample(
      index: BigNumberish,
      sample: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mockSamples(
      indexes: BigNumberish[],
      samples: {
        logPairPrice: BigNumberish;
        accLogPairPrice: BigNumberish;
        logBptPrice: BigNumberish;
        accLogBptPrice: BigNumberish;
        logInvariant: BigNumberish;
        accLogInvariant: BigNumberish;
        timestamp: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    processPriceData(
      elapsed: BigNumberish,
      currentIndex: BigNumberish,
      logPairPrice: BigNumberish,
      logBptPrice: BigNumberish,
      logInvariant: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    update(
      sample: BytesLike,
      logPairPrice: BigNumberish,
      logBptPrice: BigNumberish,
      logInvariant: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
