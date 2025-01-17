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
exports.MockPoolFactory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IVault",
                name: "_vault",
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
                internalType: "address",
                name: "pool",
                type: "address",
            },
        ],
        name: "PoolCreated",
        type: "event",
    },
    {
        inputs: [],
        name: "create",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getVault",
        outputs: [
            {
                internalType: "contract IVault",
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
                internalType: "address",
                name: "pool",
                type: "address",
            },
        ],
        name: "isPoolFromFactory",
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
];
var _bytecode = "0x60a060405234801561001057600080fd5b5060405161059538038061059583398181016040528101906100329190610086565b808073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505061010a565b600081519050610080816100f3565b92915050565b60006020828403121561009857600080fd5b60006100a684828501610071565b91505092915050565b60006100ba826100d3565b9050919050565b60006100cc826100af565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100fc816100c1565b811461010757600080fd5b50565b60805160601c61046e6101276000398061010b525061046e6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80636634b753146100465780638d928af814610076578063efc81a8c14610094575b600080fd5b610060600480360381019061005b919061022b565b6100b2565b60405161006d919061029c565b60405180910390f35b61007e610107565b60405161008b91906102b7565b60405180910390f35b61009c61012f565b6040516100a99190610281565b60405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60008060405161013e9061020a565b604051809103906000f08015801561015a573d6000803e3d6000fd5b5090506101668161016d565b8091505090565b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f83a48fbcfc991335314e74d0496aab6a1987e992ddc85dddbcc4d6dd6ef2e9fc60405160405180910390a250565b60ed8061034c83390190565b60008135905061022581610334565b92915050565b60006020828403121561023d57600080fd5b600061024b84828501610216565b91505092915050565b61025d816102d2565b82525050565b61026c816102e4565b82525050565b61027b81610310565b82525050565b60006020820190506102966000830184610254565b92915050565b60006020820190506102b16000830184610263565b92915050565b60006020820190506102cc6000830184610272565b92915050565b60006102dd826102f0565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061031b82610322565b9050919050565b600061032d826102f0565b9050919050565b61033d816102d2565b811461034857600080fd5b5056fe608060405234801561001057600080fd5b5060ce8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806338fff2d014602d575b600080fd5b60336047565b604051603e91906075565b60405180910390f35b60003073ffffffffffffffffffffffffffffffffffffffff1660001b905090565b606f81608e565b82525050565b6000602082019050608860008301846068565b92915050565b600081905091905056fea2646970667358221220479b49e84d314666fcfdba5bd577f77cf2cb2e02171958f1b5738a91aa822f6764736f6c63430007010033a2646970667358221220a879365289501f44c832a3c3e7cadd8aaf56681ba03209e251d5405bebee4fa364736f6c63430007010033";
var MockPoolFactory__factory = /** @class */ (function (_super) {
    __extends(MockPoolFactory__factory, _super);
    function MockPoolFactory__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    MockPoolFactory__factory.prototype.deploy = function (_vault, overrides) {
        return _super.prototype.deploy.call(this, _vault, overrides || {});
    };
    MockPoolFactory__factory.prototype.getDeployTransaction = function (_vault, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _vault, overrides || {});
    };
    MockPoolFactory__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockPoolFactory__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockPoolFactory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MockPoolFactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MockPoolFactory__factory.bytecode = _bytecode;
    MockPoolFactory__factory.abi = _abi;
    return MockPoolFactory__factory;
}(ethers_1.ContractFactory));
exports.MockPoolFactory__factory = MockPoolFactory__factory;
