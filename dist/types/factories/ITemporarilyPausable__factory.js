"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITemporarilyPausable__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "paused",
                type: "bool",
            },
        ],
        name: "PausedStateChanged",
        type: "event",
    },
    {
        inputs: [],
        name: "getPausedState",
        outputs: [
            {
                internalType: "bool",
                name: "paused",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "pauseWindowEndTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "bufferPeriodEndTime",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var ITemporarilyPausable__factory = /** @class */ (function () {
    function ITemporarilyPausable__factory() {
    }
    ITemporarilyPausable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ITemporarilyPausable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ITemporarilyPausable__factory.abi = _abi;
    return ITemporarilyPausable__factory;
}());
exports.ITemporarilyPausable__factory = ITemporarilyPausable__factory;
