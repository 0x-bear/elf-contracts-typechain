import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC20PermitWithSupply, ERC20PermitWithSupplyInterface } from "../ERC20PermitWithSupply";
export declare class ERC20PermitWithSupply__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
    static createInterface(): ERC20PermitWithSupplyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20PermitWithSupply;
}
