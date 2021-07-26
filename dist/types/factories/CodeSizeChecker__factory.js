"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSizeChecker__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "which",
                type: "address",
            },
        ],
        name: "codeSize",
        outputs: [
            {
                internalType: "uint256",
                name: "ret",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061015c806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806352872cf314610030575b600080fd5b61004a60048036038101906100459190610080565b610060565b60405161005791906100b8565b60405180910390f35b6000813b9050919050565b60008135905061007a8161010f565b92915050565b60006020828403121561009257600080fd5b60006100a08482850161006b565b91505092915050565b6100b281610105565b82525050565b60006020820190506100cd60008301846100a9565b92915050565b60006100de826100e5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610118816100d3565b811461012357600080fd5b5056fea26469706673582212203624dae01d770af90f83dc8e50a3b4fd81c238d3174282d9c991c0d67b1ce61964736f6c63430008000033";
class CodeSizeChecker__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.CodeSizeChecker__factory = CodeSizeChecker__factory;
