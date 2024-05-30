import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { UpgradeFields } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelUpgradeInit } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelClientStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendRequest } from "./types/ibc/core/channel/v1/query";
import { MsgTimeoutOnCloseResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeInitResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryUpgradeErrorRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeCancel } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenTryResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { GenesisState } from "./types/ibc/core/channel/v1/genesis";
import { QueryNextSequenceReceiveResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeRequest } from "./types/ibc/core/channel/v1/query";
import { Upgrade } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelOpenTry } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeout } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketAcknowledgementRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksRequest } from "./types/ibc/core/channel/v1/query";
import { PacketState } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelUpgradeTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsRequest } from "./types/ibc/core/channel/v1/query";
import { Acknowledgement } from "./types/ibc/core/channel/v1/channel";
import { PacketSequence } from "./types/ibc/core/channel/v1/genesis";
import { Packet } from "./types/ibc/core/channel/v1/channel";
import { QueryChannelResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgementsResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketCommitmentResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeErrorResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelCloseConfirm } from "./types/ibc/core/channel/v1/tx";
import { Timeout } from "./types/ibc/core/channel/v1/channel";
import { MsgAcknowledgementResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeAckResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryConnectionChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelCloseConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTryResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelConsensusStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelCloseInit } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnClose } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceReceiveRequest } from "./types/ibc/core/channel/v1/query";
import { Counterparty } from "./types/ibc/core/channel/v1/channel";
import { QueryChannelClientStateResponse } from "./types/ibc/core/channel/v1/query";
import { MsgPruneAcknowledgements } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenAckResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketReceiptResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelParamsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgRecvPacket } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacketResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeCancelResponse } from "./types/ibc/core/channel/v1/tx";
import { Params } from "./types/ibc/core/channel/v1/channel";
import { PacketId } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelUpgradeAck } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInitResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketAcknowledgementsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementsResponse } from "./types/ibc/core/channel/v1/query";
import { ErrorReceipt } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelUpgradeOpen } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParams } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketReceiptRequest } from "./types/ibc/core/channel/v1/query";
import { Channel } from "./types/ibc/core/channel/v1/channel";
import { IdentifiedChannel } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelOpenInit } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTry } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenAck } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTimeout } from "./types/ibc/core/channel/v1/tx";
import { QueryConnectionChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeOpenResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelParamsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelConsensusStateResponse } from "./types/ibc/core/channel/v1/query";
import { MsgAcknowledgement } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeConfirm } from "./types/ibc/core/channel/v1/tx";
export { UpgradeFields, MsgChannelUpgradeInit, QueryChannelClientStateRequest, QueryNextSequenceSendRequest, MsgTimeoutOnCloseResponse, MsgChannelUpgradeInitResponse, QueryUpgradeErrorRequest, MsgChannelUpgradeCancel, MsgChannelOpenTryResponse, MsgChannelOpenConfirmResponse, GenesisState, QueryNextSequenceReceiveResponse, QueryUpgradeRequest, Upgrade, MsgChannelOpenTry, MsgTimeout, QueryPacketAcknowledgementRequest, QueryPacketCommitmentsResponse, QueryPacketAcknowledgementResponse, QueryUnreceivedAcksRequest, PacketState, MsgChannelUpgradeTimeoutResponse, QueryChannelsResponse, QueryUnreceivedPacketsRequest, Acknowledgement, PacketSequence, Packet, QueryChannelResponse, QueryUpgradeResponse, MsgChannelUpgradeConfirmResponse, MsgPruneAcknowledgementsResponse, QueryPacketCommitmentResponse, QueryUnreceivedAcksResponse, QueryUpgradeErrorResponse, MsgChannelCloseConfirm, Timeout, MsgAcknowledgementResponse, MsgChannelUpgradeAckResponse, QueryConnectionChannelsResponse, MsgChannelCloseConfirmResponse, MsgTimeoutResponse, MsgChannelUpgradeTryResponse, QueryChannelConsensusStateRequest, QueryNextSequenceSendResponse, MsgChannelCloseInit, MsgTimeoutOnClose, QueryChannelsRequest, QueryPacketCommitmentRequest, QueryUnreceivedPacketsResponse, QueryNextSequenceReceiveRequest, Counterparty, QueryChannelClientStateResponse, MsgPruneAcknowledgements, MsgChannelOpenAckResponse, MsgUpdateParamsResponse, QueryChannelRequest, QueryPacketCommitmentsRequest, QueryPacketReceiptResponse, QueryChannelParamsResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgChannelUpgradeCancelResponse, Params, PacketId, MsgChannelUpgradeAck, MsgChannelCloseInitResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, ErrorReceipt, MsgChannelUpgradeOpen, MsgUpdateParams, QueryPacketReceiptRequest, Channel, IdentifiedChannel, MsgChannelOpenInit, MsgChannelOpenConfirm, MsgChannelUpgradeTry, MsgChannelOpenAck, MsgChannelUpgradeTimeout, QueryConnectionChannelsRequest, MsgChannelOpenInitResponse, MsgChannelUpgradeOpenResponse, QueryChannelParamsRequest, QueryChannelConsensusStateResponse, MsgAcknowledgement, MsgChannelUpgradeConfirm };
type sendUpgradeFieldsParams = {
    value: UpgradeFields;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeParams = {
    value: Upgrade;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutParams = {
    value: MsgTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
    fee?: StdFee;
    memo?: string;
};
type sendPacketStateParams = {
    value: PacketState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsResponseParams = {
    value: QueryChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendAcknowledgementParams = {
    value: Acknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendPacketSequenceParams = {
    value: PacketSequence;
    fee?: StdFee;
    memo?: string;
};
type sendPacketParams = {
    value: Packet;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelResponseParams = {
    value: QueryChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendTimeoutParams = {
    value: Timeout;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsRequestParams = {
    value: QueryChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelRequestParams = {
    value: QueryChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketParams = {
    value: MsgRecvPacket;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendPacketIdParams = {
    value: PacketId;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendErrorReceiptParams = {
    value: ErrorReceipt;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
    fee?: StdFee;
    memo?: string;
};
type sendChannelParams = {
    value: Channel;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedChannelParams = {
    value: IdentifiedChannel;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementParams = {
    value: MsgAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
    fee?: StdFee;
    memo?: string;
};
type upgradeFieldsParams = {
    value: UpgradeFields;
};
type msgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
};
type queryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
};
type queryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
};
type msgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
};
type msgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
};
type queryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
};
type msgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
};
type msgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
};
type msgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
};
type queryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
};
type upgradeParams = {
    value: Upgrade;
};
type msgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
};
type msgTimeoutParams = {
    value: MsgTimeout;
};
type queryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
};
type queryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
};
type queryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
};
type queryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
};
type packetStateParams = {
    value: PacketState;
};
type msgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
};
type queryChannelsResponseParams = {
    value: QueryChannelsResponse;
};
type queryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
};
type acknowledgementParams = {
    value: Acknowledgement;
};
type packetSequenceParams = {
    value: PacketSequence;
};
type packetParams = {
    value: Packet;
};
type queryChannelResponseParams = {
    value: QueryChannelResponse;
};
type queryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
};
type msgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
};
type msgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
};
type queryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
};
type queryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
};
type queryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
};
type msgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
};
type timeoutParams = {
    value: Timeout;
};
type msgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
};
type msgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
};
type queryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
};
type msgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
};
type msgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
};
type msgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
};
type queryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
};
type queryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
};
type msgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
};
type msgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
};
type queryChannelsRequestParams = {
    value: QueryChannelsRequest;
};
type queryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
};
type queryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
};
type queryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
};
type counterpartyParams = {
    value: Counterparty;
};
type queryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
};
type msgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
};
type msgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryChannelRequestParams = {
    value: QueryChannelRequest;
};
type queryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
};
type queryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
};
type queryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
};
type msgRecvPacketParams = {
    value: MsgRecvPacket;
};
type msgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
};
type msgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
};
type paramsParams = {
    value: Params;
};
type packetIdParams = {
    value: PacketId;
};
type msgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
};
type msgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
};
type queryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
};
type queryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
};
type errorReceiptParams = {
    value: ErrorReceipt;
};
type msgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
};
type channelParams = {
    value: Channel;
};
type identifiedChannelParams = {
    value: IdentifiedChannel;
};
type msgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
};
type msgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
};
type msgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
};
type msgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
};
type msgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
};
type queryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
};
type msgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
};
type msgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
};
type queryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
};
type queryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
};
type msgAcknowledgementParams = {
    value: MsgAcknowledgement;
};
type msgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendUpgradeFields({ value, fee, memo }: sendUpgradeFieldsParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInit({ value, fee, memo }: sendMsgChannelUpgradeInitParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateRequest({ value, fee, memo }: sendQueryChannelClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendRequest({ value, fee, memo }: sendQueryNextSequenceSendRequestParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnCloseResponse({ value, fee, memo }: sendMsgTimeoutOnCloseResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInitResponse({ value, fee, memo }: sendMsgChannelUpgradeInitResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorRequest({ value, fee, memo }: sendQueryUpgradeErrorRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancel({ value, fee, memo }: sendMsgChannelUpgradeCancelParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTryResponse({ value, fee, memo }: sendMsgChannelOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirmResponse({ value, fee, memo }: sendMsgChannelOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveResponse({ value, fee, memo }: sendQueryNextSequenceReceiveResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeRequest({ value, fee, memo }: sendQueryUpgradeRequestParams): Promise<DeliverTxResponse>;
    sendUpgrade({ value, fee, memo }: sendUpgradeParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTry({ value, fee, memo }: sendMsgChannelOpenTryParams): Promise<DeliverTxResponse>;
    sendMsgTimeout({ value, fee, memo }: sendMsgTimeoutParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementRequest({ value, fee, memo }: sendQueryPacketAcknowledgementRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsResponse({ value, fee, memo }: sendQueryPacketCommitmentsResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementResponse({ value, fee, memo }: sendQueryPacketAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksRequest({ value, fee, memo }: sendQueryUnreceivedAcksRequestParams): Promise<DeliverTxResponse>;
    sendPacketState({ value, fee, memo }: sendPacketStateParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeoutResponse({ value, fee, memo }: sendMsgChannelUpgradeTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelsResponse({ value, fee, memo }: sendQueryChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsRequest({ value, fee, memo }: sendQueryUnreceivedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendAcknowledgement({ value, fee, memo }: sendAcknowledgementParams): Promise<DeliverTxResponse>;
    sendPacketSequence({ value, fee, memo }: sendPacketSequenceParams): Promise<DeliverTxResponse>;
    sendPacket({ value, fee, memo }: sendPacketParams): Promise<DeliverTxResponse>;
    sendQueryChannelResponse({ value, fee, memo }: sendQueryChannelResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeResponse({ value, fee, memo }: sendQueryUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirmResponse({ value, fee, memo }: sendMsgChannelUpgradeConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgementsResponse({ value, fee, memo }: sendMsgPruneAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentResponse({ value, fee, memo }: sendQueryPacketCommitmentResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksResponse({ value, fee, memo }: sendQueryUnreceivedAcksResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorResponse({ value, fee, memo }: sendQueryUpgradeErrorResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirm({ value, fee, memo }: sendMsgChannelCloseConfirmParams): Promise<DeliverTxResponse>;
    sendTimeout({ value, fee, memo }: sendTimeoutParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgementResponse({ value, fee, memo }: sendMsgAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAckResponse({ value, fee, memo }: sendMsgChannelUpgradeAckResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsResponse({ value, fee, memo }: sendQueryConnectionChannelsResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirmResponse({ value, fee, memo }: sendMsgChannelCloseConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutResponse({ value, fee, memo }: sendMsgTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTryResponse({ value, fee, memo }: sendMsgChannelUpgradeTryResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateRequest({ value, fee, memo }: sendQueryChannelConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendResponse({ value, fee, memo }: sendQueryNextSequenceSendResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInit({ value, fee, memo }: sendMsgChannelCloseInitParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnClose({ value, fee, memo }: sendMsgTimeoutOnCloseParams): Promise<DeliverTxResponse>;
    sendQueryChannelsRequest({ value, fee, memo }: sendQueryChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentRequest({ value, fee, memo }: sendQueryPacketCommitmentRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsResponse({ value, fee, memo }: sendQueryUnreceivedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveRequest({ value, fee, memo }: sendQueryNextSequenceReceiveRequestParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateResponse({ value, fee, memo }: sendQueryChannelClientStateResponseParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgements({ value, fee, memo }: sendMsgPruneAcknowledgementsParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAckResponse({ value, fee, memo }: sendMsgChannelOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelRequest({ value, fee, memo }: sendQueryChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsRequest({ value, fee, memo }: sendQueryPacketCommitmentsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptResponse({ value, fee, memo }: sendQueryPacketReceiptResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsResponse({ value, fee, memo }: sendQueryChannelParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacket({ value, fee, memo }: sendMsgRecvPacketParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacketResponse({ value, fee, memo }: sendMsgRecvPacketResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancelResponse({ value, fee, memo }: sendMsgChannelUpgradeCancelResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendPacketId({ value, fee, memo }: sendPacketIdParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAck({ value, fee, memo }: sendMsgChannelUpgradeAckParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInitResponse({ value, fee, memo }: sendMsgChannelCloseInitResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsRequest({ value, fee, memo }: sendQueryPacketAcknowledgementsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsResponse({ value, fee, memo }: sendQueryPacketAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendErrorReceipt({ value, fee, memo }: sendErrorReceiptParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpen({ value, fee, memo }: sendMsgChannelUpgradeOpenParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptRequest({ value, fee, memo }: sendQueryPacketReceiptRequestParams): Promise<DeliverTxResponse>;
    sendChannel({ value, fee, memo }: sendChannelParams): Promise<DeliverTxResponse>;
    sendIdentifiedChannel({ value, fee, memo }: sendIdentifiedChannelParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInit({ value, fee, memo }: sendMsgChannelOpenInitParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirm({ value, fee, memo }: sendMsgChannelOpenConfirmParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTry({ value, fee, memo }: sendMsgChannelUpgradeTryParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAck({ value, fee, memo }: sendMsgChannelOpenAckParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeout({ value, fee, memo }: sendMsgChannelUpgradeTimeoutParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsRequest({ value, fee, memo }: sendQueryConnectionChannelsRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInitResponse({ value, fee, memo }: sendMsgChannelOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpenResponse({ value, fee, memo }: sendMsgChannelUpgradeOpenResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsRequest({ value, fee, memo }: sendQueryChannelParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateResponse({ value, fee, memo }: sendQueryChannelConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgement({ value, fee, memo }: sendMsgAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirm({ value, fee, memo }: sendMsgChannelUpgradeConfirmParams): Promise<DeliverTxResponse>;
    upgradeFields({ value }: upgradeFieldsParams): EncodeObject;
    msgChannelUpgradeInit({ value }: msgChannelUpgradeInitParams): EncodeObject;
    queryChannelClientStateRequest({ value }: queryChannelClientStateRequestParams): EncodeObject;
    queryNextSequenceSendRequest({ value }: queryNextSequenceSendRequestParams): EncodeObject;
    msgTimeoutOnCloseResponse({ value }: msgTimeoutOnCloseResponseParams): EncodeObject;
    msgChannelUpgradeInitResponse({ value }: msgChannelUpgradeInitResponseParams): EncodeObject;
    queryUpgradeErrorRequest({ value }: queryUpgradeErrorRequestParams): EncodeObject;
    msgChannelUpgradeCancel({ value }: msgChannelUpgradeCancelParams): EncodeObject;
    msgChannelOpenTryResponse({ value }: msgChannelOpenTryResponseParams): EncodeObject;
    msgChannelOpenConfirmResponse({ value }: msgChannelOpenConfirmResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryNextSequenceReceiveResponse({ value }: queryNextSequenceReceiveResponseParams): EncodeObject;
    queryUpgradeRequest({ value }: queryUpgradeRequestParams): EncodeObject;
    upgrade({ value }: upgradeParams): EncodeObject;
    msgChannelOpenTry({ value }: msgChannelOpenTryParams): EncodeObject;
    msgTimeout({ value }: msgTimeoutParams): EncodeObject;
    queryPacketAcknowledgementRequest({ value }: queryPacketAcknowledgementRequestParams): EncodeObject;
    queryPacketCommitmentsResponse({ value }: queryPacketCommitmentsResponseParams): EncodeObject;
    queryPacketAcknowledgementResponse({ value }: queryPacketAcknowledgementResponseParams): EncodeObject;
    queryUnreceivedAcksRequest({ value }: queryUnreceivedAcksRequestParams): EncodeObject;
    packetState({ value }: packetStateParams): EncodeObject;
    msgChannelUpgradeTimeoutResponse({ value }: msgChannelUpgradeTimeoutResponseParams): EncodeObject;
    queryChannelsResponse({ value }: queryChannelsResponseParams): EncodeObject;
    queryUnreceivedPacketsRequest({ value }: queryUnreceivedPacketsRequestParams): EncodeObject;
    acknowledgement({ value }: acknowledgementParams): EncodeObject;
    packetSequence({ value }: packetSequenceParams): EncodeObject;
    packet({ value }: packetParams): EncodeObject;
    queryChannelResponse({ value }: queryChannelResponseParams): EncodeObject;
    queryUpgradeResponse({ value }: queryUpgradeResponseParams): EncodeObject;
    msgChannelUpgradeConfirmResponse({ value }: msgChannelUpgradeConfirmResponseParams): EncodeObject;
    msgPruneAcknowledgementsResponse({ value }: msgPruneAcknowledgementsResponseParams): EncodeObject;
    queryPacketCommitmentResponse({ value }: queryPacketCommitmentResponseParams): EncodeObject;
    queryUnreceivedAcksResponse({ value }: queryUnreceivedAcksResponseParams): EncodeObject;
    queryUpgradeErrorResponse({ value }: queryUpgradeErrorResponseParams): EncodeObject;
    msgChannelCloseConfirm({ value }: msgChannelCloseConfirmParams): EncodeObject;
    timeout({ value }: timeoutParams): EncodeObject;
    msgAcknowledgementResponse({ value }: msgAcknowledgementResponseParams): EncodeObject;
    msgChannelUpgradeAckResponse({ value }: msgChannelUpgradeAckResponseParams): EncodeObject;
    queryConnectionChannelsResponse({ value }: queryConnectionChannelsResponseParams): EncodeObject;
    msgChannelCloseConfirmResponse({ value }: msgChannelCloseConfirmResponseParams): EncodeObject;
    msgTimeoutResponse({ value }: msgTimeoutResponseParams): EncodeObject;
    msgChannelUpgradeTryResponse({ value }: msgChannelUpgradeTryResponseParams): EncodeObject;
    queryChannelConsensusStateRequest({ value }: queryChannelConsensusStateRequestParams): EncodeObject;
    queryNextSequenceSendResponse({ value }: queryNextSequenceSendResponseParams): EncodeObject;
    msgChannelCloseInit({ value }: msgChannelCloseInitParams): EncodeObject;
    msgTimeoutOnClose({ value }: msgTimeoutOnCloseParams): EncodeObject;
    queryChannelsRequest({ value }: queryChannelsRequestParams): EncodeObject;
    queryPacketCommitmentRequest({ value }: queryPacketCommitmentRequestParams): EncodeObject;
    queryUnreceivedPacketsResponse({ value }: queryUnreceivedPacketsResponseParams): EncodeObject;
    queryNextSequenceReceiveRequest({ value }: queryNextSequenceReceiveRequestParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    queryChannelClientStateResponse({ value }: queryChannelClientStateResponseParams): EncodeObject;
    msgPruneAcknowledgements({ value }: msgPruneAcknowledgementsParams): EncodeObject;
    msgChannelOpenAckResponse({ value }: msgChannelOpenAckResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryChannelRequest({ value }: queryChannelRequestParams): EncodeObject;
    queryPacketCommitmentsRequest({ value }: queryPacketCommitmentsRequestParams): EncodeObject;
    queryPacketReceiptResponse({ value }: queryPacketReceiptResponseParams): EncodeObject;
    queryChannelParamsResponse({ value }: queryChannelParamsResponseParams): EncodeObject;
    msgRecvPacket({ value }: msgRecvPacketParams): EncodeObject;
    msgRecvPacketResponse({ value }: msgRecvPacketResponseParams): EncodeObject;
    msgChannelUpgradeCancelResponse({ value }: msgChannelUpgradeCancelResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    packetId({ value }: packetIdParams): EncodeObject;
    msgChannelUpgradeAck({ value }: msgChannelUpgradeAckParams): EncodeObject;
    msgChannelCloseInitResponse({ value }: msgChannelCloseInitResponseParams): EncodeObject;
    queryPacketAcknowledgementsRequest({ value }: queryPacketAcknowledgementsRequestParams): EncodeObject;
    queryPacketAcknowledgementsResponse({ value }: queryPacketAcknowledgementsResponseParams): EncodeObject;
    errorReceipt({ value }: errorReceiptParams): EncodeObject;
    msgChannelUpgradeOpen({ value }: msgChannelUpgradeOpenParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryPacketReceiptRequest({ value }: queryPacketReceiptRequestParams): EncodeObject;
    channel({ value }: channelParams): EncodeObject;
    identifiedChannel({ value }: identifiedChannelParams): EncodeObject;
    msgChannelOpenInit({ value }: msgChannelOpenInitParams): EncodeObject;
    msgChannelOpenConfirm({ value }: msgChannelOpenConfirmParams): EncodeObject;
    msgChannelUpgradeTry({ value }: msgChannelUpgradeTryParams): EncodeObject;
    msgChannelOpenAck({ value }: msgChannelOpenAckParams): EncodeObject;
    msgChannelUpgradeTimeout({ value }: msgChannelUpgradeTimeoutParams): EncodeObject;
    queryConnectionChannelsRequest({ value }: queryConnectionChannelsRequestParams): EncodeObject;
    msgChannelOpenInitResponse({ value }: msgChannelOpenInitResponseParams): EncodeObject;
    msgChannelUpgradeOpenResponse({ value }: msgChannelUpgradeOpenResponseParams): EncodeObject;
    queryChannelParamsRequest({ value }: queryChannelParamsRequestParams): EncodeObject;
    queryChannelConsensusStateResponse({ value }: queryChannelConsensusStateResponseParams): EncodeObject;
    msgAcknowledgement({ value }: msgAcknowledgementParams): EncodeObject;
    msgChannelUpgradeConfirm({ value }: msgChannelUpgradeConfirmParams): EncodeObject;
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
        IbcCoreChannelV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
