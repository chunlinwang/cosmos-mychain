import { Params } from "./types/cosmosmychain/cosmosmychain/params";
import { QueryParamsRequest } from "./types/cosmosmychain/cosmosmychain/query";
import { GenesisState } from "./types/cosmosmychain/cosmosmychain/genesis";
import { MsgUpdateParamsResponse } from "./types/cosmosmychain/cosmosmychain/tx";
import { QueryParamsResponse } from "./types/cosmosmychain/cosmosmychain/query";
import { MsgUpdateParams } from "./types/cosmosmychain/cosmosmychain/tx";
const msgTypes = [
    ["/cosmosmychain.cosmosmychain.Params", Params],
    ["/cosmosmychain.cosmosmychain.QueryParamsRequest", QueryParamsRequest],
    ["/cosmosmychain.cosmosmychain.GenesisState", GenesisState],
    ["/cosmosmychain.cosmosmychain.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/cosmosmychain.cosmosmychain.QueryParamsResponse", QueryParamsResponse],
    ["/cosmosmychain.cosmosmychain.MsgUpdateParams", MsgUpdateParams],
];
export { msgTypes };
