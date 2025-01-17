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
exports.USDC__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
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
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "nonces",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x6101406040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120908152503480156200003a57600080fd5b50604051620021a7380380620021a7833981810160405260208110156200006057600080fd5b81019080805190602001909291905050506040518060400160405280600881526020017f55534420436f696e000000000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600881526020017f55534420436f696e0000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f555344430000000000000000000000000000000000000000000000000000000081525081600390805190602001906200016292919062000576565b5080600490805190602001906200017b92919062000576565b506012600560006101000a81548160ff021916908360ff160217905550505060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260c081815250508160e08181525050620001f76200025760201b60201c565b60a08181525050620002118184846200025f60201b60201c565b60808181525050806101008181525050505050505050620002396006620002d660201b60201c565b620002508164e8d4a51000620002f460201b60201c565b506200061c565b600046905090565b6000838383620002746200025760201b60201c565b30604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff168152602001955050505050506040516020818303038152906040528051906020012090509392505050565b80600560006101000a81548160ff021916908360ff16021790555050565b6200030682826200030a60201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620003ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b620003c260008383620004e860201b60201c565b620003de81600254620004ed60201b62000e2d1790919060201c565b6002819055506200043c816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620004ed60201b62000e2d1790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b505050565b6000808284019050838110156200056c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620005b957805160ff1916838001178555620005ea565b82800160010185558215620005ea579182015b82811115620005e9578251825591602001919060010190620005cc565b5b509050620005f99190620005fd565b5090565b5b8082111562000618576000816000905550600101620005fe565b5090565b60805160a05160c05160e0516101005161012051611b416200066660003980610ba952508061148d5250806114cf5250806114ae5250806114335250806114625250611b416000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f1911610097578063a457c2d711610066578063a457c2d7146104a7578063a9059cbb1461050b578063d505accf1461056f578063dd62ed3e14610608576100f5565b806340c10f191461032657806370a08231146103745780637ecebe00146103cc57806395d89b4114610424576100f5565b806323b872dd116100d357806323b872dd146101ff578063313ce567146102835780633644e515146102a457806339509351146102c2576100f5565b806306fdde03146100fa578063095ea7b31461017d57806318160ddd146101e1575b600080fd5b610102610680565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610142578082015181840152602081019050610127565b50505050905090810190601f16801561016f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c96004803603604081101561019357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610722565b60405180821515815260200191505060405180910390f35b6101e9610740565b6040518082815260200191505060405180910390f35b61026b6004803603606081101561021557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061074a565b60405180821515815260200191505060405180910390f35b61028b610823565b604051808260ff16815260200191505060405180910390f35b6102ac61083a565b6040518082815260200191505060405180910390f35b61030e600480360360408110156102d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610849565b60405180821515815260200191505060405180910390f35b6103726004803603604081101561033c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108fc565b005b6103b66004803603602081101561038a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061090a565b6040518082815260200191505060405180910390f35b61040e600480360360208110156103e257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610952565b6040518082815260200191505060405180910390f35b61042c6109a2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561046c578082015181840152602081019050610451565b50505050905090810190601f1680156104995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104f3600480360360408110156104bd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a44565b60405180821515815260200191505060405180910390f35b6105576004803603604081101561052157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b11565b60405180821515815260200191505060405180910390f35b610606600480360360e081101561058557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803560ff1690602001909291908035906020019092919080359060200190929190505050610b2f565b005b61066a6004803603604081101561061e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610da6565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107185780601f106106ed57610100808354040283529160200191610718565b820191906000526020600020905b8154815290600101906020018083116106fb57829003601f168201915b5050505050905090565b600061073661072f610eb5565b8484610ebd565b6001905092915050565b6000600254905090565b60006107578484846110b4565b61081884610763610eb5565b61081385604051806060016040528060288152602001611a7660289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006107c9610eb5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113759092919063ffffffff16565b610ebd565b600190509392505050565b6000600560009054906101000a900460ff16905090565b600061084461142f565b905090565b60006108f2610856610eb5565b846108ed8560016000610867610eb5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e2d90919063ffffffff16565b610ebd565b6001905092915050565b61090682826114f9565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600061099b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206116c0565b9050919050565b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a3a5780601f10610a0f57610100808354040283529160200191610a3a565b820191906000526020600020905b815481529060010190602001808311610a1d57829003601f168201915b5050505050905090565b6000610b07610a51610eb5565b84610b0285604051806060016040528060258152602001611ae76025913960016000610a7b610eb5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113759092919063ffffffff16565b610ebd565b6001905092915050565b6000610b25610b1e610eb5565b84846110b4565b6001905092915050565b83421115610ba5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f45524332305065726d69743a206578706972656420646561646c696e6500000081525060200191505060405180910390fd5b60007f0000000000000000000000000000000000000000000000000000000000000000888888610c12600660008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206116c0565b89604051602001808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200196505050505050506040516020818303038152906040528051906020012090506000610c95826116ce565b90506000610ca582878787611735565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f45524332305065726d69743a20696e76616c6964207369676e6174757265000081525060200191505060405180910390fd5b610d8f600660008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611934565b610d9a8a8a8a610ebd565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600080828401905083811015610eab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611ac36024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fc9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806119ea6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561113a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611a9e6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806119c76023913960400191505060405180910390fd5b6111cb83838361194a565b61123681604051806060016040528060268152602001611a0c602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113759092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506112c9816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e2d90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611422576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156113e75780820151818401526020810190506113cc565b50505050905090810190601f1680156114145780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b60007f000000000000000000000000000000000000000000000000000000000000000061145a61194f565b1415611488577f000000000000000000000000000000000000000000000000000000000000000090506114f6565b6114f37f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611957565b90505b90565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561159c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6115a86000838361194a565b6115bd81600254610e2d90919063ffffffff16565b600281905550611614816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e2d90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600081600001549050919050565b60006116d861142f565b8260405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c11156117b3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611a326022913960400191505060405180910390fd5b601b8460ff1614806117c85750601c8460ff16145b61181d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611a546022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611879573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611928576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f45434453413a20696e76616c6964207369676e6174757265000000000000000081525060200191505060405180910390fd5b80915050949350505050565b6001816000016000828254019250508190555050565b505050565b600046905090565b600083838361196461194f565b30604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050604051602081830303815290604052805190602001209050939250505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c756545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212202449bb1c9e350991fb6838ade87f634d1aa94e590a92a0ebcb0c8297986e8a5b64736f6c63430007010033";
var USDC__factory = /** @class */ (function (_super) {
    __extends(USDC__factory, _super);
    function USDC__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    USDC__factory.prototype.deploy = function (sender, overrides) {
        return _super.prototype.deploy.call(this, sender, overrides || {});
    };
    USDC__factory.prototype.getDeployTransaction = function (sender, overrides) {
        return _super.prototype.getDeployTransaction.call(this, sender, overrides || {});
    };
    USDC__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    USDC__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    USDC__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    USDC__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    USDC__factory.bytecode = _bytecode;
    USDC__factory.abi = _abi;
    return USDC__factory;
}(ethers_1.ContractFactory));
exports.USDC__factory = USDC__factory;
