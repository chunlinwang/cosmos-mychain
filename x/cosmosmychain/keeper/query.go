package keeper

import (
	"github.com/chunlinwang/cosmos-mychain/x/cosmosmychain/types"
)

var _ types.QueryServer = Keeper{}
