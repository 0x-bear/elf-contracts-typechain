import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockPool, MockPoolInterface } from "../MockPool";
export declare class MockPool__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(vault: string, specialization: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockPool>;
    getDeployTransaction(vault: string, specialization: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockPool;
    connect(signer: Signer): MockPool__factory;
    static readonly bytecode = "0x60c0604052670de0b6b3a76400006000553480156200001d57600080fd5b50604051620016f0380380620016f083398181016040528101906200004391906200018b565b8173ffffffffffffffffffffffffffffffffffffffff166309b2760f826040518263ffffffff1660e01b81526004016200007e9190620001dd565b602060405180830381600087803b1580156200009957600080fd5b505af1158015620000ae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d491906200015f565b60a081815250508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505050620002c8565b6000815190506200012b8162000283565b92915050565b60008151905062000142816200029d565b92915050565b6000815190506200015981620002b7565b92915050565b6000602082840312156200017257600080fd5b600062000182848285016200011a565b91505092915050565b600080604083850312156200019f57600080fd5b6000620001af8582860162000131565b9250506020620001c28582860162000148565b9150509250929050565b620001d78162000261565b82525050565b6000602082019050620001f46000830184620001cc565b92915050565b6000620002078262000241565b9050919050565b6000819050919050565b60006200022582620001fa565b9050919050565b60008190506200023c8262000275565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200026e826200022c565b9050919050565b600381106200028057fe5b50565b6200028e816200020e565b81146200029a57600080fd5b50565b620002a88162000218565b8114620002b457600080fd5b50565b60038110620002c557600080fd5b50565b60805160601c60a0516113ed620003036000398061028d52806103065280610368525080610251528061032c528061045652506113ed6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063641579a611610066578063641579a61461011e57806374f3b0091461013a5780638d928af81461016b5780639d2c110c14610189578063d5c096c4146101b957610093565b806301ec954a14610098578063267dc1f0146100c857806338fff2d0146100e45780635f2b65f814610102575b600080fd5b6100b260048036038101906100ad9190610c30565b6101ea565b6040516100bf91906110b6565b60405180910390f35b6100e260048036038101906100dd9190610a8a565b61024f565b005b6100ec610302565b6040516100f99190610f8e565b60405180910390f35b61011c60048036038101906101179190610a49565b61032a565b005b61013860048036038101906101339190610d2a565b6103da565b005b610154600480360381019061014f9190610b62565b6103e4565b604051610162929190610f57565b60405180910390f35b610173610452565b604051610180919061109b565b60405180910390f35b6101a3600480360381019061019e9190610cc3565b61047a565b6040516101b091906110b6565b60405180910390f35b6101d360048036038101906101ce9190610b62565b6104de565b6040516101e1929190610f57565b60405180910390f35b60008060018111156101f857fe5b8560000151600181111561020857fe5b1461022b57610226600054866060015161054c90919063ffffffff16565b610245565b61024460005486606001516105b090919063ffffffff16565b5b9050949350505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166366a9c7d27f000000000000000000000000000000000000000000000000000000000000000084846040518463ffffffff1660e01b81526004016102cc93929190611056565b600060405180830381600087803b1580156102e657600080fd5b505af11580156102fa573d6000803e3d6000fd5b505050505050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d3aeb967f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016103a5929190611026565b600060405180830381600087803b1580156103bf57600080fd5b505af11580156103d3573d6000803e3d6000fd5b5050505050565b8060008190555050565b6060807fd757d12f44d8d0b749520380aa9c4b9f37a744d90e601bd174de67345108f6c9898989898989896040516104229796959493929190610fa9565b60405180910390a18280602001905181019061043e9190610af6565b809250819350505097509795505050505050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600080600181111561048857fe5b8460000151600181111561049857fe5b146104bb576104b6600054856060015161054c90919063ffffffff16565b6104d5565b6104d460005485606001516105b090919063ffffffff16565b5b90509392505050565b6060807f7db7a909c113f809a4d01bf05f9f750c273333b7db84675206d198d4977146948989898989898960405161051c9796959493929190610fa9565b60405180910390a1828060200190518101906105389190610af6565b809250819350505097509795505050505050565b600061055d600083141560046105f4565b600083141561056f57600090506105aa565b6000670de0b6b3a76400008402905061059c670de0b6b3a764000085838161059357fe5b041460056105f4565b8281816105a557fe5b049150505b92915050565b60008082840290506105d960008514806105d25750838583816105cf57fe5b04145b60036105f4565b670de0b6b3a764000081816105ea57fe5b0491505092915050565b816106035761060281610607565b5b5050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b6000813590506106868161134b565b92915050565b600082601f83011261069d57600080fd5b81356106b06106ab826110fe565b6110d1565b915081818352602084019350602081019050838560208402820111156106d557600080fd5b60005b8381101561070557816106eb8882610677565b8452602084019350602083019250506001810190506106d8565b5050505092915050565b600082601f83011261072057600080fd5b813561073361072e82611126565b6110d1565b9150818183526020840193506020810190508385602084028201111561075857600080fd5b60005b83811015610788578161076e8882610901565b84526020840193506020830192505060018101905061075b565b5050505092915050565b600082601f8301126107a357600080fd5b81356107b66107b18261114e565b6110d1565b915081818352602084019350602081019050838560208402820111156107db57600080fd5b60005b8381101561080b57816107f18882610a1f565b8452602084019350602083019250506001810190506107de565b5050505092915050565b600082601f83011261082657600080fd5b81516108396108348261114e565b6110d1565b9150818183526020840193506020810190508385602084028201111561085e57600080fd5b60005b8381101561088e57816108748882610a34565b845260208401935060208301925050600181019050610861565b5050505092915050565b6000813590506108a781611362565b92915050565b600082601f8301126108be57600080fd5b81356108d16108cc82611176565b6110d1565b915080825260208301602083018583830111156108ed57600080fd5b6108f88382846112f8565b50505092915050565b60008135905061091081611379565b92915050565b60008135905061092581611390565b92915050565b6000610120828403121561093e57600080fd5b6109496101206110d1565b9050600061095984828501610916565b600083015250602061096d84828501610901565b602083015250604061098184828501610901565b604083015250606061099584828501610a1f565b60608301525060806109a984828501610898565b60808301525060a06109bd84828501610a1f565b60a08301525060c06109d184828501610677565b60c08301525060e06109e584828501610677565b60e08301525061010082013567ffffffffffffffff811115610a0657600080fd5b610a12848285016108ad565b6101008301525092915050565b600081359050610a2e816113a0565b92915050565b600081519050610a43816113a0565b92915050565b600060208284031215610a5b57600080fd5b600082013567ffffffffffffffff811115610a7557600080fd5b610a818482850161070f565b91505092915050565b60008060408385031215610a9d57600080fd5b600083013567ffffffffffffffff811115610ab757600080fd5b610ac38582860161070f565b925050602083013567ffffffffffffffff811115610ae057600080fd5b610aec8582860161068c565b9150509250929050565b60008060408385031215610b0957600080fd5b600083015167ffffffffffffffff811115610b2357600080fd5b610b2f85828601610815565b925050602083015167ffffffffffffffff811115610b4c57600080fd5b610b5885828601610815565b9150509250929050565b600080600080600080600060e0888a031215610b7d57600080fd5b6000610b8b8a828b01610898565b9750506020610b9c8a828b01610677565b9650506040610bad8a828b01610677565b955050606088013567ffffffffffffffff811115610bca57600080fd5b610bd68a828b01610792565b9450506080610be78a828b01610a1f565b93505060a0610bf88a828b01610a1f565b92505060c088013567ffffffffffffffff811115610c1557600080fd5b610c218a828b016108ad565b91505092959891949750929550565b60008060008060808587031215610c4657600080fd5b600085013567ffffffffffffffff811115610c6057600080fd5b610c6c8782880161092b565b945050602085013567ffffffffffffffff811115610c8957600080fd5b610c9587828801610792565b9350506040610ca687828801610a1f565b9250506060610cb787828801610a1f565b91505092959194509250565b600080600060608486031215610cd857600080fd5b600084013567ffffffffffffffff811115610cf257600080fd5b610cfe8682870161092b565b9350506020610d0f86828701610a1f565b9250506040610d2086828701610a1f565b9150509250925092565b600060208284031215610d3c57600080fd5b6000610d4a84828501610a1f565b91505092915050565b6000610d5f8383610d9b565b60208301905092915050565b6000610d778383610f1b565b60208301905092915050565b6000610d8f8383610f39565b60208301905092915050565b610da481611258565b82525050565b610db381611258565b82525050565b6000610dc4826111d2565b610dce8185611225565b9350610dd9836111a2565b8060005b83811015610e0a578151610df18882610d53565b9750610dfc836111fe565b925050600181019050610ddd565b5085935050505092915050565b6000610e22826111dd565b610e2c8185611225565b9350610e37836111b2565b8060005b83811015610e68578151610e4f8882610d6b565b9750610e5a8361120b565b925050600181019050610e3b565b5085935050505092915050565b6000610e80826111e8565b610e8a8185611236565b9350610e95836111c2565b8060005b83811015610ec6578151610ead8882610d83565b9750610eb883611218565b925050600181019050610e99565b5085935050505092915050565b610edc8161126a565b82525050565b6000610eed826111f3565b610ef78185611247565b9350610f07818560208601611307565b610f108161133a565b840191505092915050565b610f24816112b0565b82525050565b610f33816112d4565b82525050565b610f42816112a6565b82525050565b610f51816112a6565b82525050565b60006040820190508181036000830152610f718185610e75565b90508181036020830152610f858184610e75565b90509392505050565b6000602082019050610fa36000830184610ed3565b92915050565b600060e082019050610fbe600083018a610ed3565b610fcb6020830189610daa565b610fd86040830188610daa565b8181036060830152610fea8187610e75565b9050610ff96080830186610f48565b61100660a0830185610f48565b81810360c08301526110188184610ee2565b905098975050505050505050565b600060408201905061103b6000830185610ed3565b818103602083015261104d8184610e17565b90509392505050565b600060608201905061106b6000830186610ed3565b818103602083015261107d8185610e17565b905081810360408301526110918184610db9565b9050949350505050565b60006020820190506110b06000830184610f2a565b92915050565b60006020820190506110cb6000830184610f48565b92915050565b6000604051905081810181811067ffffffffffffffff821117156110f457600080fd5b8060405250919050565b600067ffffffffffffffff82111561111557600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561113d57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561116557600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561118d57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061126382611286565b9050919050565b6000819050919050565b600061127f82611258565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006112bb826112c2565b9050919050565b60006112cd82611286565b9050919050565b60006112df826112e6565b9050919050565b60006112f182611286565b9050919050565b82818337600083830152505050565b60005b8381101561132557808201518184015260208101905061130a565b83811115611334576000848401525b50505050565b6000601f19601f8301169050919050565b61135481611258565b811461135f57600080fd5b50565b61136b8161126a565b811461137657600080fd5b50565b61138281611274565b811461138d57600080fd5b50565b6002811061139d57600080fd5b50565b6113a9816112a6565b81146113b457600080fd5b5056fea2646970667358221220952e4f30badb4b7ce33dd8c485442218e73a0443587f489083749fcb409aade464736f6c63430007010033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MockPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockPool;
}
