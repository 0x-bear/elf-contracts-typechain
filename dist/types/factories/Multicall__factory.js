"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multicall__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "target",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Multicall.Call[]",
                name: "calls",
                type: "tuple[]",
            },
        ],
        name: "aggregate",
        outputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "bytes[]",
                name: "returnData",
                type: "bytes[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "getBlockHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockCoinbase",
        outputs: [
            {
                internalType: "address",
                name: "coinbase",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockDifficulty",
        outputs: [
            {
                internalType: "uint256",
                name: "difficulty",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockGasLimit",
        outputs: [
            {
                internalType: "uint256",
                name: "gaslimit",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "getEthBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLastBlockHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610969806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806372425d9d1161005b57806372425d9d1461012a57806386d516e814610148578063a8b0574e14610166578063ee82ac5e1461018457610088565b80630f28c97d1461008d578063252dba42146100ab57806327e86d6e146100dc5780634d2301cc146100fa575b600080fd5b6100956101b4565b6040516100a2919061072f565b60405180910390f35b6100c560048036038101906100c091906104f8565b6101bc565b6040516100d392919061074a565b60405180910390f35b6100e4610329565b6040516100f191906106f4565b60405180910390f35b610114600480360381019061010f91906104cf565b610335565b604051610121919061072f565b60405180910390f35b610132610356565b60405161013f919061072f565b60405180910390f35b61015061035e565b60405161015d919061072f565b60405180910390f35b61016e610366565b60405161017b91906106d9565b60405180910390f35b61019e60048036038101906101999190610539565b61036e565b6040516101ab91906106f4565b60405180910390f35b600042905090565b60006060439150825167ffffffffffffffff811180156101db57600080fd5b5060405190808252806020026020018201604052801561020f57816020015b60608152602001906001900390816101fa5790505b50905060005b8351811015610323576000606085838151811061022e57fe5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1686848151811061025c57fe5b60200260200101516020015160405161027591906106c2565b6000604051808303816000865af19150503d80600081146102b2576040519150601f19603f3d011682016040523d82523d6000602084013e6102b7565b606091505b5091509150816102fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f39061070f565b60405180910390fd5b8084848151811061030957fe5b602002602001018190525050508080600101915050610215565b50915091565b60006001430340905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b600041905090565b600081409050919050565b60008135905061038881610905565b92915050565b600082601f83011261039f57600080fd5b81356103b26103ad826107a7565b61077a565b9150818183526020840193506020810190508360005b838110156103f857813586016103de8882610456565b8452602084019350602083019250506001810190506103c8565b5050505092915050565b600082601f83011261041357600080fd5b8135610426610421826107cf565b61077a565b9150808252602083016020830185838301111561044257600080fd5b61044d8382846108b2565b50505092915050565b60006040828403121561046857600080fd5b610472604061077a565b9050600061048284828501610379565b600083015250602082013567ffffffffffffffff8111156104a257600080fd5b6104ae84828501610402565b60208301525092915050565b6000813590506104c98161091c565b92915050565b6000602082840312156104e157600080fd5b60006104ef84828501610379565b91505092915050565b60006020828403121561050a57600080fd5b600082013567ffffffffffffffff81111561052457600080fd5b6105308482850161038e565b91505092915050565b60006020828403121561054b57600080fd5b6000610559848285016104ba565b91505092915050565b600061056e8383610609565b905092915050565b61057f8161086c565b82525050565b60006105908261080b565b61059a818561082e565b9350836020820285016105ac856107fb565b8060005b858110156105e857848403895281516105c98582610562565b94506105d483610821565b925060208a019950506001810190506105b0565b50829750879550505050505092915050565b6106038161087e565b82525050565b600061061482610816565b61061e818561083f565b935061062e8185602086016108c1565b610637816108f4565b840191505092915050565b600061064d82610816565b6106578185610850565b93506106678185602086016108c1565b80840191505092915050565b6000610680600b8361085b565b91507f43414c4c5f4641494c45440000000000000000000000000000000000000000006000830152602082019050919050565b6106bc816108a8565b82525050565b60006106ce8284610642565b915081905092915050565b60006020820190506106ee6000830184610576565b92915050565b600060208201905061070960008301846105fa565b92915050565b6000602082019050818103600083015261072881610673565b9050919050565b600060208201905061074460008301846106b3565b92915050565b600060408201905061075f60008301856106b3565b81810360208301526107718184610585565b90509392505050565b6000604051905081810181811067ffffffffffffffff8211171561079d57600080fd5b8060405250919050565b600067ffffffffffffffff8211156107be57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156107e657600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061087782610888565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156108df5780820151818401526020810190506108c4565b838111156108ee576000848401525b50505050565b6000601f19601f8301169050919050565b61090e8161086c565b811461091957600080fd5b50565b610925816108a8565b811461093057600080fd5b5056fea26469706673582212206a583e3138d534c6474b14cbd344021be859a5b7e4719e8c96341adec35e428564736f6c63430007010033";
var Multicall__factory = /** @class */ (function (_super) {
    __extends(Multicall__factory, _super);
    function Multicall__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Multicall__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Multicall__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Multicall__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Multicall__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Multicall__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Multicall__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Multicall__factory.bytecode = _bytecode;
    Multicall__factory.abi = _abi;
    return Multicall__factory;
}(ethers_1.ContractFactory));
exports.Multicall__factory = Multicall__factory;
