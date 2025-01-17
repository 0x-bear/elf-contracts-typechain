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
exports.EthForceSender__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
var _bytecode = "0x6080604052604051604e380380604e83398181016040526020811015602357600080fd5b81019080805190602001909291905050508073ffffffffffffffffffffffffffffffffffffffff16fffe";
var EthForceSender__factory = /** @class */ (function (_super) {
    __extends(EthForceSender__factory, _super);
    function EthForceSender__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    EthForceSender__factory.prototype.deploy = function (recipient, overrides) {
        return _super.prototype.deploy.call(this, recipient, overrides || {});
    };
    EthForceSender__factory.prototype.getDeployTransaction = function (recipient, overrides) {
        return _super.prototype.getDeployTransaction.call(this, recipient, overrides || {});
    };
    EthForceSender__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    EthForceSender__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    EthForceSender__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    EthForceSender__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    EthForceSender__factory.bytecode = _bytecode;
    EthForceSender__factory.abi = _abi;
    return EthForceSender__factory;
}(ethers_1.ContractFactory));
exports.EthForceSender__factory = EthForceSender__factory;
