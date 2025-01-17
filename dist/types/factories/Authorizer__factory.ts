/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Authorizer, AuthorizerInterface } from "../Authorizer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "actionId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "canPerform",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "grantRolesToMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "revokeRolesFromMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516200123e3803806200123e8339818101604052602081101561003557600080fd5b81019080805190602001909291905050506100596000801b8261005f60201b60201c565b5061022e565b61006f828261007360201b60201c565b5050565b61009e8160008085815260200190815260200160002060000161010360201b610a971790919060201c565b156100ff573373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600061011583836101df60201b60201c565b6101d45782600001829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600001805490508360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600190506101d9565b600090505b92915050565b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415905092915050565b611000806200023e6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063988360a31161008c578063a73cb2ab11610066578063a73cb2ab1461053e578063ca15c8731461068a578063d547741f146106cc578063fcd7627e1461071a576100cf565b8063988360a3146103c45780639be2a8841461049c578063a217fddf14610520576100cf565b806318b2cde9146100d4578063248a9ca3146102205780632f2ff15d1461026257806336568abe146102b05780639010d07c146102fe57806391d1485414610360575b600080fd5b61021e600480360360408110156100ea57600080fd5b810190808035906020019064010000000081111561010757600080fd5b82018360208201111561011957600080fd5b8035906020019184602083028401116401000000008311171561013b57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561019b57600080fd5b8201836020820111156101ad57600080fd5b803590602001918460208302840111640100000000831117156101cf57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506107f2565b005b61024c6004803603602081101561023657600080fd5b810190808035906020019092919050505061084c565b6040518082815260200191505060405180910390f35b6102ae6004803603604081101561027857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061086b565b005b6102fc600480360360408110156102c657600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108a3565b005b6103346004803603604081101561031457600080fd5b8101908080359060200190929190803590602001909291905050506108eb565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103ac6004803603604081101561037657600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061091c565b60405180821515815260200191505060405180910390f35b61049a600480360360408110156103da57600080fd5b81019080803590602001906401000000008111156103f757600080fd5b82018360208201111561040957600080fd5b8035906020019184602083028401116401000000008311171561042b57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061094d565b005b610508600480360360608110156104b257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610988565b60405180821515815260200191505060405180910390f35b61052861099d565b6040518082815260200191505060405180910390f35b6106886004803603604081101561055457600080fd5b810190808035906020019064010000000081111561057157600080fd5b82018360208201111561058357600080fd5b803590602001918460208302840111640100000000831117156105a557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561060557600080fd5b82018360208201111561061757600080fd5b8035906020019184602083028401116401000000008311171561063957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506109a4565b005b6106b6600480360360208110156106a057600080fd5b81019080803590602001909291905050506109fe565b6040518082815260200191505060405180910390f35b610718600480360360408110156106e257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a24565b005b6107f06004803603604081101561073057600080fd5b810190808035906020019064010000000081111561074d57600080fd5b82018360208201111561075f57600080fd5b8035906020019184602083028401116401000000008311171561078157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a5c565b005b6107fe82518251610b6d565b60005b82518110156108475761083a83828151811061081957fe5b602002602001015183838151811061082d57fe5b6020026020010151610a24565b8080600101915050610801565b505050565b6000806000838152602001908152602001600020600201549050919050565b61089561088d600080858152602001908152602001600020600201543361091c565b6101a6610b7e565b61089f8282610b91565b5050565b6108dd3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146101a8610b7e565b6108e78282610c1d565b5050565b600061091482600080868152602001908152602001600020600001610ca990919063ffffffff16565b905092915050565b600061094582600080868152602001908152602001600020600001610cd190919063ffffffff16565b905092915050565b60005b82518110156109835761097683828151811061096857fe5b602002602001015183610a24565b8080600101915050610950565b505050565b6000610994848461091c565b90509392505050565b6000801b81565b6109b082518251610b6d565b60005b82518110156109f9576109ec8382815181106109cb57fe5b60200260200101518383815181106109df57fe5b602002602001015161086b565b80806001019150506109b3565b505050565b6000610a1d600080848152602001908152602001600020600001610d20565b9050919050565b610a4e610a46600080858152602001908152602001600020600201543361091c565b6101a7610b7e565b610a588282610c1d565b5050565b60005b8251811015610a9257610a85838281518110610a7757fe5b60200260200101518361086b565b8080600101915050610a5f565b505050565b6000610aa38383610cd1565b610b625782600001829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600001805490508360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019050610b67565b600090505b92915050565b610b7a8183146067610b7e565b5050565b81610b8d57610b8c81610d31565b5b5050565b610bb881600080858152602001908152602001600020600001610a9790919063ffffffff16565b15610c19573373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b610c4481600080858152602001908152602001600020600001610da190919063ffffffff16565b15610ca5573373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6000610cbf828460000180549050116064610b7e565b610cc98383610f86565b905092915050565b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415905092915050565b600081600001805490509050919050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008114610f7a5760006001820390506000600186600001805490500390506000866000018281548110610e1857fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080876000018481548110610e5557fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600183018760010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555086600001805480610ef357fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090556001945050505050610f80565b60009150505b92915050565b6000826000018281548110610f9757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509291505056fea2646970667358221220e79837f032d1b5973d406b6047c68c7d22e9e510ff538978ab0448514edd230b64736f6c63430007010033";

export class Authorizer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Authorizer> {
    return super.deploy(admin, overrides || {}) as Promise<Authorizer>;
  }
  getDeployTransaction(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin, overrides || {});
  }
  attach(address: string): Authorizer {
    return super.attach(address) as Authorizer;
  }
  connect(signer: Signer): Authorizer__factory {
    return super.connect(signer) as Authorizer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuthorizerInterface {
    return new utils.Interface(_abi) as AuthorizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Authorizer {
    return new Contract(address, _abi, signerOrProvider) as Authorizer;
  }
}
