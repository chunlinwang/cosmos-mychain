import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QuerySigningInfosRequest } from "./types/cosmos/slashing/v1beta1/query";
import { SigningInfo } from "./types/cosmos/slashing/v1beta1/genesis";
import { ValidatorMissedBlocks } from "./types/cosmos/slashing/v1beta1/genesis";
import { Params } from "./types/cosmos/slashing/v1beta1/slashing";
import { QueryParamsResponse } from "./types/cosmos/slashing/v1beta1/query";
import { QuerySigningInfosResponse } from "./types/cosmos/slashing/v1beta1/query";
import { GenesisState } from "./types/cosmos/slashing/v1beta1/genesis";
import { ValidatorSigningInfo } from "./types/cosmos/slashing/v1beta1/slashing";
import { QueryParamsRequest } from "./types/cosmos/slashing/v1beta1/query";
import { QuerySigningInfoRequest } from "./types/cosmos/slashing/v1beta1/query";
import { QuerySigningInfoResponse } from "./types/cosmos/slashing/v1beta1/query";
import { MsgUnjail } from "./types/cosmos/slashing/v1beta1/tx";
import { MsgUnjailResponse } from "./types/cosmos/slashing/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/slashing/v1beta1/tx";
import { MissedBlock } from "./types/cosmos/slashing/v1beta1/genesis";
import { MsgUpdateParams } from "./types/cosmos/slashing/v1beta1/tx";
export { QuerySigningInfosRequest, SigningInfo, ValidatorMissedBlocks, Params, QueryParamsResponse, QuerySigningInfosResponse, GenesisState, ValidatorSigningInfo, QueryParamsRequest, QuerySigningInfoRequest, QuerySigningInfoResponse, MsgUnjail, MsgUnjailResponse, MsgUpdateParamsResponse, MissedBlock, MsgUpdateParams };
type sendQuerySigningInfosRequestParams = {
    value: QuerySigningInfosRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSigningInfoParams = {
    value: SigningInfo;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorMissedBlocksParams = {
    value: ValidatorMissedBlocks;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySigningInfosResponseParams = {
    value: QuerySigningInfosResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSigningInfoParams = {
    value: ValidatorSigningInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySigningInfoRequestParams = {
    value: QuerySigningInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySigningInfoResponseParams = {
    value: QuerySigningInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnjailParams = {
    value: MsgUnjail;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnjailResponseParams = {
    value: MsgUnjailResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMissedBlockParams = {
    value: MissedBlock;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type querySigningInfosRequestParams = {
    value: QuerySigningInfosRequest;
};
type signingInfoParams = {
    value: SigningInfo;
};
type validatorMissedBlocksParams = {
    value: ValidatorMissedBlocks;
};
type paramsParams = {
    value: Params;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type querySigningInfosResponseParams = {
    value: QuerySigningInfosResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type validatorSigningInfoParams = {
    value: ValidatorSigningInfo;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type querySigningInfoRequestParams = {
    value: QuerySigningInfoRequest;
};
type querySigningInfoResponseParams = {
    value: QuerySigningInfoResponse;
};
type msgUnjailParams = {
    value: MsgUnjail;
};
type msgUnjailResponseParams = {
    value: MsgUnjailResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type missedBlockParams = {
    value: MissedBlock;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQuerySigningInfosRequest({ value, fee, memo }: sendQuerySigningInfosRequestParams): Promise<DeliverTxResponse>;
    sendSigningInfo({ value, fee, memo }: sendSigningInfoParams): Promise<DeliverTxResponse>;
    sendValidatorMissedBlocks({ value, fee, memo }: sendValidatorMissedBlocksParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySigningInfosResponse({ value, fee, memo }: sendQuerySigningInfosResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendValidatorSigningInfo({ value, fee, memo }: sendValidatorSigningInfoParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQuerySigningInfoRequest({ value, fee, memo }: sendQuerySigningInfoRequestParams): Promise<DeliverTxResponse>;
    sendQuerySigningInfoResponse({ value, fee, memo }: sendQuerySigningInfoResponseParams): Promise<DeliverTxResponse>;
    sendMsgUnjail({ value, fee, memo }: sendMsgUnjailParams): Promise<DeliverTxResponse>;
    sendMsgUnjailResponse({ value, fee, memo }: sendMsgUnjailResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMissedBlock({ value, fee, memo }: sendMissedBlockParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    querySigningInfosRequest({ value }: querySigningInfosRequestParams): EncodeObject;
    signingInfo({ value }: signingInfoParams): EncodeObject;
    validatorMissedBlocks({ value }: validatorMissedBlocksParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    querySigningInfosResponse({ value }: querySigningInfosResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    validatorSigningInfo({ value }: validatorSigningInfoParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    querySigningInfoRequest({ value }: querySigningInfoRequestParams): EncodeObject;
    querySigningInfoResponse({ value }: querySigningInfoResponseParams): EncodeObject;
    msgUnjail({ value }: msgUnjailParams): EncodeObject;
    msgUnjailResponse({ value }: msgUnjailResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    missedBlock({ value }: missedBlockParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosSlashingV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
