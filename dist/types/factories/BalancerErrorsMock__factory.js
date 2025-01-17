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
exports.BalancerErrorsMock__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "code",
                type: "uint256",
            },
        ],
        name: "fail",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x6080604052348015600f57600080fd5b506101088061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063132e4f3c14602d575b600080fd5b605660048036036020811015604157600080fd5b81019080803590602001909291905050506058565b005b605f816062565b50565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fdfea2646970667358221220fcc97b28de653a6bdd1f826ac04262e8c2faa279db51c0a6b9569d4b0c7daf5864736f6c63430007010033";
var BalancerErrorsMock__factory = /** @class */ (function (_super) {
    __extends(BalancerErrorsMock__factory, _super);
    function BalancerErrorsMock__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    BalancerErrorsMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    BalancerErrorsMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    BalancerErrorsMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BalancerErrorsMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BalancerErrorsMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BalancerErrorsMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BalancerErrorsMock__factory.bytecode = _bytecode;
    BalancerErrorsMock__factory.abi = _abi;
    return BalancerErrorsMock__factory;
}(ethers_1.ContractFactory));
exports.BalancerErrorsMock__factory = BalancerErrorsMock__factory;
