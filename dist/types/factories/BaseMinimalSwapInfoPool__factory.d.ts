import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BaseMinimalSwapInfoPool, BaseMinimalSwapInfoPoolInterface } from "../BaseMinimalSwapInfoPool";
export declare class BaseMinimalSwapInfoPool__factory {
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
    static createInterface(): BaseMinimalSwapInfoPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseMinimalSwapInfoPool;
}
