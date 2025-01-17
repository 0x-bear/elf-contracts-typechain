import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISignaturesValidator, ISignaturesValidatorInterface } from "../ISignaturesValidator";
export declare class ISignaturesValidator__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): ISignaturesValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISignaturesValidator;
}
