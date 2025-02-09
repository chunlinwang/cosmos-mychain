import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryInterchainAccountRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgRegisterInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgRegisterInterchainAccount } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgSendTx } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgUpdateParams } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgSendTxResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryParamsRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { Params } from "./types/ibc/applications/interchain_accounts/controller/v1/controller";
export { QueryInterchainAccountRequest, MsgUpdateParamsResponse, QueryInterchainAccountResponse, MsgRegisterInterchainAccountResponse, MsgRegisterInterchainAccount, QueryParamsResponse, MsgSendTx, MsgUpdateParams, MsgSendTxResponse, QueryParamsRequest, Params };
type sendQueryInterchainAccountRequestParams = {
    value: QueryInterchainAccountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInterchainAccountResponseParams = {
    value: QueryInterchainAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterInterchainAccountResponseParams = {
    value: MsgRegisterInterchainAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterInterchainAccountParams = {
    value: MsgRegisterInterchainAccount;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendTxParams = {
    value: MsgSendTx;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendTxResponseParams = {
    value: MsgSendTxResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type queryInterchainAccountRequestParams = {
    value: QueryInterchainAccountRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryInterchainAccountResponseParams = {
    value: QueryInterchainAccountResponse;
};
type msgRegisterInterchainAccountResponseParams = {
    value: MsgRegisterInterchainAccountResponse;
};
type msgRegisterInterchainAccountParams = {
    value: MsgRegisterInterchainAccount;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgSendTxParams = {
    value: MsgSendTx;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgSendTxResponseParams = {
    value: MsgSendTxResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type paramsParams = {
    value: Params;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryInterchainAccountRequest({ value, fee, memo }: sendQueryInterchainAccountRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryInterchainAccountResponse({ value, fee, memo }: sendQueryInterchainAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterInterchainAccountResponse({ value, fee, memo }: sendMsgRegisterInterchainAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterInterchainAccount({ value, fee, memo }: sendMsgRegisterInterchainAccountParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendTx({ value, fee, memo }: sendMsgSendTxParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgSendTxResponse({ value, fee, memo }: sendMsgSendTxResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    queryInterchainAccountRequest({ value }: queryInterchainAccountRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryInterchainAccountResponse({ value }: queryInterchainAccountResponseParams): EncodeObject;
    msgRegisterInterchainAccountResponse({ value }: msgRegisterInterchainAccountResponseParams): EncodeObject;
    msgRegisterInterchainAccount({ value }: msgRegisterInterchainAccountParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgSendTx({ value }: msgSendTxParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgSendTxResponse({ value }: msgSendTxResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
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
        IbcApplicationsInterchainAccountsControllerV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
