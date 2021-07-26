"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAuthentication__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
        ],
        name: "getActionId",
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
];
var IAuthentication__factory = /** @class */ (function () {
    function IAuthentication__factory() {
    }
    IAuthentication__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IAuthentication__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IAuthentication__factory.abi = _abi;
    return IAuthentication__factory;
}());
exports.IAuthentication__factory = IAuthentication__factory;
