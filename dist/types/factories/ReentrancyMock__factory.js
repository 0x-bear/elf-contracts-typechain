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
exports.ReentrancyMock__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "callback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ReentrancyAttack",
                name: "attacker",
                type: "address",
            },
        ],
        name: "countAndCall",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256",
            },
        ],
        name: "countLocalRecursive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256",
            },
        ],
        name: "countThisRecursive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "counter",
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
var _bytecode = "0x608060405234801561001057600080fd5b5060016000819055506000600181905550610512806100306000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063083b27321461005c57806361bc221a146100665780638c5344fa1461008457806396ffa690146100b2578063b672ad8b146100e0575b600080fd5b610064610124565b005b61006e61013e565b6040518082815260200191505060405180910390f35b6100b06004803603602081101561009a57600080fd5b8101908080359060200190929190505050610144565b005b6100de600480360360208110156100c857600080fd5b8101908080359060200190929190505050610325565b005b610122600480360360208110156100f657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610356565b005b61012c610421565b61013461043d565b61013c61044f565b565b60015481565b61014c610421565b600081111561031a5761015d61043d565b60003073ffffffffffffffffffffffffffffffffffffffff1660018303604051602401808281526020019150506040516020818303038152906040527f8c5344fa000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061023a5780518252602082019150602081019050602083039250610217565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461029c576040519150601f19603f3d011682016040523d82523d6000602084013e6102a1565b606091505b5050905080610318576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f5245454e5452414e43595f4d4f434b000000000000000000000000000000000081525060200191505060405180910390fd5b505b61032261044f565b50565b61032d610421565b600081111561034b5761033e61043d565b61034a60018203610325565b5b61035361044f565b50565b61035e610421565b61036661043d565b60007f083b2732f78169bfaad6b407fa338cc97d697ed69d3915a18239cc111d51a40290508173ffffffffffffffffffffffffffffffffffffffff16630a2df1ed826040518263ffffffff1660e01b815260040180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001915050600060405180830381600087803b1580156103fd57600080fd5b505af1158015610411573d6000803e3d6000fd5b505050505061041e61044f565b50565b61043360026000541415610190610459565b6002600081905550565b60018060008282540192505081905550565b6001600081905550565b81610468576104678161046c565b5b5050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fdfea26469706673582212204f4db8fec091b430617284b313583dd89aba28e869119a157af30a57e25c13a964736f6c63430007010033";
var ReentrancyMock__factory = /** @class */ (function (_super) {
    __extends(ReentrancyMock__factory, _super);
    function ReentrancyMock__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    ReentrancyMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ReentrancyMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ReentrancyMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ReentrancyMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ReentrancyMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ReentrancyMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ReentrancyMock__factory.bytecode = _bytecode;
    ReentrancyMock__factory.abi = _abi;
    return ReentrancyMock__factory;
}(ethers_1.ContractFactory));
exports.ReentrancyMock__factory = ReentrancyMock__factory;
