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
exports.BalanceAllocationMock__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
        ],
        name: "cash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "cashToManaged",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "decreaseCash",
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
                name: "sharedCash",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "sharedManaged",
                type: "bytes32",
            },
        ],
        name: "fromSharedToBalanceA",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "sharedCash",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "sharedManaged",
                type: "bytes32",
            },
        ],
        name: "fromSharedToBalanceB",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "increaseCash",
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
                name: "balance",
                type: "bytes32",
            },
        ],
        name: "isNotZero",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
        ],
        name: "isZero",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
        ],
        name: "lastChangeBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
        ],
        name: "managed",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "managedToCash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "newManaged",
                type: "uint256",
            },
        ],
        name: "setManaged",
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
                internalType: "uint256",
                name: "_cash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_managed",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_lastChangeBlock",
                type: "uint256",
            },
        ],
        name: "toBalance",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "tokenABalance",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "tokenBBalance",
                type: "bytes32",
            },
        ],
        name: "toSharedCash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "tokenABalance",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "tokenBBalance",
                type: "bytes32",
            },
        ],
        name: "toSharedManaged",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "balance",
                type: "bytes32",
            },
        ],
        name: "total",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "balances",
                type: "bytes32[]",
            },
        ],
        name: "totals",
        outputs: [
            {
                internalType: "uint256[]",
                name: "result",
                type: "uint256[]",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610dae806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063736ea832116100a2578063ce83307711610071578063ce8330771461047a578063d6c752c5146104c6578063dd646917146105d3578063e1ac202214610617578063fba56f521461066d5761010b565b8063736ea8321461035457806393b9de4c146103a0578063a44bed62146103ec578063ac0177a91461042e5761010b565b806351b311f0116100de57806351b311f014610224578063595e098a146102705780637171e37f146102bc5780637323e7ca146103085761010b565b8063256da630146101105780633a1f6e151461015c5780633f7e18a5146101a05780634ca27dff146101e2575b600080fd5b6101466004803603604081101561012657600080fd5b8101908080359060200190929190803590602001909291905050506106af565b6040518082815260200191505060405180910390f35b6101886004803603602081101561017257600080fd5b81019080803590602001909291905050506106cc565b60405180821515815260200191505060405180910390f35b6101cc600480360360208110156101b657600080fd5b81019080803590602001909291905050506106de565b6040518082815260200191505060405180910390f35b61020e600480360360208110156101f857600080fd5b81019080803590602001909291905050506106f0565b6040518082815260200191505060405180910390f35b61025a6004803603604081101561023a57600080fd5b810190808035906020019092919080359060200190929190505050610702565b6040518082815260200191505060405180910390f35b6102a66004803603604081101561028657600080fd5b810190808035906020019092919080359060200190929190505050610716565b6040518082815260200191505060405180910390f35b6102f2600480360360408110156102d257600080fd5b81019080803590602001909291908035906020019092919050505061072a565b6040518082815260200191505060405180910390f35b61033e6004803603604081101561031e57600080fd5b810190808035906020019092919080359060200190929190505050610747565b6040518082815260200191505060405180910390f35b61038a6004803603604081101561036a57600080fd5b81019080803590602001909291908035906020019092919050505061075b565b6040518082815260200191505060405180910390f35b6103d6600480360360408110156103b657600080fd5b810190808035906020019092919080359060200190929190505050610778565b6040518082815260200191505060405180910390f35b6104186004803603602081101561040257600080fd5b8101908080359060200190929190505050610795565b6040518082815260200191505060405180910390f35b6104646004803603604081101561044457600080fd5b8101908080359060200190929190803590602001909291905050506107a7565b6040518082815260200191505060405180910390f35b6104b06004803603604081101561049057600080fd5b8101908080359060200190929190803590602001909291905050506107bb565b6040518082815260200191505060405180910390f35b61057c600480360360208110156104dc57600080fd5b81019080803590602001906401000000008111156104f957600080fd5b82018360208201111561050b57600080fd5b8035906020019184602083028401116401000000008311171561052d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506107d8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105bf5780820151818401526020810190506105a4565b505050509050019250505060405180910390f35b6105ff600480360360208110156105e957600080fd5b81019080803590602001909291905050506107ed565b60405180821515815260200191505060405180910390f35b6106576004803603606081101561062d57600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506107ff565b6040518082815260200191505060405180910390f35b6106996004803603602081101561068357600080fd5b8101908080359060200190929190505050610815565b6040518082815260200191505060405180910390f35b60006106c4828461082790919063ffffffff16565b905092915050565b60006106d782610889565b9050919050565b60006106e98261089c565b9050919050565b60006106fb826108b8565b9050919050565b600061070e83836108de565b905092915050565b6000610722838361090b565b905092915050565b600061073f828461095490919063ffffffff16565b905092915050565b600061075383836109b6565b905092915050565b600061077082846109dc90919063ffffffff16565b905092915050565b600061078d8284610a0490919063ffffffff16565b905092915050565b60006107a082610a4c565b9050919050565b60006107b38383610a6e565b905092915050565b60006107d08284610a9b90919063ffffffff16565b905092915050565b60606107e382610ae3565b5080915050919050565b60006107f882610ba2565b9050919050565b600061080c848484610bd5565b90509392505050565b600061082082610c1b565b9050919050565b6000806108458361083786610a4c565b610c3790919063ffffffff16565b9050600061086484610856876108b8565b610c5890919063ffffffff16565b905060006108718661089c565b905061087e838383610bd5565b935050505092915050565b600061089482610ba2565b159050919050565b60008063ffffffff90508060e084901c60001c16915050919050565b6000806dffffffffffffffffffffffffffff905080607084901c60001c16915050919050565b60006109036108ec84610c78565b6108f584610c78565b6108fe8661089c565b610bd5565b905092915050565b60008061092861091a8561089c565b6109238561089c565b610c9e565b905061094b61093685610a4c565b61093f85610a4c565b8363ffffffff16610cb8565b91505092915050565b6000806109728361096486610a4c565b610c5890919063ffffffff16565b9050600061099184610983876108b8565b610c3790919063ffffffff16565b9050600061099e8661089c565b90506109ab838383610bd5565b935050505092915050565b60006109d46109c4846108b8565b6109cd846108b8565b6000610cb8565b905092915050565b6000806109e884610a4c565b905060004390506109fa828583610bd5565b9250505092915050565b600080610a2283610a1486610a4c565b610c5890919063ffffffff16565b90506000610a2f856108b8565b90506000439050610a41838383610bd5565b935050505092915050565b6000806dffffffffffffffffffffffffffff9050808360001c16915050919050565b6000610a93610a7c84610cd3565b610a8584610cd3565b610a8e8661089c565b610bd5565b905092915050565b600080610ab983610aab86610a4c565b610c3790919063ffffffff16565b90506000610ac6856108b8565b90506000439050610ad8838383610bd5565b935050505092915050565b60606000825167ffffffffffffffff81118015610aff57600080fd5b50604051908082528060200260200182016040528015610b2e5781602001602082028036833780820191505090505b5091506000905060005b8251811015610b9c576000848281518110610b4f57fe5b60200260200101519050610b6281610c1b565b848381518110610b6e57fe5b602002602001018181525050610b8c83610b878361089c565b610c9e565b9250508080600101915050610b38565b50915091565b6000807bffffffffffffffffffffffffffffffffffffffffffffffffffffffff90506000818460001c1614915050919050565b6000808385019050610c06858210158015610bfe57506e01000000000000000000000000000082105b61020e610cf5565b610c11858585610cb8565b9150509392505050565b6000610c26826108b8565b610c2f83610a4c565b019050919050565b6000610c47838311156001610cf5565b600082840390508091505092915050565b6000808284019050610c6e848210156000610cf5565b8091505092915050565b6000806dffffffffffffffffffffffffffff905080607084901c60001c16915050919050565b600081831015610cae5781610cb0565b825b905092915050565b600083607084901b60e084901b010160001b90509392505050565b6000806dffffffffffffffffffffffffffff9050808360001c16915050919050565b81610d0457610d0381610d08565b5b5050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fdfea2646970667358221220e4f455a6cd06a3f4f962da5fc6eb50715fd51cab55c4566190c9685001363ad164736f6c63430007010033";
var BalanceAllocationMock__factory = /** @class */ (function (_super) {
    __extends(BalanceAllocationMock__factory, _super);
    function BalanceAllocationMock__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    BalanceAllocationMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    BalanceAllocationMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    BalanceAllocationMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BalanceAllocationMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BalanceAllocationMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BalanceAllocationMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BalanceAllocationMock__factory.bytecode = _bytecode;
    BalanceAllocationMock__factory.abi = _abi;
    return BalanceAllocationMock__factory;
}(ethers_1.ContractFactory));
exports.BalanceAllocationMock__factory = BalanceAllocationMock__factory;
