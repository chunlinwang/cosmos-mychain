import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { ModuleVersion } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { QueryAppliedPlanResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryModuleVersionsResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { CancelSoftwareUpgradeProposal } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { MsgSoftwareUpgradeResponse } from "./types/cosmos/upgrade/v1beta1/tx";
import { MsgSoftwareUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
import { QueryAppliedPlanRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryAuthorityRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryAuthorityResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { Plan } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { SoftwareUpgradeProposal } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { QueryUpgradedConsensusStateResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { MsgCancelUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
import { MsgCancelUpgradeResponse } from "./types/cosmos/upgrade/v1beta1/tx";
import { QueryUpgradedConsensusStateRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryModuleVersionsRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryCurrentPlanRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryCurrentPlanResponse } from "./types/cosmos/upgrade/v1beta1/query";
export { ModuleVersion, QueryAppliedPlanResponse, QueryModuleVersionsResponse, CancelSoftwareUpgradeProposal, MsgSoftwareUpgradeResponse, MsgSoftwareUpgrade, QueryAppliedPlanRequest, QueryAuthorityRequest, QueryAuthorityResponse, Plan, SoftwareUpgradeProposal, QueryUpgradedConsensusStateResponse, MsgCancelUpgrade, MsgCancelUpgradeResponse, QueryUpgradedConsensusStateRequest, QueryModuleVersionsRequest, QueryCurrentPlanRequest, QueryCurrentPlanResponse };
type sendModuleVersionParams = {
    value: ModuleVersion;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAppliedPlanResponseParams = {
    value: QueryAppliedPlanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleVersionsResponseParams = {
    value: QueryModuleVersionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCancelSoftwareUpgradeProposalParams = {
    value: CancelSoftwareUpgradeProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSoftwareUpgradeResponseParams = {
    value: MsgSoftwareUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSoftwareUpgradeParams = {
    value: MsgSoftwareUpgrade;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAppliedPlanRequestParams = {
    value: QueryAppliedPlanRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAuthorityRequestParams = {
    value: QueryAuthorityRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAuthorityResponseParams = {
    value: QueryAuthorityResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPlanParams = {
    value: Plan;
    fee?: StdFee;
    memo?: string;
};
type sendSoftwareUpgradeProposalParams = {
    value: SoftwareUpgradeProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUpgradeParams = {
    value: MsgCancelUpgrade;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUpgradeResponseParams = {
    value: MsgCancelUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleVersionsRequestParams = {
    value: QueryModuleVersionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCurrentPlanRequestParams = {
    value: QueryCurrentPlanRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCurrentPlanResponseParams = {
    value: QueryCurrentPlanResponse;
    fee?: StdFee;
    memo?: string;
};
type moduleVersionParams = {
    value: ModuleVersion;
};
type queryAppliedPlanResponseParams = {
    value: QueryAppliedPlanResponse;
};
type queryModuleVersionsResponseParams = {
    value: QueryModuleVersionsResponse;
};
type cancelSoftwareUpgradeProposalParams = {
    value: CancelSoftwareUpgradeProposal;
};
type msgSoftwareUpgradeResponseParams = {
    value: MsgSoftwareUpgradeResponse;
};
type msgSoftwareUpgradeParams = {
    value: MsgSoftwareUpgrade;
};
type queryAppliedPlanRequestParams = {
    value: QueryAppliedPlanRequest;
};
type queryAuthorityRequestParams = {
    value: QueryAuthorityRequest;
};
type queryAuthorityResponseParams = {
    value: QueryAuthorityResponse;
};
type planParams = {
    value: Plan;
};
type softwareUpgradeProposalParams = {
    value: SoftwareUpgradeProposal;
};
type queryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
};
type msgCancelUpgradeParams = {
    value: MsgCancelUpgrade;
};
type msgCancelUpgradeResponseParams = {
    value: MsgCancelUpgradeResponse;
};
type queryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
};
type queryModuleVersionsRequestParams = {
    value: QueryModuleVersionsRequest;
};
type queryCurrentPlanRequestParams = {
    value: QueryCurrentPlanRequest;
};
type queryCurrentPlanResponseParams = {
    value: QueryCurrentPlanResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendModuleVersion({ value, fee, memo }: sendModuleVersionParams): Promise<DeliverTxResponse>;
    sendQueryAppliedPlanResponse({ value, fee, memo }: sendQueryAppliedPlanResponseParams): Promise<DeliverTxResponse>;
    sendQueryModuleVersionsResponse({ value, fee, memo }: sendQueryModuleVersionsResponseParams): Promise<DeliverTxResponse>;
    sendCancelSoftwareUpgradeProposal({ value, fee, memo }: sendCancelSoftwareUpgradeProposalParams): Promise<DeliverTxResponse>;
    sendMsgSoftwareUpgradeResponse({ value, fee, memo }: sendMsgSoftwareUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendMsgSoftwareUpgrade({ value, fee, memo }: sendMsgSoftwareUpgradeParams): Promise<DeliverTxResponse>;
    sendQueryAppliedPlanRequest({ value, fee, memo }: sendQueryAppliedPlanRequestParams): Promise<DeliverTxResponse>;
    sendQueryAuthorityRequest({ value, fee, memo }: sendQueryAuthorityRequestParams): Promise<DeliverTxResponse>;
    sendQueryAuthorityResponse({ value, fee, memo }: sendQueryAuthorityResponseParams): Promise<DeliverTxResponse>;
    sendPlan({ value, fee, memo }: sendPlanParams): Promise<DeliverTxResponse>;
    sendSoftwareUpgradeProposal({ value, fee, memo }: sendSoftwareUpgradeProposalParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateResponse({ value, fee, memo }: sendQueryUpgradedConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendMsgCancelUpgrade({ value, fee, memo }: sendMsgCancelUpgradeParams): Promise<DeliverTxResponse>;
    sendMsgCancelUpgradeResponse({ value, fee, memo }: sendMsgCancelUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateRequest({ value, fee, memo }: sendQueryUpgradedConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryModuleVersionsRequest({ value, fee, memo }: sendQueryModuleVersionsRequestParams): Promise<DeliverTxResponse>;
    sendQueryCurrentPlanRequest({ value, fee, memo }: sendQueryCurrentPlanRequestParams): Promise<DeliverTxResponse>;
    sendQueryCurrentPlanResponse({ value, fee, memo }: sendQueryCurrentPlanResponseParams): Promise<DeliverTxResponse>;
    moduleVersion({ value }: moduleVersionParams): EncodeObject;
    queryAppliedPlanResponse({ value }: queryAppliedPlanResponseParams): EncodeObject;
    queryModuleVersionsResponse({ value }: queryModuleVersionsResponseParams): EncodeObject;
    cancelSoftwareUpgradeProposal({ value }: cancelSoftwareUpgradeProposalParams): EncodeObject;
    msgSoftwareUpgradeResponse({ value }: msgSoftwareUpgradeResponseParams): EncodeObject;
    msgSoftwareUpgrade({ value }: msgSoftwareUpgradeParams): EncodeObject;
    queryAppliedPlanRequest({ value }: queryAppliedPlanRequestParams): EncodeObject;
    queryAuthorityRequest({ value }: queryAuthorityRequestParams): EncodeObject;
    queryAuthorityResponse({ value }: queryAuthorityResponseParams): EncodeObject;
    plan({ value }: planParams): EncodeObject;
    softwareUpgradeProposal({ value }: softwareUpgradeProposalParams): EncodeObject;
    queryUpgradedConsensusStateResponse({ value }: queryUpgradedConsensusStateResponseParams): EncodeObject;
    msgCancelUpgrade({ value }: msgCancelUpgradeParams): EncodeObject;
    msgCancelUpgradeResponse({ value }: msgCancelUpgradeResponseParams): EncodeObject;
    queryUpgradedConsensusStateRequest({ value }: queryUpgradedConsensusStateRequestParams): EncodeObject;
    queryModuleVersionsRequest({ value }: queryModuleVersionsRequestParams): EncodeObject;
    queryCurrentPlanRequest({ value }: queryCurrentPlanRequestParams): EncodeObject;
    queryCurrentPlanResponse({ value }: queryCurrentPlanResponseParams): EncodeObject;
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
        CosmosUpgradeV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
