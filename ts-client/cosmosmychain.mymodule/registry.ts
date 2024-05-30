import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/cosmosmychain/mymodule/query";
import { MsgUpdateParams } from "./types/cosmosmychain/mymodule/tx";
import { Params } from "./types/cosmosmychain/mymodule/params";
import { QueryParamsResponse } from "./types/cosmosmychain/mymodule/query";
import { GenesisState } from "./types/cosmosmychain/mymodule/genesis";
import { MsgUpdateParamsResponse } from "./types/cosmosmychain/mymodule/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmosmychain.mymodule.QueryParamsRequest", QueryParamsRequest],
    ["/cosmosmychain.mymodule.MsgUpdateParams", MsgUpdateParams],
    ["/cosmosmychain.mymodule.Params", Params],
    ["/cosmosmychain.mymodule.QueryParamsResponse", QueryParamsResponse],
    ["/cosmosmychain.mymodule.GenesisState", GenesisState],
    ["/cosmosmychain.mymodule.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }