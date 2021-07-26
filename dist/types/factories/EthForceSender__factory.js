"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthForceSender__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address payable",
                name: "recipient",
                type: "address",
            },
        ],
        stateMutability: "payable",
        type: "constructor",
    },
];
const _bytecode = "0x6080604052604051604e380380604e83398181016040526020811015602357600080fd5b81019080805190602001909291905050508073ffffffffffffffffffffffffffffffffffffffff16fffe";
class EthForceSender__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(recipient, overrides) {
        return super.deploy(recipient, overrides || {});
    }
    getDeployTransaction(recipient, overrides) {
        return super.getDeployTransaction(recipient, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.EthForceSender__factory = EthForceSender__factory;