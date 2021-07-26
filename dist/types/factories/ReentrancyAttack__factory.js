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
exports.ReentrancyAttack__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "data",
                type: "bytes4",
            },
        ],
        name: "callSender",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610245806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630a2df1ed14610030575b600080fd5b61007b6004803603602081101561004657600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061007d565b005b60003373ffffffffffffffffffffffffffffffffffffffff1682604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061012d578051825260208201915060208101905060208303925061010a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461018f576040519150601f19603f3d011682016040523d82523d6000602084013e610194565b606091505b505090508061020b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f5245454e5452414e43595f41545441434b00000000000000000000000000000081525060200191505060405180910390fd5b505056fea2646970667358221220bcd97b58d9f24877350762e9c4563c3c22817655d84e4d4c25d7032554c9c5bf64736f6c63430007010033";
var ReentrancyAttack__factory = /** @class */ (function (_super) {
    __extends(ReentrancyAttack__factory, _super);
    function ReentrancyAttack__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    ReentrancyAttack__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ReentrancyAttack__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ReentrancyAttack__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ReentrancyAttack__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ReentrancyAttack__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ReentrancyAttack__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ReentrancyAttack__factory.bytecode = _bytecode;
    ReentrancyAttack__factory.abi = _abi;
    return ReentrancyAttack__factory;
}(ethers_1.ContractFactory));
exports.ReentrancyAttack__factory = ReentrancyAttack__factory;
