import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryModuleAccountsRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountsResponse } from "./types/cosmos/auth/v1beta1/query";
import { AddressStringToBytesResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountAddressByIDResponse } from "./types/cosmos/auth/v1beta1/query";
import { ModuleAccount } from "./types/cosmos/auth/v1beta1/auth";
import { Bech32PrefixResponse } from "./types/cosmos/auth/v1beta1/query";
import { AddressBytesToStringRequest } from "./types/cosmos/auth/v1beta1/query";
import { AddressStringToBytesRequest } from "./types/cosmos/auth/v1beta1/query";
import { BaseAccount } from "./types/cosmos/auth/v1beta1/auth";
import { QueryParamsRequest } from "./types/cosmos/auth/v1beta1/query";
import { AddressBytesToStringResponse } from "./types/cosmos/auth/v1beta1/query";
import { ModuleCredential } from "./types/cosmos/auth/v1beta1/auth";
import { QueryAccountsResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountByNameResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountsRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountByNameRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountAddressByIDRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountInfoResponse } from "./types/cosmos/auth/v1beta1/query";
import { Params } from "./types/cosmos/auth/v1beta1/auth";
import { MsgUpdateParamsResponse } from "./types/cosmos/auth/v1beta1/tx";
import { Bech32PrefixRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountInfoRequest } from "./types/cosmos/auth/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/auth/v1beta1/tx";
import { GenesisState } from "./types/cosmos/auth/v1beta1/genesis";
export { QueryModuleAccountsRequest, QueryModuleAccountsResponse, AddressStringToBytesResponse, QueryAccountAddressByIDResponse, ModuleAccount, Bech32PrefixResponse, AddressBytesToStringRequest, AddressStringToBytesRequest, BaseAccount, QueryParamsRequest, AddressBytesToStringResponse, ModuleCredential, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsResponse, QueryModuleAccountByNameResponse, QueryAccountsRequest, QueryModuleAccountByNameRequest, QueryAccountAddressByIDRequest, QueryAccountInfoResponse, Params, MsgUpdateParamsResponse, Bech32PrefixRequest, QueryAccountInfoRequest, MsgUpdateParams, GenesisState };
type sendQueryModuleAccountsRequestParams = {
    value: QueryModuleAccountsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleAccountsResponseParams = {
    value: QueryModuleAccountsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendAddressStringToBytesResponseParams = {
    value: AddressStringToBytesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountAddressByIDResponseParams = {
    value: QueryAccountAddressByIDResponse;
    fee?: StdFee;
    memo?: string;
};
type sendModuleAccountParams = {
    value: ModuleAccount;
    fee?: StdFee;
    memo?: string;
};
type sendBech32PrefixResponseParams = {
    value: Bech32PrefixResponse;
    fee?: StdFee;
    memo?: string;
};
type sendAddressBytesToStringRequestParams = {
    value: AddressBytesToStringRequest;
    fee?: StdFee;
    memo?: string;
};
type sendAddressStringToBytesRequestParams = {
    value: AddressStringToBytesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendBaseAccountParams = {
    value: BaseAccount;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendAddressBytesToStringResponseParams = {
    value: AddressBytesToStringResponse;
    fee?: StdFee;
    memo?: string;
};
type sendModuleCredentialParams = {
    value: ModuleCredential;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountsResponseParams = {
    value: QueryAccountsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountRequestParams = {
    value: QueryAccountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountResponseParams = {
    value: QueryAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleAccountByNameResponseParams = {
    value: QueryModuleAccountByNameResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountsRequestParams = {
    value: QueryAccountsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleAccountByNameRequestParams = {
    value: QueryModuleAccountByNameRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountAddressByIDRequestParams = {
    value: QueryAccountAddressByIDRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountInfoResponseParams = {
    value: QueryAccountInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendBech32PrefixRequestParams = {
    value: Bech32PrefixRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountInfoRequestParams = {
    value: QueryAccountInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type queryModuleAccountsRequestParams = {
    value: QueryModuleAccountsRequest;
};
type queryModuleAccountsResponseParams = {
    value: QueryModuleAccountsResponse;
};
type addressStringToBytesResponseParams = {
    value: AddressStringToBytesResponse;
};
type queryAccountAddressByIdresponseParams = {
    value: QueryAccountAddressByIDResponse;
};
type moduleAccountParams = {
    value: ModuleAccount;
};
type bech32PrefixResponseParams = {
    value: Bech32PrefixResponse;
};
type addressBytesToStringRequestParams = {
    value: AddressBytesToStringRequest;
};
type addressStringToBytesRequestParams = {
    value: AddressStringToBytesRequest;
};
type baseAccountParams = {
    value: BaseAccount;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type addressBytesToStringResponseParams = {
    value: AddressBytesToStringResponse;
};
type moduleCredentialParams = {
    value: ModuleCredential;
};
type queryAccountsResponseParams = {
    value: QueryAccountsResponse;
};
type queryAccountRequestParams = {
    value: QueryAccountRequest;
};
type queryAccountResponseParams = {
    value: QueryAccountResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryModuleAccountByNameResponseParams = {
    value: QueryModuleAccountByNameResponse;
};
type queryAccountsRequestParams = {
    value: QueryAccountsRequest;
};
type queryModuleAccountByNameRequestParams = {
    value: QueryModuleAccountByNameRequest;
};
type queryAccountAddressByIdrequestParams = {
    value: QueryAccountAddressByIDRequest;
};
type queryAccountInfoResponseParams = {
    value: QueryAccountInfoResponse;
};
type paramsParams = {
    value: Params;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type bech32PrefixRequestParams = {
    value: Bech32PrefixRequest;
};
type queryAccountInfoRequestParams = {
    value: QueryAccountInfoRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type genesisStateParams = {
    value: GenesisState;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryModuleAccountsRequest({ value, fee, memo }: sendQueryModuleAccountsRequestParams): Promise<DeliverTxResponse>;
    sendQueryModuleAccountsResponse({ value, fee, memo }: sendQueryModuleAccountsResponseParams): Promise<DeliverTxResponse>;
    sendAddressStringToBytesResponse({ value, fee, memo }: sendAddressStringToBytesResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountAddressByIDResponse({ value, fee, memo }: sendQueryAccountAddressByIDResponseParams): Promise<DeliverTxResponse>;
    sendModuleAccount({ value, fee, memo }: sendModuleAccountParams): Promise<DeliverTxResponse>;
    sendBech32PrefixResponse({ value, fee, memo }: sendBech32PrefixResponseParams): Promise<DeliverTxResponse>;
    sendAddressBytesToStringRequest({ value, fee, memo }: sendAddressBytesToStringRequestParams): Promise<DeliverTxResponse>;
    sendAddressStringToBytesRequest({ value, fee, memo }: sendAddressStringToBytesRequestParams): Promise<DeliverTxResponse>;
    sendBaseAccount({ value, fee, memo }: sendBaseAccountParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendAddressBytesToStringResponse({ value, fee, memo }: sendAddressBytesToStringResponseParams): Promise<DeliverTxResponse>;
    sendModuleCredential({ value, fee, memo }: sendModuleCredentialParams): Promise<DeliverTxResponse>;
    sendQueryAccountsResponse({ value, fee, memo }: sendQueryAccountsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountRequest({ value, fee, memo }: sendQueryAccountRequestParams): Promise<DeliverTxResponse>;
    sendQueryAccountResponse({ value, fee, memo }: sendQueryAccountResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryModuleAccountByNameResponse({ value, fee, memo }: sendQueryModuleAccountByNameResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountsRequest({ value, fee, memo }: sendQueryAccountsRequestParams): Promise<DeliverTxResponse>;
    sendQueryModuleAccountByNameRequest({ value, fee, memo }: sendQueryModuleAccountByNameRequestParams): Promise<DeliverTxResponse>;
    sendQueryAccountAddressByIDRequest({ value, fee, memo }: sendQueryAccountAddressByIDRequestParams): Promise<DeliverTxResponse>;
    sendQueryAccountInfoResponse({ value, fee, memo }: sendQueryAccountInfoResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendBech32PrefixRequest({ value, fee, memo }: sendBech32PrefixRequestParams): Promise<DeliverTxResponse>;
    sendQueryAccountInfoRequest({ value, fee, memo }: sendQueryAccountInfoRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    queryModuleAccountsRequest({ value }: queryModuleAccountsRequestParams): EncodeObject;
    queryModuleAccountsResponse({ value }: queryModuleAccountsResponseParams): EncodeObject;
    addressStringToBytesResponse({ value }: addressStringToBytesResponseParams): EncodeObject;
    queryAccountAddressByIdresponse({ value }: queryAccountAddressByIdresponseParams): EncodeObject;
    moduleAccount({ value }: moduleAccountParams): EncodeObject;
    bech32PrefixResponse({ value }: bech32PrefixResponseParams): EncodeObject;
    addressBytesToStringRequest({ value }: addressBytesToStringRequestParams): EncodeObject;
    addressStringToBytesRequest({ value }: addressStringToBytesRequestParams): EncodeObject;
    baseAccount({ value }: baseAccountParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    addressBytesToStringResponse({ value }: addressBytesToStringResponseParams): EncodeObject;
    moduleCredential({ value }: moduleCredentialParams): EncodeObject;
    queryAccountsResponse({ value }: queryAccountsResponseParams): EncodeObject;
    queryAccountRequest({ value }: queryAccountRequestParams): EncodeObject;
    queryAccountResponse({ value }: queryAccountResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryModuleAccountByNameResponse({ value }: queryModuleAccountByNameResponseParams): EncodeObject;
    queryAccountsRequest({ value }: queryAccountsRequestParams): EncodeObject;
    queryModuleAccountByNameRequest({ value }: queryModuleAccountByNameRequestParams): EncodeObject;
    queryAccountAddressByIdrequest({ value }: queryAccountAddressByIdrequestParams): EncodeObject;
    queryAccountInfoResponse({ value }: queryAccountInfoResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    bech32PrefixRequest({ value }: bech32PrefixRequestParams): EncodeObject;
    queryAccountInfoRequest({ value }: queryAccountInfoRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
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
        CosmosAuthV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
