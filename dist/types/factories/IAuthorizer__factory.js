"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAuthorizer__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                name: "where",
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
];
var IAuthorizer__factory = /** @class */ (function () {
    function IAuthorizer__factory() {
    }
    IAuthorizer__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IAuthorizer__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IAuthorizer__factory.abi = _abi;
    return IAuthorizer__factory;
}());
exports.IAuthorizer__factory = IAuthorizer__factory;
