"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporarilyPausable__factory = void 0;
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
var TemporarilyPausable__factory = /** @class */ (function () {
    function TemporarilyPausable__factory() {
    }
    TemporarilyPausable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TemporarilyPausable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TemporarilyPausable__factory.abi = _abi;
    return TemporarilyPausable__factory;
}());
exports.TemporarilyPausable__factory = TemporarilyPausable__factory;
