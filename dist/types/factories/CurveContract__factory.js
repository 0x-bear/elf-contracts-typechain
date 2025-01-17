"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurveContract__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "token_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "i",
                type: "uint256",
            },
        ],
        name: "calc_withdraw_one_coin",
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
var CurveContract__factory = /** @class */ (function () {
    function CurveContract__factory() {
    }
    CurveContract__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    CurveContract__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    CurveContract__factory.abi = _abi;
    return CurveContract__factory;
}());
exports.CurveContract__factory = CurveContract__factory;
