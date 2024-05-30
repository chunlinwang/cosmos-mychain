import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryPayeeRequest } from "./types/ibc/applications/fee/v1/query";
import { MsgRegisterCounterpartyPayee } from "./types/ibc/applications/fee/v1/tx";
import { QueryIncentivizedPacketsResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryIncentivizedPacketResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryIncentivizedPacketsForChannelResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalTimeoutFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { IncentivizedAcknowledgement } from "./types/ibc/applications/fee/v1/ack";
import { MsgRegisterPayee } from "./types/ibc/applications/fee/v1/tx";
import { IdentifiedPacketFees } from "./types/ibc/applications/fee/v1/fee";
import { QueryTotalAckFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryPayeeResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryCounterpartyPayeeResponse } from "./types/ibc/applications/fee/v1/query";
import { MsgRegisterPayeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { Fee } from "./types/ibc/applications/fee/v1/fee";
import { MsgPayPacketFee } from "./types/ibc/applications/fee/v1/tx";
import { QueryFeeEnabledChannelRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelResponse } from "./types/ibc/applications/fee/v1/query";
import { RegisteredPayee } from "./types/ibc/applications/fee/v1/genesis";
import { QueryIncentivizedPacketsForChannelRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelsResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalAckFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { RegisteredCounterpartyPayee } from "./types/ibc/applications/fee/v1/genesis";
import { GenesisState } from "./types/ibc/applications/fee/v1/genesis";
import { QueryIncentivizedPacketRequest } from "./types/ibc/applications/fee/v1/query";
import { PacketFees } from "./types/ibc/applications/fee/v1/fee";
import { FeeEnabledChannel } from "./types/ibc/applications/fee/v1/genesis";
import { ForwardRelayerAddress } from "./types/ibc/applications/fee/v1/genesis";
import { QueryIncentivizedPacketsRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalRecvFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalRecvFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalTimeoutFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryCounterpartyPayeeRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelsRequest } from "./types/ibc/applications/fee/v1/query";
import { Metadata } from "./types/ibc/applications/fee/v1/metadata";
import { MsgRegisterCounterpartyPayeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { PacketFee } from "./types/ibc/applications/fee/v1/fee";
import { MsgPayPacketFeeAsync } from "./types/ibc/applications/fee/v1/tx";
import { MsgPayPacketFeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { MsgPayPacketFeeAsyncResponse } from "./types/ibc/applications/fee/v1/tx";
export { QueryPayeeRequest, MsgRegisterCounterpartyPayee, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelResponse, QueryTotalTimeoutFeesRequest, IncentivizedAcknowledgement, MsgRegisterPayee, IdentifiedPacketFees, QueryTotalAckFeesRequest, QueryPayeeResponse, QueryCounterpartyPayeeResponse, MsgRegisterPayeeResponse, Fee, MsgPayPacketFee, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse, RegisteredPayee, QueryIncentivizedPacketsForChannelRequest, QueryFeeEnabledChannelsResponse, QueryTotalAckFeesResponse, RegisteredCounterpartyPayee, GenesisState, QueryIncentivizedPacketRequest, PacketFees, FeeEnabledChannel, ForwardRelayerAddress, QueryIncentivizedPacketsRequest, QueryTotalRecvFeesResponse, QueryTotalRecvFeesRequest, QueryTotalTimeoutFeesResponse, QueryCounterpartyPayeeRequest, QueryFeeEnabledChannelsRequest, Metadata, MsgRegisterCounterpartyPayeeResponse, PacketFee, MsgPayPacketFeeAsync, MsgPayPacketFeeResponse, MsgPayPacketFeeAsyncResponse };
type sendQueryPayeeRequestParams = {
    value: QueryPayeeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterCounterpartyPayeeParams = {
    value: MsgRegisterCounterpartyPayee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsResponseParams = {
    value: QueryIncentivizedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketResponseParams = {
    value: QueryIncentivizedPacketResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsForChannelResponseParams = {
    value: QueryIncentivizedPacketsForChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalTimeoutFeesRequestParams = {
    value: QueryTotalTimeoutFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendIncentivizedAcknowledgementParams = {
    value: IncentivizedAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterPayeeParams = {
    value: MsgRegisterPayee;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedPacketFeesParams = {
    value: IdentifiedPacketFees;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalAckFeesRequestParams = {
    value: QueryTotalAckFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPayeeResponseParams = {
    value: QueryPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCounterpartyPayeeResponseParams = {
    value: QueryCounterpartyPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterPayeeResponseParams = {
    value: MsgRegisterPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendFeeParams = {
    value: Fee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeParams = {
    value: MsgPayPacketFee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelRequestParams = {
    value: QueryFeeEnabledChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelResponseParams = {
    value: QueryFeeEnabledChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRegisteredPayeeParams = {
    value: RegisteredPayee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsForChannelRequestParams = {
    value: QueryIncentivizedPacketsForChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelsResponseParams = {
    value: QueryFeeEnabledChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalAckFeesResponseParams = {
    value: QueryTotalAckFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRegisteredCounterpartyPayeeParams = {
    value: RegisteredCounterpartyPayee;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketRequestParams = {
    value: QueryIncentivizedPacketRequest;
    fee?: StdFee;
    memo?: string;
};
type sendPacketFeesParams = {
    value: PacketFees;
    fee?: StdFee;
    memo?: string;
};
type sendFeeEnabledChannelParams = {
    value: FeeEnabledChannel;
    fee?: StdFee;
    memo?: string;
};
type sendForwardRelayerAddressParams = {
    value: ForwardRelayerAddress;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsRequestParams = {
    value: QueryIncentivizedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalRecvFeesResponseParams = {
    value: QueryTotalRecvFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalRecvFeesRequestParams = {
    value: QueryTotalRecvFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalTimeoutFeesResponseParams = {
    value: QueryTotalTimeoutFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCounterpartyPayeeRequestParams = {
    value: QueryCounterpartyPayeeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelsRequestParams = {
    value: QueryFeeEnabledChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMetadataParams = {
    value: Metadata;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterCounterpartyPayeeResponseParams = {
    value: MsgRegisterCounterpartyPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPacketFeeParams = {
    value: PacketFee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeAsyncParams = {
    value: MsgPayPacketFeeAsync;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeResponseParams = {
    value: MsgPayPacketFeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeAsyncResponseParams = {
    value: MsgPayPacketFeeAsyncResponse;
    fee?: StdFee;
    memo?: string;
};
type queryPayeeRequestParams = {
    value: QueryPayeeRequest;
};
type msgRegisterCounterpartyPayeeParams = {
    value: MsgRegisterCounterpartyPayee;
};
type queryIncentivizedPacketsResponseParams = {
    value: QueryIncentivizedPacketsResponse;
};
type queryIncentivizedPacketResponseParams = {
    value: QueryIncentivizedPacketResponse;
};
type queryIncentivizedPacketsForChannelResponseParams = {
    value: QueryIncentivizedPacketsForChannelResponse;
};
type queryTotalTimeoutFeesRequestParams = {
    value: QueryTotalTimeoutFeesRequest;
};
type incentivizedAcknowledgementParams = {
    value: IncentivizedAcknowledgement;
};
type msgRegisterPayeeParams = {
    value: MsgRegisterPayee;
};
type identifiedPacketFeesParams = {
    value: IdentifiedPacketFees;
};
type queryTotalAckFeesRequestParams = {
    value: QueryTotalAckFeesRequest;
};
type queryPayeeResponseParams = {
    value: QueryPayeeResponse;
};
type queryCounterpartyPayeeResponseParams = {
    value: QueryCounterpartyPayeeResponse;
};
type msgRegisterPayeeResponseParams = {
    value: MsgRegisterPayeeResponse;
};
type feeParams = {
    value: Fee;
};
type msgPayPacketFeeParams = {
    value: MsgPayPacketFee;
};
type queryFeeEnabledChannelRequestParams = {
    value: QueryFeeEnabledChannelRequest;
};
type queryFeeEnabledChannelResponseParams = {
    value: QueryFeeEnabledChannelResponse;
};
type registeredPayeeParams = {
    value: RegisteredPayee;
};
type queryIncentivizedPacketsForChannelRequestParams = {
    value: QueryIncentivizedPacketsForChannelRequest;
};
type queryFeeEnabledChannelsResponseParams = {
    value: QueryFeeEnabledChannelsResponse;
};
type queryTotalAckFeesResponseParams = {
    value: QueryTotalAckFeesResponse;
};
type registeredCounterpartyPayeeParams = {
    value: RegisteredCounterpartyPayee;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryIncentivizedPacketRequestParams = {
    value: QueryIncentivizedPacketRequest;
};
type packetFeesParams = {
    value: PacketFees;
};
type feeEnabledChannelParams = {
    value: FeeEnabledChannel;
};
type forwardRelayerAddressParams = {
    value: ForwardRelayerAddress;
};
type queryIncentivizedPacketsRequestParams = {
    value: QueryIncentivizedPacketsRequest;
};
type queryTotalRecvFeesResponseParams = {
    value: QueryTotalRecvFeesResponse;
};
type queryTotalRecvFeesRequestParams = {
    value: QueryTotalRecvFeesRequest;
};
type queryTotalTimeoutFeesResponseParams = {
    value: QueryTotalTimeoutFeesResponse;
};
type queryCounterpartyPayeeRequestParams = {
    value: QueryCounterpartyPayeeRequest;
};
type queryFeeEnabledChannelsRequestParams = {
    value: QueryFeeEnabledChannelsRequest;
};
type metadataParams = {
    value: Metadata;
};
type msgRegisterCounterpartyPayeeResponseParams = {
    value: MsgRegisterCounterpartyPayeeResponse;
};
type packetFeeParams = {
    value: PacketFee;
};
type msgPayPacketFeeAsyncParams = {
    value: MsgPayPacketFeeAsync;
};
type msgPayPacketFeeResponseParams = {
    value: MsgPayPacketFeeResponse;
};
type msgPayPacketFeeAsyncResponseParams = {
    value: MsgPayPacketFeeAsyncResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryPayeeRequest({ value, fee, memo }: sendQueryPayeeRequestParams): Promise<DeliverTxResponse>;
    sendMsgRegisterCounterpartyPayee({ value, fee, memo }: sendMsgRegisterCounterpartyPayeeParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsResponse({ value, fee, memo }: sendQueryIncentivizedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketResponse({ value, fee, memo }: sendQueryIncentivizedPacketResponseParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsForChannelResponse({ value, fee, memo }: sendQueryIncentivizedPacketsForChannelResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalTimeoutFeesRequest({ value, fee, memo }: sendQueryTotalTimeoutFeesRequestParams): Promise<DeliverTxResponse>;
    sendIncentivizedAcknowledgement({ value, fee, memo }: sendIncentivizedAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgRegisterPayee({ value, fee, memo }: sendMsgRegisterPayeeParams): Promise<DeliverTxResponse>;
    sendIdentifiedPacketFees({ value, fee, memo }: sendIdentifiedPacketFeesParams): Promise<DeliverTxResponse>;
    sendQueryTotalAckFeesRequest({ value, fee, memo }: sendQueryTotalAckFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryPayeeResponse({ value, fee, memo }: sendQueryPayeeResponseParams): Promise<DeliverTxResponse>;
    sendQueryCounterpartyPayeeResponse({ value, fee, memo }: sendQueryCounterpartyPayeeResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterPayeeResponse({ value, fee, memo }: sendMsgRegisterPayeeResponseParams): Promise<DeliverTxResponse>;
    sendFee({ value, fee, memo }: sendFeeParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFee({ value, fee, memo }: sendMsgPayPacketFeeParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelRequest({ value, fee, memo }: sendQueryFeeEnabledChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelResponse({ value, fee, memo }: sendQueryFeeEnabledChannelResponseParams): Promise<DeliverTxResponse>;
    sendRegisteredPayee({ value, fee, memo }: sendRegisteredPayeeParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsForChannelRequest({ value, fee, memo }: sendQueryIncentivizedPacketsForChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelsResponse({ value, fee, memo }: sendQueryFeeEnabledChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalAckFeesResponse({ value, fee, memo }: sendQueryTotalAckFeesResponseParams): Promise<DeliverTxResponse>;
    sendRegisteredCounterpartyPayee({ value, fee, memo }: sendRegisteredCounterpartyPayeeParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketRequest({ value, fee, memo }: sendQueryIncentivizedPacketRequestParams): Promise<DeliverTxResponse>;
    sendPacketFees({ value, fee, memo }: sendPacketFeesParams): Promise<DeliverTxResponse>;
    sendFeeEnabledChannel({ value, fee, memo }: sendFeeEnabledChannelParams): Promise<DeliverTxResponse>;
    sendForwardRelayerAddress({ value, fee, memo }: sendForwardRelayerAddressParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsRequest({ value, fee, memo }: sendQueryIncentivizedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalRecvFeesResponse({ value, fee, memo }: sendQueryTotalRecvFeesResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalRecvFeesRequest({ value, fee, memo }: sendQueryTotalRecvFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalTimeoutFeesResponse({ value, fee, memo }: sendQueryTotalTimeoutFeesResponseParams): Promise<DeliverTxResponse>;
    sendQueryCounterpartyPayeeRequest({ value, fee, memo }: sendQueryCounterpartyPayeeRequestParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelsRequest({ value, fee, memo }: sendQueryFeeEnabledChannelsRequestParams): Promise<DeliverTxResponse>;
    sendMetadata({ value, fee, memo }: sendMetadataParams): Promise<DeliverTxResponse>;
    sendMsgRegisterCounterpartyPayeeResponse({ value, fee, memo }: sendMsgRegisterCounterpartyPayeeResponseParams): Promise<DeliverTxResponse>;
    sendPacketFee({ value, fee, memo }: sendPacketFeeParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeAsync({ value, fee, memo }: sendMsgPayPacketFeeAsyncParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeResponse({ value, fee, memo }: sendMsgPayPacketFeeResponseParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeAsyncResponse({ value, fee, memo }: sendMsgPayPacketFeeAsyncResponseParams): Promise<DeliverTxResponse>;
    queryPayeeRequest({ value }: queryPayeeRequestParams): EncodeObject;
    msgRegisterCounterpartyPayee({ value }: msgRegisterCounterpartyPayeeParams): EncodeObject;
    queryIncentivizedPacketsResponse({ value }: queryIncentivizedPacketsResponseParams): EncodeObject;
    queryIncentivizedPacketResponse({ value }: queryIncentivizedPacketResponseParams): EncodeObject;
    queryIncentivizedPacketsForChannelResponse({ value }: queryIncentivizedPacketsForChannelResponseParams): EncodeObject;
    queryTotalTimeoutFeesRequest({ value }: queryTotalTimeoutFeesRequestParams): EncodeObject;
    incentivizedAcknowledgement({ value }: incentivizedAcknowledgementParams): EncodeObject;
    msgRegisterPayee({ value }: msgRegisterPayeeParams): EncodeObject;
    identifiedPacketFees({ value }: identifiedPacketFeesParams): EncodeObject;
    queryTotalAckFeesRequest({ value }: queryTotalAckFeesRequestParams): EncodeObject;
    queryPayeeResponse({ value }: queryPayeeResponseParams): EncodeObject;
    queryCounterpartyPayeeResponse({ value }: queryCounterpartyPayeeResponseParams): EncodeObject;
    msgRegisterPayeeResponse({ value }: msgRegisterPayeeResponseParams): EncodeObject;
    fee({ value }: feeParams): EncodeObject;
    msgPayPacketFee({ value }: msgPayPacketFeeParams): EncodeObject;
    queryFeeEnabledChannelRequest({ value }: queryFeeEnabledChannelRequestParams): EncodeObject;
    queryFeeEnabledChannelResponse({ value }: queryFeeEnabledChannelResponseParams): EncodeObject;
    registeredPayee({ value }: registeredPayeeParams): EncodeObject;
    queryIncentivizedPacketsForChannelRequest({ value }: queryIncentivizedPacketsForChannelRequestParams): EncodeObject;
    queryFeeEnabledChannelsResponse({ value }: queryFeeEnabledChannelsResponseParams): EncodeObject;
    queryTotalAckFeesResponse({ value }: queryTotalAckFeesResponseParams): EncodeObject;
    registeredCounterpartyPayee({ value }: registeredCounterpartyPayeeParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryIncentivizedPacketRequest({ value }: queryIncentivizedPacketRequestParams): EncodeObject;
    packetFees({ value }: packetFeesParams): EncodeObject;
    feeEnabledChannel({ value }: feeEnabledChannelParams): EncodeObject;
    forwardRelayerAddress({ value }: forwardRelayerAddressParams): EncodeObject;
    queryIncentivizedPacketsRequest({ value }: queryIncentivizedPacketsRequestParams): EncodeObject;
    queryTotalRecvFeesResponse({ value }: queryTotalRecvFeesResponseParams): EncodeObject;
    queryTotalRecvFeesRequest({ value }: queryTotalRecvFeesRequestParams): EncodeObject;
    queryTotalTimeoutFeesResponse({ value }: queryTotalTimeoutFeesResponseParams): EncodeObject;
    queryCounterpartyPayeeRequest({ value }: queryCounterpartyPayeeRequestParams): EncodeObject;
    queryFeeEnabledChannelsRequest({ value }: queryFeeEnabledChannelsRequestParams): EncodeObject;
    metadata({ value }: metadataParams): EncodeObject;
    msgRegisterCounterpartyPayeeResponse({ value }: msgRegisterCounterpartyPayeeResponseParams): EncodeObject;
    packetFee({ value }: packetFeeParams): EncodeObject;
    msgPayPacketFeeAsync({ value }: msgPayPacketFeeAsyncParams): EncodeObject;
    msgPayPacketFeeResponse({ value }: msgPayPacketFeeResponseParams): EncodeObject;
    msgPayPacketFeeAsyncResponse({ value }: msgPayPacketFeeAsyncResponseParams): EncodeObject;
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
        IbcApplicationsFeeV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
