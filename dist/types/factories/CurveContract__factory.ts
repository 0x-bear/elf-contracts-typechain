/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { CurveContract, CurveContractInterface } from "../CurveContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "token_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "calc_withdraw_one_coin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class CurveContract__factory {
  static readonly abi = _abi;
  static createInterface(): CurveContractInterface {
    return new utils.Interface(_abi) as CurveContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveContract {
    return new Contract(address, _abi, signerOrProvider) as CurveContract;
  }
}
